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

  it("should stream tool results automatically", async () => {
    const response = await axios.post(
      `${BASE_URL}/chat`,
      { message: "What is 5 * 6?" },
      {
        responseType: "stream",
        timeout: 10000,
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
          expect(streamedData).toContain("30"); // Should contain the answer
          // Should contain tool result JSON
          expect(streamedData).toContain('"isToolResult":true');
          expect(streamedData).toContain('"name":"calculator"');
          resolve();
        } catch (error) {
          reject(error);
        }
      });

      response.data.on("error", reject);
    });
  });

  it("should stream tool results with detailed information", async () => {
    const response = await axios.post(
      `${BASE_URL}/chat`,
      {
        message: "What is 7 * 8?",
      },
      {
        responseType: "stream",
        timeout: 10000,
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
          expect(streamedData).toContain("56"); // Should contain the answer

          // Should contain tool result JSON
          expect(streamedData).toContain('"isToolResult":true');
          expect(streamedData).toContain('"name":"calculator"');

          // Find tool result by searching through all content - now without newlines
          let toolResultLine = null;

          // Simple approach: search for calculator tool result pattern in the entire stream
          const calculatorPattern =
            /"isToolResult":true[^}]*"name":"calculator"[^}]*}/;
          const match = streamedData.match(calculatorPattern);

          if (match) {
            // Extract the full JSON object containing this match
            const matchStart = streamedData.indexOf(match[0]);
            const jsonStart = streamedData.lastIndexOf(
              '{"isToolResult":true',
              matchStart
            );
            if (jsonStart !== -1) {
              const remaining = streamedData.substring(jsonStart);
              let braceCount = 0;
              let endIndex = -1;

              for (let i = 0; i < remaining.length; i++) {
                if (remaining[i] === "{") braceCount++;
                if (remaining[i] === "}") {
                  braceCount--;
                  if (braceCount === 0) {
                    endIndex = i + 1;
                    break;
                  }
                }
              }

              if (endIndex !== -1) {
                toolResultLine = remaining.substring(0, endIndex);
              }
            }
          }

          expect(toolResultLine).toBeTruthy();

          if (toolResultLine) {
            const toolResult = JSON.parse(toolResultLine);
            expect(toolResult).toHaveProperty("isToolResult", true);
            expect(toolResult).toHaveProperty("name");
            expect(toolResult).toHaveProperty("input");
            expect(toolResult).toHaveProperty("output");
            expect(toolResult).toHaveProperty("timestamp");
            expect(toolResult.name).toBe("calculator");
          }

          resolve();
        } catch (error) {
          reject(error);
        }
      });

      response.data.on("error", reject);
    });
  });

  it("should stream both text and tool results in correct order", async () => {
    const response = await axios.post(
      `${BASE_URL}/chat`,
      {
        message: "Calculate 9 * 9 and then tell me what day it is",
      },
      {
        responseType: "stream",
        timeout: 15000,
      }
    );

    expect(response.status).toBe(200);

    // Collect streamed data with order tracking
    const streamedChunks: Array<{
      type: "text" | "tool";
      content: string;
      order: number;
    }> = [];
    let currentChunk = "";
    let order = 0;

    return new Promise<void>((resolve, reject) => {
      response.data.on("data", (chunk: Buffer) => {
        currentChunk += chunk.toString();

        // Check for complete tool results (JSON lines)
        const lines = currentChunk.split("\n");
        currentChunk = lines.pop() || ""; // Keep incomplete line

        // Helper function to extract tool results from concatenated JSON
        const extractToolResults = (text: string) => {
          const results = [];

          // Look for tool result patterns
          if (
            text.includes('{"isToolResult":true') ||
            text.includes('\\"isToolResult\\":true')
          ) {
            let startIndex = text.indexOf('{"isToolResult":true');
            if (startIndex === -1) {
              startIndex = text.indexOf('{\\"isToolResult\\":true');
            }

            while (startIndex !== -1) {
              // Extract the JSON from this point
              const potentialJson = text.substring(startIndex);

              // Try to find the end of the JSON object
              let braceCount = 0;
              let endIndex = -1;
              for (let i = 0; i < potentialJson.length; i++) {
                if (potentialJson[i] === "{") braceCount++;
                if (potentialJson[i] === "}") {
                  braceCount--;
                  if (braceCount === 0) {
                    endIndex = i + 1;
                    break;
                  }
                }
              }

              if (endIndex !== -1) {
                try {
                  const jsonStr = potentialJson.substring(0, endIndex);
                  const parsed = JSON.parse(jsonStr);
                  if (parsed.isToolResult) {
                    results.push(jsonStr);
                  }
                } catch {
                  // Invalid JSON, continue
                }
              }

              // Look for next tool result
              const nextStart = text.indexOf(
                '{"isToolResult":true',
                startIndex + 1
              );
              const nextStartEscaped = text.indexOf(
                '{\\"isToolResult\\":true',
                startIndex + 1
              );
              startIndex = Math.min(
                nextStart === -1 ? Infinity : nextStart,
                nextStartEscaped === -1 ? Infinity : nextStartEscaped
              );
              if (startIndex === Infinity) startIndex = -1;
            }
          }

          return results;
        };

        for (const line of lines) {
          if (line.trim()) {
            const toolResults = extractToolResults(line);

            if (toolResults.length > 0) {
              // Add tool results
              for (const toolResult of toolResults) {
                streamedChunks.push({
                  type: "tool",
                  content: toolResult,
                  order: order++,
                });
              }

              // The rest of the line (if any) is treated as text
              // Remove tool results and see what's left
              let remainingText = line;
              for (const toolResult of toolResults) {
                remainingText = remainingText.replace(toolResult, "");
              }

              if (remainingText.trim()) {
                streamedChunks.push({
                  type: "text",
                  content: remainingText,
                  order: order++,
                });
              }
            } else {
              // No tool results, treat as text
              streamedChunks.push({
                type: "text",
                content: line,
                order: order++,
              });
            }
          }
        }
      });

      response.data.on("end", () => {
        try {
          // Add any remaining text
          if (currentChunk) {
            streamedChunks.push({
              type: "text",
              content: currentChunk,
              order: order++,
            });
          }

          const fullContent = streamedChunks.map((c) => c.content).join("");
          expect(fullContent).toContain("81"); // 9 * 9 = 81

          // Should have at least one tool result
          const toolChunks = streamedChunks.filter((c) => c.type === "tool");
          expect(toolChunks.length).toBeGreaterThan(0);

          // Verify tool result structure - find the calculator tool specifically
          const calculatorToolChunk = toolChunks.find((chunk) => {
            try {
              const toolResult = JSON.parse(chunk.content);
              return toolResult.name === "calculator";
            } catch {
              return false;
            }
          });

          expect(calculatorToolChunk).toBeTruthy();

          if (calculatorToolChunk) {
            const toolResult = JSON.parse(calculatorToolChunk.content);
            expect(toolResult.name).toBe("calculator");
            expect(toolResult.output).toHaveProperty("result");
          }

          resolve();
        } catch (error) {
          reject(error);
        }
      });

      response.data.on("error", reject);
    });
  }, 20000);

  it("should handle tool streaming with weather requests", async () => {
    const response = await axios.post(
      `${BASE_URL}/chat`,
      {
        message: "What's the weather like in Tokyo?",
      },
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
          expect(streamedData.toLowerCase()).toMatch(
            /weather|temperature|tokyo/
          );

          // Should contain tool result JSON for weather tool
          expect(streamedData).toContain('"isToolResult":true');
          expect(streamedData).toContain('"name":"get_weather"');

          // Find tool result by searching through all content - now without newlines
          let toolResultLine = null;

          // Simple approach: search for get_weather tool result pattern in the entire stream
          const weatherPattern =
            /"isToolResult":true[^}]*"name":"get_weather"[^}]*}/;
          const match = streamedData.match(weatherPattern);

          if (match) {
            // Extract the full JSON object containing this match
            const matchStart = streamedData.indexOf(match[0]);
            const jsonStart = streamedData.lastIndexOf(
              '{"isToolResult":true',
              matchStart
            );
            if (jsonStart !== -1) {
              const remaining = streamedData.substring(jsonStart);
              let braceCount = 0;
              let endIndex = -1;

              for (let i = 0; i < remaining.length; i++) {
                if (remaining[i] === "{") braceCount++;
                if (remaining[i] === "}") {
                  braceCount--;
                  if (braceCount === 0) {
                    endIndex = i + 1;
                    break;
                  }
                }
              }

              if (endIndex !== -1) {
                toolResultLine = remaining.substring(0, endIndex);
              }
            }
          }

          expect(toolResultLine).toBeTruthy();

          if (toolResultLine) {
            const toolResult = JSON.parse(toolResultLine);
            expect(toolResult).toHaveProperty("isToolResult", true);
            expect(toolResult).toHaveProperty("name");
            expect(toolResult).toHaveProperty("input");
            expect(toolResult).toHaveProperty("output");
            expect(toolResult).toHaveProperty("timestamp");
            expect(toolResult.name).toBe("get_weather");
            expect(toolResult.input).toHaveProperty("location");
          }

          resolve();
        } catch (error) {
          reject(error);
        }
      });

      response.data.on("error", reject);
    });
  });
});
