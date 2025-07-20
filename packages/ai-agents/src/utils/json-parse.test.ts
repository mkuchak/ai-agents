import { describe, expect, it, vi } from "vitest";
import { jsonParse } from "./json-parse";

describe("jsonParse", () => {
  describe("Basic functionality", () => {
    it("should parse valid JSON objects", () => {
      const input = '{"name": "John", "age": 30}';
      const result = jsonParse<{ name: string; age: number }>(input);

      expect(result).toEqual({ name: "John", age: 30 });
    });

    it("should parse valid JSON arrays", () => {
      const input = '[1, 2, 3, "test"]';
      const result = jsonParse<(number | string)[]>(input);

      expect(result).toEqual([1, 2, 3, "test"]);
    });

    it("should parse primitive JSON values", () => {
      expect(jsonParse<string>('"hello"')).toBe("hello");
      expect(jsonParse<number>("42")).toBe(42);
      expect(jsonParse<boolean>("true")).toBe(true);
      expect(jsonParse<boolean>("false")).toBe(false);
      expect(jsonParse<null>("null")).toBe(null);
    });

    it("should parse complex nested JSON structures", () => {
      const input = `{
        "user": {
          "name": "Alice",
          "preferences": {
            "theme": "dark",
            "notifications": true
          },
          "tags": ["admin", "developer"]
        }
      }`;

      const result = jsonParse<{
        user: {
          name: string;
          preferences: { theme: string; notifications: boolean };
          tags: string[];
        };
      }>(input);

      expect(result).toEqual({
        user: {
          name: "Alice",
          preferences: {
            theme: "dark",
            notifications: true,
          },
          tags: ["admin", "developer"],
        },
      });
    });
  });

  describe("Null and undefined handling", () => {
    it("should return undefined for null input", () => {
      const result = jsonParse(null);
      expect(result).toBeUndefined();
    });

    it("should return undefined for undefined input", () => {
      const result = jsonParse(undefined);
      expect(result).toBeUndefined();
    });

    it("should return undefined for empty string", () => {
      const result = jsonParse("");
      expect(result).toBeUndefined();
    });

    it("should return undefined for whitespace-only string", () => {
      const result = jsonParse("   \n\t   ");
      expect(result).toBeUndefined();
    });
  });

  describe("Markdown code block removal", () => {
    it("should parse JSON wrapped in markdown code blocks", () => {
      const input = '```json\n{"name": "Bob", "active": true}\n```';
      const result = jsonParse<{ name: string; active: boolean }>(input);

      expect(result).toEqual({ name: "Bob", active: true });
    });

    it("should parse JSON in markdown code blocks without language specifier", () => {
      const input = '```\n{"count": 5}\n```';
      const result = jsonParse<{ count: number }>(input);

      expect(result).toEqual({ count: 5 });
    });

    it("should handle markdown code blocks without newlines", () => {
      const input = '```json{"id": 123}```';
      const result = jsonParse<{ id: number }>(input);

      expect(result).toEqual({ id: 123 });
    });

    it("should handle multiple markdown code block patterns", () => {
      const input = '```json\n{"value": "test"}\n```\nSome text here\n```';
      const result = jsonParse<{ value: string }>(input);

      expect(result).toEqual({ value: "test" });
    });
  });

  describe("XML tag removal", () => {
    it("should parse JSON with XML tags removed", () => {
      const input = '<data>{"message": "Hello World"}</data>';
      const result = jsonParse<{ message: string }>(input);

      expect(result).toEqual({ message: "Hello World" });
    });

    it("should handle multiple XML tags", () => {
      const input =
        '<response><status>success</status><payload>{"id": 42}</payload></response>';
      const result = jsonParse<{ id: number }>(input);

      expect(result).toEqual({ id: 42 });
    });

    it("should handle self-closing XML tags", () => {
      const input = '<meta charset="utf-8"/>{"valid": true}';
      const result = jsonParse<{ valid: boolean }>(input);

      expect(result).toEqual({ valid: true });
    });

    it("should handle nested XML tags", () => {
      const input =
        '<outer><inner><content>{"nested": "value"}</content></inner></outer>';
      const result = jsonParse<{ nested: string }>(input);

      expect(result).toEqual({ nested: "value" });
    });
  });

  describe("JSON extraction from surrounding text", () => {
    it("should extract JSON object from text", () => {
      const input = 'Here is the data: {"name": "Charlie"} and some more text';
      const result = jsonParse<{ name: string }>(input);

      expect(result).toEqual({ name: "Charlie" });
    });

    it("should extract JSON array from text", () => {
      const input = "The numbers are [1, 2, 3] in this list.";
      const result = jsonParse<number[]>(input);

      expect(result).toEqual([1, 2, 3]);
    });

    it("should handle JSON with text before and after", () => {
      const input =
        'Response: {"success": true, "data": [1, 2]} - processed successfully';
      const result = jsonParse<{ success: boolean; data: number[] }>(input);

      expect(result).toEqual({ success: true, data: [1, 2] });
    });

    it("should prefer the outermost JSON structure", () => {
      const input = 'Data: {"outer": {"inner": "value"}} done';
      const result = jsonParse<{ outer: { inner: string } }>(input);

      expect(result).toEqual({ outer: { inner: "value" } });
    });

    it("should handle multiple potential JSON structures", () => {
      const input = '[1, 2] and also {"key": "value"} in text';
      const result = jsonParse<number[] | { key: string }>(input);

      // Should return undefined when jsonrepair can't handle mixed content
      expect(result).toBeUndefined();
    });
  });

  describe("String normalization", () => {
    it("should convert escaped newlines to actual newlines", () => {
      const input = '{"text": "line1\\nline2\\nline3"}';
      const result = jsonParse<{ text: string }>(input);

      expect(result).toEqual({ text: "line1\nline2\nline3" });
    });

    it("should fix TypeScript optional property syntax", () => {
      const input = '{"name": "test", "age"?: 25}';
      const result = jsonParse<{ name: string; age?: number }>(input);

      expect(result).toEqual({ name: "test", age: 25 });
    });

    it("should handle multiple TypeScript optional properties", () => {
      const input =
        '{"required": true, "optional1"?: "value", "optional2"?: null}';
      const result = jsonParse<{
        required: boolean;
        optional1?: string;
        optional2?: null;
      }>(input);

      expect(result).toEqual({
        required: true,
        optional1: "value",
        optional2: null,
      });
    });
  });

  describe("JSON repair functionality", () => {
    it("should repair malformed JSON with missing quotes", () => {
      const input = '{name: "John", age: 30}';
      const result = jsonParse<{ name: string; age: number }>(input);

      expect(result).toEqual({ name: "John", age: 30 });
    });

    it("should repair JSON with trailing commas", () => {
      const input = '{"items": [1, 2, 3,], "count": 3,}';
      const result = jsonParse<{ items: number[]; count: number }>(input);

      expect(result).toEqual({ items: [1, 2, 3], count: 3 });
    });

    it("should repair JSON with single quotes", () => {
      const input = "{'name': 'Alice', 'active': true}";
      const result = jsonParse<{ name: string; active: boolean }>(input);

      expect(result).toEqual({ name: "Alice", active: true });
    });

    it("should handle mixed quote styles", () => {
      const input = `{"name": 'Bob', 'age': "25"}`;
      const result = jsonParse<{ name: string; age: string }>(input);

      expect(result).toEqual({ name: "Bob", age: "25" });
    });
  });

  describe("Complex scenarios", () => {
    it("should handle JSON in markdown with XML tags", () => {
      const input = `
        <response>
        \`\`\`json
        {"status": "success", "data": {"users": [{"id": 1, "name": "Admin"}]}}
        \`\`\`
        </response>
      `;
      const result = jsonParse<{
        status: string;
        data: { users: Array<{ id: number; name: string }> };
      }>(input);

      expect(result).toEqual({
        status: "success",
        data: { users: [{ id: 1, name: "Admin" }] },
      });
    });

    it("should handle malformed JSON in markdown blocks", () => {
      const input = `
        \`\`\`json
        {
          name: "Test",
          values: [1, 2, 3,],
          "active"?: true
        }
        \`\`\`
      `;
      const result = jsonParse<{
        name: string;
        values: number[];
        active?: boolean;
      }>(input);

      expect(result).toEqual({
        name: "Test",
        values: [1, 2, 3],
        active: true,
      });
    });

    it("should handle deeply nested structures with repairs", () => {
      const input = `{
        user: {
          profile: {
            name: "Deep",
            settings: {
              theme: 'dark',
              notifications: [
                {type: 'email', enabled: true,},
                {type: 'sms', enabled: false}
              ]
            }
          }
        }
      }`;

      const result = jsonParse<{
        user: {
          profile: {
            name: string;
            settings: {
              theme: string;
              notifications: Array<{ type: string; enabled: boolean }>;
            };
          };
        };
      }>(input);

      expect(result).toEqual({
        user: {
          profile: {
            name: "Deep",
            settings: {
              theme: "dark",
              notifications: [
                { type: "email", enabled: true },
                { type: "sms", enabled: false },
              ],
            },
          },
        },
      });
    });
  });

  describe("Error handling", () => {
    it("should reject plain text that is not JSON", () => {
      const result = jsonParse<string>("this is not json at all");
      expect(result).toBeUndefined();
    });

    it("should repair incomplete JSON structures", () => {
      // jsonrepair automatically fixes incomplete structures
      expect(jsonParse<{ incomplete: null }>('{"incomplete":')).toEqual({
        incomplete: null,
      });
      expect(jsonParse<number[]>("[1, 2,")).toEqual([1, 2]);
      expect(jsonParse<{ key: null }>('{"key"')).toEqual({ key: null });
    });

    it("should reject text without JSON structure", () => {
      const result = jsonParse<string>(
        "Just some regular text without any JSON structure."
      );
      expect(result).toBeUndefined();
    });

    it("should handle empty/minimal structures", () => {
      expect(jsonParse("{}")).toEqual({});
      expect(jsonParse("[]")).toEqual([]);
      // biome-ignore lint/complexity/noBannedTypes: need to test with the exact value
      expect(jsonParse<{}>("{")).toEqual({});
      expect(jsonParse("}")).toBeUndefined(); // Single closing brace fails
      expect(jsonParse<[]>("[")).toEqual([]);
      expect(jsonParse("]")).toBeUndefined(); // Single closing bracket fails
    });

    it("should log errors to console when parsing truly fails", () => {
      const consoleSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      // This specific case fails because jsonrepair can't handle mixed content
      jsonParse('[1, 2] and also {"key": "value"} in text');

      expect(consoleSpy).toHaveBeenCalledWith(
        "Failed to parse JSON:",
        expect.any(String)
      );

      consoleSpy.mockRestore();
    });
  });

  describe("Edge cases", () => {
    it("should handle extremely large JSON structures", () => {
      const largeArray = Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        name: `item-${i}`,
        active: i % 2 === 0,
      }));

      const input = JSON.stringify({ data: largeArray });
      const result = jsonParse<{ data: typeof largeArray }>(input);

      expect(result).toEqual({ data: largeArray });
      expect(result?.data).toHaveLength(1000);
    });

    it("should handle JSON with unicode characters", () => {
      const input = '{"emoji": "🚀", "chinese": "你好", "math": "π ≈ 3.14"}';
      const result = jsonParse<{
        emoji: string;
        chinese: string;
        math: string;
      }>(input);

      expect(result).toEqual({
        emoji: "🚀",
        chinese: "你好",
        math: "π ≈ 3.14",
      });
    });

    it("should handle JSON with special characters in strings", () => {
      const input =
        '{"path": "C:\\\\Users\\\\test", "regex": "/[a-zA-Z]+/g", "quotes": "\\"nested\\" quotes"}';
      const result = jsonParse<{ path: string; regex: string; quotes: string }>(
        input
      );

      expect(result).toEqual({
        path: "C:\\Users\\test",
        regex: "/[a-zA-Z]+/g",
        quotes: '"nested" quotes',
      });
    });

    it("should handle JSON with numeric edge cases", () => {
      const input =
        '{"zero": 0, "negative": -42, "float": 3.14159, "scientific": 1.23e-4}';
      const result = jsonParse<{
        zero: number;
        negative: number;
        float: number;
        scientific: number;
      }>(input);

      expect(result).toEqual({
        zero: 0,
        negative: -42,
        // biome-ignore lint/suspicious/noApproximativeNumericConstant: need to test with the exact value
        float: 3.14159,
        scientific: 1.23e-4,
      });
    });
  });
});
