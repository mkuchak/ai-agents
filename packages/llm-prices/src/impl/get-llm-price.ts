import { promises as fs } from "node:fs";
import { join } from "node:path";
import type { LlmProvider } from "../contracts/llm-provider.js";

type ModelPricingData = LlmProvider[keyof LlmProvider];

const CACHE_DIR = join(process.cwd(), ".cache");
const CACHE_FILE = join(CACHE_DIR, "llm-prices.json");
const METADATA_FILE = join(CACHE_DIR, "llm-prices-meta.json");
const DEFAULT_TTL_MS = 60 * 60 * 1000; // 1 hour in milliseconds
const DATA_URL =
  "https://raw.githubusercontent.com/BerriAI/litellm/main/model_prices_and_context_window.json";

interface CacheMetadata {
  timestamp: number;
  ttl: number;
}

export interface GetLlmPriceOptions {
  bypassCache?: boolean;
  ttlMs?: number;
}

/**
 * Fetches LLM pricing data from GitHub with file-based caching
 * @param modelName - The model name to get pricing for
 * @param options - Configuration options
 * @returns The pricing data for the specified model, or null if not found
 */
export async function getLlmPrice(
  modelName: string,
  options: GetLlmPriceOptions = {}
): Promise<ModelPricingData | null> {
  const { bypassCache = false, ttlMs = DEFAULT_TTL_MS } = options;

  try {
    // Check if we should use cached data
    if (!bypassCache) {
      const cachedData = await getCachedData(ttlMs);
      if (cachedData) {
        return getModelFromData(cachedData, modelName);
      }
    }

    // Fetch fresh data
    const freshData = await fetchFreshData();

    // Cache the fresh data
    await cacheData(freshData, ttlMs);

    return getModelFromData(freshData, modelName);
  } catch (error) {
    console.error("Error fetching LLM pricing data:", error);

    // Try to return cached data as fallback, even if expired
    try {
      const fallbackData = await getCachedDataFallback();
      if (fallbackData) {
        console.warn("Using expired cached data as fallback");
        return getModelFromData(fallbackData, modelName);
      }
    } catch (fallbackError) {
      console.error("Failed to load fallback data:", fallbackError);
    }

    throw error;
  }
}

/**
 * Gets all available model names from the pricing data
 */
export async function getAvailableModels(
  options: GetLlmPriceOptions = {}
): Promise<string[]> {
  const { bypassCache = false, ttlMs = DEFAULT_TTL_MS } = options;

  try {
    let data: LlmProvider;

    if (!bypassCache) {
      const cachedData = await getCachedData(ttlMs);
      if (cachedData) {
        data = cachedData;
      } else {
        data = await fetchFreshData();
        await cacheData(data, ttlMs);
      }
    } else {
      data = await fetchFreshData();
      await cacheData(data, ttlMs);
    }

    return Object.keys(data).filter((key) => key !== "sample_spec");
  } catch (error) {
    console.error("Error fetching available models:", error);
    throw error;
  }
}

async function getCachedData(ttlMs: number): Promise<LlmProvider | null> {
  try {
    // Check if cache files exist
    const [cacheExists, metaExists] = await Promise.all([
      fileExists(CACHE_FILE),
      fileExists(METADATA_FILE),
    ]);

    if (!cacheExists || !metaExists) {
      return null;
    }

    // Read metadata
    const metaContent = await fs.readFile(METADATA_FILE, "utf-8");
    const metadata: CacheMetadata = JSON.parse(metaContent);

    // Check if cache is still valid
    const now = Date.now();
    const cacheAge = now - metadata.timestamp;

    if (cacheAge > ttlMs) {
      return null; // Cache expired
    }

    // Read and return cached data
    const cacheContent = await fs.readFile(CACHE_FILE, "utf-8");
    return JSON.parse(cacheContent) as LlmProvider;
  } catch (error) {
    console.warn("Error reading cached data:", error);
    return null;
  }
}

async function getCachedDataFallback(): Promise<LlmProvider | null> {
  try {
    const cacheExists = await fileExists(CACHE_FILE);
    if (!cacheExists) {
      return null;
    }

    const cacheContent = await fs.readFile(CACHE_FILE, "utf-8");
    return JSON.parse(cacheContent) as LlmProvider;
  } catch (_error) {
    return null;
  }
}

async function fetchFreshData(): Promise<LlmProvider> {
  const response = await fetch(DATA_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch LLM pricing data: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as LlmProvider;
  return data;
}

async function cacheData(data: LlmProvider, ttlMs: number): Promise<void> {
  try {
    // Ensure cache directory exists
    await fs.mkdir(CACHE_DIR, { recursive: true });

    // Create metadata
    const metadata: CacheMetadata = {
      timestamp: Date.now(),
      ttl: ttlMs,
    };

    // Write cache files
    await Promise.all([
      fs.writeFile(CACHE_FILE, JSON.stringify(data, null, 2)),
      fs.writeFile(METADATA_FILE, JSON.stringify(metadata, null, 2)),
    ]);
  } catch (error) {
    console.error("Error caching data:", error);
    // Don't throw here, caching failure shouldn't prevent data usage
  }
}

function getModelFromData(
  data: LlmProvider,
  modelName: string
): ModelPricingData | null {
  const modelKey = modelName as keyof LlmProvider;

  if (modelKey in data && modelKey !== "sample_spec") {
    return data[modelKey];
  }

  return null;
}

async function fileExists(path: string): Promise<boolean> {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

/**
 * Clears the cached LLM pricing data
 */
export async function clearCache(): Promise<void> {
  try {
    await Promise.all([
      fs
        .unlink(CACHE_FILE)
        .catch(() => {}), // Ignore errors if file doesn't exist
      fs
        .unlink(METADATA_FILE)
        .catch(() => {}), // Ignore errors if file doesn't exist
    ]);
  } catch (error) {
    console.error("Error clearing cache:", error);
    throw error;
  }
}

/**
 * Gets cache information
 */
export async function getCacheInfo(): Promise<{
  exists: boolean;
  age?: number;
  ttl?: number;
} | null> {
  try {
    const metaExists = await fileExists(METADATA_FILE);

    if (!metaExists) {
      return { exists: false };
    }

    const metaContent = await fs.readFile(METADATA_FILE, "utf-8");
    const metadata: CacheMetadata = JSON.parse(metaContent);

    const age = Date.now() - metadata.timestamp;

    return {
      exists: true,
      age,
      ttl: metadata.ttl,
    };
  } catch (error) {
    console.error("Error getting cache info:", error);
    return null;
  }
}
