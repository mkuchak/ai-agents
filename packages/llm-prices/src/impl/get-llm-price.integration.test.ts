import { promises as fs } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  clearCache,
  getAvailableModels,
  getCacheInfo,
  getLlmPrice,
} from "./get-llm-price.js";

const CACHE_DIR = join(process.cwd(), ".cache");
const CACHE_FILE = join(CACHE_DIR, "llm-prices.json");
const METADATA_FILE = join(CACHE_DIR, "llm-prices-meta.json");

describe("LLM Price Integration Tests (Real API)", () => {
  beforeEach(async () => {
    // Clear cache before each test
    await clearCache();
  });

  afterEach(async () => {
    // Clean up cache after each test
    await clearCache();
  });

  it("should fetch real pricing data from GitHub API", async () => {
    // This test hits the real API
    const result = await getLlmPrice("gpt-4.1");

    expect(result).not.toBeNull();
    expect(result).toBeDefined();

    // Verify it has expected properties (type-safe access)
    if (result && "input_cost_per_token" in result) {
      expect(typeof result.input_cost_per_token).toBe("number");
      expect(result.input_cost_per_token).toBeGreaterThan(0);
    }

    if (result && "litellm_provider" in result) {
      expect(typeof result.litellm_provider).toBe("string");
      expect(result.litellm_provider.length).toBeGreaterThan(0);
    }
  }, 30000); // 30 second timeout for real API call

  it("should create real cache files after fetching data", async () => {
    // Fetch data to create cache
    await getLlmPrice("gpt-4.1-mini");

    // Check that cache files were actually created
    const cacheExists = await fs
      .access(CACHE_FILE)
      .then(() => true)
      .catch(() => false);
    const metaExists = await fs
      .access(METADATA_FILE)
      .then(() => true)
      .catch(() => false);

    expect(cacheExists).toBe(true);
    expect(metaExists).toBe(true);

    // Verify cache file contains valid JSON
    const cacheContent = await fs.readFile(CACHE_FILE, "utf-8");
    const parsedCache = JSON.parse(cacheContent);
    expect(parsedCache).toBeDefined();
    expect(typeof parsedCache).toBe("object");

    // Verify metadata file contains valid metadata
    const metaContent = await fs.readFile(METADATA_FILE, "utf-8");
    const parsedMeta = JSON.parse(metaContent);
    expect(parsedMeta.timestamp).toBeDefined();
    expect(parsedMeta.ttl).toBeDefined();
    expect(typeof parsedMeta.timestamp).toBe("number");
    expect(typeof parsedMeta.ttl).toBe("number");
  }, 30000);

  it("should use cached data on second call", async () => {
    const startTime = Date.now();

    // First call - hits the API
    const firstResult = await getLlmPrice("claude-sonnet-4-20250514");
    const firstCallDuration = Date.now() - startTime;

    const secondStartTime = Date.now();

    // Second call - should use cache
    const secondResult = await getLlmPrice("claude-sonnet-4-20250514");
    const secondCallDuration = Date.now() - secondStartTime;

    // Both results should be identical
    expect(firstResult).toEqual(secondResult);

    // Second call should be significantly faster (cache hit)
    expect(secondCallDuration).toBeLessThan(firstCallDuration / 2);

    // Verify cache info
    const cacheInfo = await getCacheInfo();
    expect(cacheInfo?.exists).toBe(true);
    expect(cacheInfo?.age).toBeDefined();
    expect(cacheInfo?.age).toBeGreaterThan(0);
  }, 30000);

  it("should fetch available models from real API", async () => {
    const models = await getAvailableModels();

    expect(models).toBeInstanceOf(Array);
    expect(models.length).toBeGreaterThan(100); // Should have many models

    // Check for some common models that should exist
    expect(models).toContain("gpt-4.1");
    expect(models).toContain("gpt-4.1-mini");
    expect(models).toContain("claude-sonnet-4-20250514");

    // Should not contain sample_spec
    expect(models).not.toContain("sample_spec");
  }, 30000);

  it("should respect TTL and refetch after expiration", async () => {
    const shortTtl = 1000; // 1 second

    // First call with short TTL
    await getLlmPrice("gpt-4.1", { ttlMs: shortTtl });

    // Verify cache exists
    let cacheInfo = await getCacheInfo();
    expect(cacheInfo?.exists).toBe(true);

    // Wait for TTL to expire
    await new Promise((resolve) => setTimeout(resolve, shortTtl + 100));

    // Check that cache is considered expired
    cacheInfo = await getCacheInfo();
    const isExpired =
      cacheInfo && cacheInfo.age !== undefined && cacheInfo.age > shortTtl;
    expect(isExpired).toBe(true);

    // Next call should fetch fresh data (this will be slower)
    const startTime = Date.now();
    await getLlmPrice("gpt-4.1", { ttlMs: shortTtl });
    const duration = Date.now() - startTime;

    // Should take longer because it refetched
    expect(duration).toBeGreaterThan(10); // Network call overhead
  }, 35000);

  it("should bypass cache when requested", async () => {
    // First call to populate cache
    await getLlmPrice("gpt-4.1");

    // Verify cache exists
    let cacheInfo = await getCacheInfo();
    expect(cacheInfo?.exists).toBe(true);

    // Wait a bit to ensure cache has some age
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Call with bypass cache
    const startTime = Date.now();
    await getLlmPrice("gpt-4.1", { bypassCache: true });
    const duration = Date.now() - startTime;

    // Should have taken longer (network call)
    expect(duration).toBeGreaterThan(10);

    // Cache should be updated with fresh timestamp (age should be very small)
    cacheInfo = await getCacheInfo();
    expect(cacheInfo?.exists).toBe(true);
    if (cacheInfo?.age !== undefined) {
      // New cache should be very fresh (less than 1 second old)
      expect(cacheInfo.age).toBeLessThan(1000);
    }
  }, 30000);

  it("should handle non-existent model gracefully", async () => {
    const result = await getLlmPrice("definitely-not-a-real-model-name-12345");

    expect(result).toBeNull();

    // Should still create cache for the full dataset
    const cacheInfo = await getCacheInfo();
    expect(cacheInfo?.exists).toBe(true);
  }, 30000);

  it("should persist cache across function calls", async () => {
    // Create initial cache
    await getLlmPrice("gpt-4.1");

    // Get different model - should use same cached dataset
    const startTime = Date.now();
    const result = await getLlmPrice("gpt-4.1-mini");
    const duration = Date.now() - startTime;

    expect(result).not.toBeNull();

    // Should be fast (cache hit)
    expect(duration).toBeLessThan(100);

    // Verify we only have one cache file
    const cacheExists = await fs
      .access(CACHE_FILE)
      .then(() => true)
      .catch(() => false);
    expect(cacheExists).toBe(true);
  }, 30000);

  it("should fetch real pricing data for latest Gemini models", async () => {
    // Test Gemini 2.5 Pro
    const geminiProResult = await getLlmPrice("gemini-2.5-pro");
    expect(geminiProResult).not.toBeNull();
    expect(geminiProResult).toBeDefined();

    if (
      geminiProResult &&
      "input_cost_per_token" in geminiProResult &&
      "output_cost_per_token" in geminiProResult
    ) {
      expect(typeof geminiProResult.input_cost_per_token).toBe("number");
      expect(geminiProResult.input_cost_per_token).toBeGreaterThan(0);
      console.log(
        `Gemini 2.5 Pro - Input: $${geminiProResult.input_cost_per_token}, Output: $${geminiProResult.output_cost_per_token}`
      );
    }

    if (geminiProResult && "litellm_provider" in geminiProResult) {
      expect(geminiProResult.litellm_provider).toBe(
        "vertex_ai-language-models"
      );
    }

    // Test Gemini 2.5 Flash
    const geminiFlashResult = await getLlmPrice("gemini-2.5-flash");
    expect(geminiFlashResult).not.toBeNull();
    expect(geminiFlashResult).toBeDefined();

    if (
      geminiFlashResult &&
      "input_cost_per_token" in geminiFlashResult &&
      "output_cost_per_token" in geminiFlashResult
    ) {
      expect(typeof geminiFlashResult.input_cost_per_token).toBe("number");
      expect(geminiFlashResult.input_cost_per_token).toBeGreaterThan(0);
      console.log(
        `Gemini 2.5 Flash - Input: $${geminiFlashResult.input_cost_per_token}, Output: $${geminiFlashResult.output_cost_per_token}`
      );
    }

    if (geminiFlashResult && "litellm_provider" in geminiFlashResult) {
      expect(geminiFlashResult.litellm_provider).toBe(
        "vertex_ai-language-models"
      );
    }

    // Flash should be cheaper than Pro
    if (
      geminiProResult &&
      "input_cost_per_token" in geminiProResult &&
      geminiFlashResult &&
      "input_cost_per_token" in geminiFlashResult
    ) {
      expect(geminiFlashResult.input_cost_per_token).toBeLessThan(
        geminiProResult.input_cost_per_token
      );
    }

    // Test that both models appear in available models list
    const models = await getAvailableModels();
    expect(models).toContain("gemini-2.5-pro");
    expect(models).toContain("gemini-2.5-flash");

    // Check for other Gemini variants that might exist
    const geminiModels = models.filter((model) => model.includes("gemini-2.5"));
    expect(geminiModels.length).toBeGreaterThan(1);
    console.log(
      `Found ${geminiModels.length} Gemini 2.5 models:`,
      geminiModels.slice(0, 5)
    );
  }, 30000);
});
