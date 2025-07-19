/**
 * Formats XML/HTML with properly indented tag hierarchy and content
 * that respects the indentation level of its parent tags
 */

export interface FormatXmlOptions {
  /** Number of spaces for indentation (default: 2) */
  indentSize?: number;
  /** Type of indentation - 'spaces' or 'tabs' (default: 'spaces') */
  indentType?: 'spaces' | 'tabs';
  /** Whether to preserve whitespace in content (default: true) */
  preserveWhitespace?: boolean;
  /** Whether to normalize line breaks (default: true) */
  normalizeLineBreaks?: boolean;
  /** Whether to trim whitespace from tag content (default: false) */
  trimContent?: boolean;
}

interface FormatterState {
  result: string;
  indentLevel: number;
  inComment: boolean;
  openTags: string[];
  indentString: string;
  options: Required<FormatXmlOptions>;
}

/**
 * Creates default options for XML formatting
 */
function getDefaultOptions(): Required<FormatXmlOptions> {
  return {
    indentSize: 2,
    indentType: 'spaces',
    preserveWhitespace: true,
    normalizeLineBreaks: true,
    trimContent: false,
  };
}

/**
 * Creates the indentation string based on options
 */
function createIndentString(options: Required<FormatXmlOptions>): string {
  return options.indentType === 'tabs' ? '\t' : ' '.repeat(options.indentSize);
}

/**
 * Normalizes XML string by standardizing line breaks
 */
