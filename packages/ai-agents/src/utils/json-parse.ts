import { jsonrepair } from "jsonrepair";

/**
 * Safely parses JSON from a string that may contain markdown/XML formatting or be null/undefined
 * @param json The string to parse, which may contain markdown, XML tags, text, or be null/undefined
 * @returns The parsed object of type T or undefined if parsing fails
 */
export function jsonParse<T>(json?: string | null): T | undefined {
  if (json == null) return undefined;

  try {
    const cleanedJson = cleanJsonString(json);
    if (!cleanedJson) return undefined;

    // Check if the cleaned string looks like JSON
    const trimmed = cleanedJson.trim();
    if (!isLikelyJson(trimmed)) {
      return undefined;
    }

    const repairedJson = jsonrepair(cleanedJson);
    return JSON.parse(repairedJson) as T;
  } catch (error) {
    console.error(
      "Failed to parse JSON:",
      error instanceof Error ? error.message : String(error)
    );
    return undefined;
  }
}

/**
 * Determines if a string is likely to be JSON
 */
function isLikelyJson(text: string): boolean {
  if (!text) return false;

  // Objects and arrays
  if (text.startsWith("{") || text.startsWith("[")) {
    return true;
  }

  // JSON primitives
  if (text.startsWith('"') && text.endsWith('"')) {
    return true; // JSON string
  }

  // Numbers (including negative, decimals, scientific notation)
  if (/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(text)) {
    return true;
  }

  // Booleans and null
  if (text === "true" || text === "false" || text === "null") {
    return true;
  }

  // If it contains quotes and colons, it might be malformed JSON that jsonrepair can fix
  if (text.includes(":") && (text.includes('"') || text.includes("'"))) {
    return true;
  }

  // If it has array-like or object-like structure (even malformed)
  if (
    (text.includes("[") && text.includes("]")) ||
    (text.includes("{") && text.includes("}"))
  ) {
    return true;
  }

  // Plain text without JSON structure
  return false;
}

/**
 * Cleans a JSON string by removing formatting and extracting the actual JSON content
 */
function cleanJsonString(input: string): string {
  // Remove markdown code blocks and XML tags
  let cleaned = input
    .replace(/```json\n?|\n?```/g, "") // Remove markdown code blocks
    .replace(/<[^>]*>/g, "") // Remove XML tags
    .trim();

  // Extract JSON content between braces/brackets if surrounded by other text
  const extractedJson = extractJsonContent(cleaned);
  if (extractedJson) {
    cleaned = extractedJson;
  }

  if (!cleaned) return "";

  // Normalize string content
  return cleaned
    .replace(/\\n/g, "\n") // Convert escaped newlines to actual newlines
    .replace(/"([^"]+)"\s*\?\s*:/g, '"$1":'); // Fix TypeScript optional property syntax
}

/**
 * Extracts JSON content from a string that may contain surrounding text
 */
function extractJsonContent(text: string): string | null {
  const openBraceIndex = text.indexOf("{");
  const openBracketIndex = text.indexOf("[");

  // Find the earliest valid JSON start character
  const startIndex = Math.min(
    openBraceIndex === -1 ? Infinity : openBraceIndex,
    openBracketIndex === -1 ? Infinity : openBracketIndex
  );

  if (startIndex === Infinity) return null;

  // Find the latest valid JSON end character
  const endIndex = Math.max(text.lastIndexOf("}"), text.lastIndexOf("]"));

  if (endIndex === -1 || startIndex > endIndex) return null;

  return text.substring(startIndex, endIndex + 1);
}
