import { promises as fs } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Gpt4, Gpt4oMini } from "../contracts/llm-provider.js";
import {
  clearCache,
  getAvailableModels,
  getCacheInfo,
  getLlmPrice,
} from "./get-llm-price.js";

// Mock data for testing
const mockLlmData = {
  sample_spec: {
    max_tokens: "string",
    max_input_tokens: "string",
    max_output_tokens: "string",
    input_cost_per_token: 0,
    output_cost_per_token: 0,
    output_cost_per_reasoning_token: 0,
    litellm_provider: "string",
    mode: "string",
    supports_function_calling: false,
    supports_parallel_function_calling: false,
    supports_vision: false,
    supports_audio_input: false,
    supports_audio_output: false,
    supports_prompt_caching: false,
    supports_response_schema: false,
    supports_system_messages: false,
    supports_reasoning: false,
    supports_web_search: false,
    search_context_cost_per_query: {
      search_context_size_low: 0,
      search_context_size_medium: 0,
      search_context_size_high: 0,
    },
    file_search_cost_per_1k_calls: 0,
    file_search_cost_per_gb_per_day: 0,
    vector_store_cost_per_gb_per_day: 0,
    computer_use_input_cost_per_1k_tokens: 0,
    computer_use_output_cost_per_1k_tokens: 0,
    code_interpreter_cost_per_session: 0,
    supported_regions: [],
    deprecation_date: "",
  },
  "gpt-4": {
    max_tokens: 8192,
    max_input_tokens: 8192,
    max_output_tokens: 4096,
    input_cost_per_token: 0.00003,
    output_cost_per_token: 0.00006,
    litellm_provider: "openai",
    mode: "chat",
    supports_function_calling: true,
    supports_prompt_caching: true,
    supports_system_messages: true,
    supports_tool_choice: true,
  },
  "gpt-4o-mini": {
    max_tokens: 16384,
    max_input_tokens: 128000,
    max_output_tokens: 16384,
    input_cost_per_token: 0.00000015,
    output_cost_per_token: 0.0000006,
    input_cost_per_token_batches: 0.000000075,
    output_cost_per_token_batches: 0.0000003,
    cache_read_input_token_cost: 0.000000075,
    litellm_provider: "openai",
    mode: "chat",
    supports_pdf_input: true,
    supports_function_calling: true,
    supports_parallel_function_calling: true,
    supports_response_schema: true,
    supports_vision: true,
    supports_prompt_caching: true,
    supports_system_messages: true,
    supports_tool_choice: true,
  },
};

const CACHE_DIR = join(process.cwd(), ".cache");
const CACHE_FILE = join(CACHE_DIR, "llm-prices.json");
const METADATA_FILE = join(CACHE_DIR, "llm-prices-meta.json");