function normalizeXml(xml: string): string {
  return xml.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

/**
 * Checks if a line is the start of a multi-line comment
 */
function isOpeningComment(line: string): boolean {
  return line.includes("<!--") && !line.includes("-->");
}

/**
 * Checks if a line is the end of a multi-line comment
 */
function isClosingComment(line: string): boolean {
  return line.includes("-->");
}

/**
 * Checks if a line is a self-contained comment
 */
function isSelfContainedComment(line: string): boolean {
  return line.startsWith("<!--") && line.endsWith("-->");
}

/**
 * Checks if a line contains an opening tag (but not self-closing)
 */
function isOpeningTag(line: string): boolean {
  return line.match(/<[^\/][^>]*>/) !== null && line.match(/<[^\/][^>]*\/>/) === null;
}

/**
 * Checks if a line contains a closing tag
 */
function isClosingTag(line: string): boolean {
  return line.match(/<\/[^>]+>/) !== null;
}

/**
 * Checks if a line contains a self-closing tag
 */
function isSelfClosingTag(line: string): boolean {
  return line.match(/<[^>]+\/>/) !== null;
}

/**
 * Extracts tag name from a tag string
 */
function extractTagName(line: string): string | null {
  const openingMatch = line.match(/<([^\s>]+)/);
  if (openingMatch) return openingMatch[1];
  
  const closingMatch = line.match(/<\/([^>]+)>/);
  if (closingMatch) return closingMatch[1];
  
  return null;
}

/**
 * Adds an indented line to the result
 */
function addIndentedLine(state: FormatterState, line: string): void {
  const indent = state.indentString.repeat(state.indentLevel);
  state.result += `${indent}${line}\n`;
}

/**
 * Handles comment lines (multi-line and self-contained)
 */
function handleComment(state: FormatterState, line: string): boolean {
  if (isSelfContainedComment(line)) {
    addIndentedLine(state, line);
    return true;
  }

  if (isOpeningComment(line)) {
    state.inComment = true;
    addIndentedLine(state, line);
    return true;
  }

  if (state.inComment) {
    if (isClosingComment(line)) {
      state.inComment = false;
    }
    addIndentedLine(state, line);
    return true;
  }

  return false;
}

/**
 * Handles opening tags with various content patterns
 */
function handleOpeningTag(state: FormatterState, line: string): void {
  const tagName = extractTagName(line);
  if (!tagName) {
    addIndentedLine(state, line);
    return;
  }

  // Check if it's just an opening tag
  if (line === `<${tagName}>`) {
    addIndentedLine(state, line);
    state.openTags.push(tagName);
    state.indentLevel++;
  }
  // If there's content after the opening tag but no closing tag
  else if (line.startsWith(`<${tagName}>`) && !line.endsWith(`</${tagName}>`)) {
    const parts = line.split(`<${tagName}>`);
    addIndentedLine(state, `<${tagName}>`);
    state.openTags.push(tagName);
    state.indentLevel++;
    // Add content with proper indentation
    const content = state.options.trimContent ? parts[1].trim() : parts[1];
    state.result += `${state.indentString.repeat(state.indentLevel)}${content}\n`;
  }
  // If tag opens and closes on same line with content
  else if (line.startsWith(`<${tagName}>`) && line.endsWith(`</${tagName}>`)) {
    addIndentedLine(state, line);
  } 
  else {
    addIndentedLine(state, line);
    state.openTags.push(tagName);
    state.indentLevel++;
  }
}

/**
 * Handles closing tags with various content patterns
 */
function handleClosingTag(state: FormatterState, line: string): void {
  const tagName = extractTagName(line);
  if (!tagName) {
    addIndentedLine(state, line);
    return;
  }

  // If it's just a closing tag
  if (line === `</${tagName}>`) {
    state.indentLevel = Math.max(0, state.indentLevel - 1);
    addIndentedLine(state, line);
    if (state.openTags.length > 0) state.openTags.pop();
  }
  // If there's content before the closing tag
  else if (line.endsWith(`</${tagName}>`) && !line.startsWith(`<${tagName}>`)) {
    const parts = line.split(`</${tagName}>`);
    // Add content with proper indentation
    const content = state.options.trimContent ? parts[0].trim() : parts[0];
    state.result += `${state.indentString.repeat(state.indentLevel)}${content}\n`;
    state.indentLevel = Math.max(0, state.indentLevel - 1);
    addIndentedLine(state, `</${tagName}>`);
    if (state.openTags.length > 0) state.openTags.pop();
  } 
  else {
    state.indentLevel = Math.max(0, state.indentLevel - 1);
    addIndentedLine(state, line);
    if (state.openTags.length > 0) state.openTags.pop();
  }
}

/**
 * Processes a single line with whitespace handling based on options
 */
function processLineWithWhitespace(state: FormatterState, originalLine: string): void {
  // Skip empty lines
  if (!originalLine.trim()) return;

  const trimmedLine = originalLine.trim();
  
  // Handle comments first
  if (handleComment(state, trimmedLine)) return;

  // Handle different tag types
  if (isOpeningTag(trimmedLine)) {
    handleOpeningTag(state, trimmedLine);
  } else if (isClosingTag(trimmedLine)) {
    handleClosingTag(state, trimmedLine);
  } else if (isSelfClosingTag(trimmedLine)) {
    addIndentedLine(state, trimmedLine);
  } else {
    // Content line - preserve or trim whitespace based on options
    const contentLine = state.options.trimContent ? trimmedLine : originalLine;
    addIndentedLine(state, contentLine);
  }
}

/**
 * Processes a single line based on its type (legacy function for compatibility)
 */
function processLine(state: FormatterState, line: string): void {
  processLineWithWhitespace(state, line);
}

export function formatXml(xml: string, options?: FormatXmlOptions): string {
  const mergedOptions = { ...getDefaultOptions(), ...options };
  const processedXml = mergedOptions.normalizeLineBreaks ? normalizeXml(xml) : xml;
  const lines = processedXml.split(/\r?\n/);
  
  const state: FormatterState = {
    result: "",
    indentLevel: 0,
    inComment: false,
    openTags: [],
    indentString: createIndentString(mergedOptions),
    options: mergedOptions
  };

  for (const originalLine of lines) {
    processLineWithWhitespace(state, originalLine);
  }

  return state.result.trim();
}

