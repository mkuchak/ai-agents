import axios from "axios";
import { describe, expect, it } from "vitest";

const BASE_URL = process.env.API_URL || "http://localhost:3000";

describe("Chat API E2E", () => {
  it("should handle a simple calculation request", async () => {
    const response = await axios.post(
      `${BASE_URL}/chat`,
      { message: "What is 2 + 2?" },
      {
        responseType: "stream",
        timeout: 10000,
      }
    );

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toBe("text/plain; charset=utf-8");
    expect(response.headers["transfer-encoding"]).toBe("chunked");

    // Collect streamed data
    let streamedData = "";

    return new Promise<void>((resolve, reject) => {
      response.data.on("data", (chunk: Buffer) => {
        streamedData += chunk.toString();
      });

      response.data.on("end", () => {
        try {
          expect(streamedData.length).toBeGreaterThan(0);
          expect(streamedData).toContain("4"); // Should contain the answer
          resolve();
        } catch (error) {
          reject(error);
        }
      });

      response.data.on("error", reject);
    });
  });

  it("should handle a weather request", async () => {
    const response = await axios.post(
      `${BASE_URL}/chat`,
      { message: "What is the weather in Paris?" },
      {
        responseType: "stream",
        timeout: 15000,
      }
    );

    expect(response.status).toBe(200);

    // Collect streamed data
    let streamedData = "";

    return new Promise<void>((resolve, reject) => {
      response.data.on("data", (chunk: Buffer) => {
        streamedData += chunk.toString();
      });

      response.data.on("end", () => {
        try {
          expect(streamedData.length).toBeGreaterThan(0);
          // Should contain some weather-related content
          expect(streamedData.toLowerCase()).toMatch(
            /weather|temperature|paris/
          );
          resolve();
        } catch (error) {
          reject(error);
        }
      });

      response.data.on("error", reject);
    });
  });

  it("should handle empty message gracefully", async () => {
    const response = await axios.post(
      `${BASE_URL}/chat`,
      { message: "" },
      {
        responseType: "stream",
        timeout: 5000,
      }
    );

    expect(response.status).toBe(200);

    // Even with empty message, should complete without error
    return new Promise<void>((resolve, reject) => {
      response.data.on("data", () => {
        // Just consume the data without storing
      });

      response.data.on("end", () => {
        // Should complete successfully even with empty content
        resolve();
      });

      response.data.on("error", reject);
    });
  });
});