// Mock global fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("getLlmPrice", () => {
  beforeEach(async () => {
    // Clear cache before each test
    await clearCache();
    vi.resetAllMocks();

    // Mock successful fetch response
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockLlmData,
      status: 200,
      statusText: "OK",
    });
  });

  afterEach(async () => {
    // Clean up cache after each test
    await clearCache();
  });

  describe("basic functionality", () => {
    it("should fetch and return pricing data for a valid model", async () => {
      const result = await getLlmPrice("gpt-4");

      expect(result).toBeDefined();
      expect(result).not.toBeNull();

      // Type assertion for test - we know this is GPT-4 model data
      const gpt4Data = result as Gpt4;
      expect(gpt4Data.input_cost_per_token).toBe(0.00003);
      expect(gpt4Data.output_cost_per_token).toBe(0.00006);
      expect(gpt4Data.litellm_provider).toBe("openai");
      expect(mockFetch).toHaveBeenCalledOnce();
    });

    it("should return null for a non-existent model", async () => {
      const result = await getLlmPrice("non-existent-model");

      expect(result).toBeNull();
      expect(mockFetch).toHaveBeenCalledOnce();
    });

    it("should handle different model names correctly", async () => {
      const gpt4Result = await getLlmPrice("gpt-4");
      const gpt4oMiniResult = await getLlmPrice("gpt-4o-mini");

      expect(gpt4Result).not.toBeNull();
      expect(gpt4oMiniResult).not.toBeNull();

      expect((gpt4Result as Gpt4).input_cost_per_token).toBe(0.00003);
      expect((gpt4oMiniResult as Gpt4oMini).input_cost_per_token).toBe(
        0.00000015
      );
    });
  });

  describe("caching functionality", () => {
    it("should cache data after first fetch", async () => {
      // First call should fetch data
      await getLlmPrice("gpt-4");
      expect(mockFetch).toHaveBeenCalledOnce();

      // Second call should use cache
      const result = await getLlmPrice("gpt-4");
      expect(result).toBeDefined();
      expect(mockFetch).toHaveBeenCalledOnce(); // Still only one call
    });

    it("should create cache files", async () => {
      await getLlmPrice("gpt-4");

      // Check that cache files exist
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
    });

    it("should respect TTL when cache is expired", async () => {
      const shortTtl = 100; // 100ms

      // First call with short TTL
      await getLlmPrice("gpt-4", { ttlMs: shortTtl });
      expect(mockFetch).toHaveBeenCalledOnce();

      // Wait for TTL to expire
      await new Promise((resolve) => setTimeout(resolve, shortTtl + 50));

      // Second call should fetch fresh data
      await getLlmPrice("gpt-4", { ttlMs: shortTtl });
      expect(mockFetch).toHaveBeenCalledTimes(2);
    });

    it("should bypass cache when bypassCache is true", async () => {
      // First call to populate cache
      await getLlmPrice("gpt-4");
      expect(mockFetch).toHaveBeenCalledOnce();

      // Second call with bypassCache should fetch fresh data
      const result = await getLlmPrice("gpt-4", { bypassCache: true });
      expect(result).toBeDefined();
      expect(mockFetch).toHaveBeenCalledTimes(2);
    });
  });

  describe("error handling", () => {
    it("should handle network errors and fall back to cached data", async () => {
      // First, populate cache with successful request
      await getLlmPrice("gpt-4");

      // Then mock a network error
      mockFetch.mockRejectedValueOnce(new Error("Network error"));

      // Should return cached data as fallback
      const result = await getLlmPrice("gpt-4");
      expect(result).toBeDefined();
      expect(result).not.toBeNull();
      expect((result as Gpt4).input_cost_per_token).toBe(0.00003);
    });

    it("should throw error when no cache exists and network fails", async () => {
      mockFetch.mockRejectedValueOnce(new Error("Network error"));

      await expect(getLlmPrice("gpt-4")).rejects.toThrow("Network error");
    });

    it("should handle HTTP errors", async () => {
      // Ensure no cache exists so we get the HTTP error directly
      await clearCache();

      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: "Not Found",
      });

      await expect(getLlmPrice("gpt-4")).rejects.toThrow(
        "Failed to fetch LLM pricing data: 404 Not Found"
      );
    });
  });

  describe("getAvailableModels", () => {
    it("should return list of available models", async () => {
      // Ensure mock is properly set up for this test
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockLlmData,
        status: 200,
        statusText: "OK",
      });

      const models = await getAvailableModels();

      expect(models).toBeInstanceOf(Array);
      expect(models).toContain("gpt-4");
      expect(models).toContain("gpt-4o-mini");
      expect(models).not.toContain("sample_spec"); // Should filter out sample_spec
    });

    it("should respect cache options", async () => {
      await getAvailableModels();
      expect(mockFetch).toHaveBeenCalledOnce();

      // Second call should use cache
      await getAvailableModels();
      expect(mockFetch).toHaveBeenCalledOnce();

      // Call with bypass cache should fetch fresh
      await getAvailableModels({ bypassCache: true });
      expect(mockFetch).toHaveBeenCalledTimes(2);
    });
  });

  describe("cache utilities", () => {
    it("should clear cache files", async () => {
      // Create cache
      await getLlmPrice("gpt-4");

      // Verify cache exists
      let cacheInfo = await getCacheInfo();
      expect(cacheInfo?.exists).toBe(true);

      // Clear cache
      await clearCache();

      // Verify cache is cleared
      cacheInfo = await getCacheInfo();
      expect(cacheInfo?.exists).toBe(false);
    });

    it("should provide cache information", async () => {
      const ttl = 5000;
      await getLlmPrice("gpt-4", { ttlMs: ttl });

      const info = await getCacheInfo();
      expect(info?.exists).toBe(true);
      expect(info?.ttl).toBe(ttl);
      expect(info?.age).toBeGreaterThanOrEqual(0);
      expect(info?.age).toBeLessThan(1000); // Should be very recent
    });

    it("should return null cache info when no cache exists", async () => {
      const info = await getCacheInfo();
      expect(info?.exists).toBe(false);
    });
  });
});
