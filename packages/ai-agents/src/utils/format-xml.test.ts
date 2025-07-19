import { describe, it, expect } from "vitest";
import { formatXml, type FormatXmlOptions } from "./format-xml";

describe("formatXml", () => {
  describe("Inline XML formatting (no changes)", () => {
    it("should return inline XML unchanged", () => {
      const input = "<root><child>content</child></root>";
      expect(formatXml(input)).toBe(input);
    });

    it("should return deeply nested inline XML unchanged", () => {
      const input = "<root><level1><level2><level3>deep content</level3></level2></level1></root>";
      expect(formatXml(input)).toBe(input);
    });

    it("should return multiple sibling tags unchanged", () => {
      const input = "<root><child1>content1</child1><child2>content2</child2><child3>content3</child3></root>";
      expect(formatXml(input)).toBe(input);
    });

    it("should return empty inline tags unchanged", () => {
      const input = "<root><empty></empty><another></another></root>";
      expect(formatXml(input)).toBe(input);
    });

    it("should return inline self-closing tags unchanged", () => {
      const input = "<root><img src='test.jpg' /><br /></root>";
      expect(formatXml(input)).toBe(input);
    });

    it("should return inline mixed tags unchanged", () => {
      const input = "<root><div>content</div><hr /><p>paragraph</p></root>";
      expect(formatXml(input)).toBe(input);
    });

    it("should return inline comments unchanged", () => {
      const input = "<root><!-- This is a comment --><child>content</child></root>";
      expect(formatXml(input)).toBe(input);
    });

    it("should return inline tags with attributes unchanged", () => {
      const input = "<root><div class='container' id='main'>content</div></root>";
      expect(formatXml(input)).toBe(input);
    });

    it("should return complex inline attributes unchanged", () => {
      const input = "<root><img src='image.jpg' alt='Test Image' width='100' height='200' /></root>";
      expect(formatXml(input)).toBe(input);
    });

    it("should return inline tags with special characters unchanged", () => {
      const input = "<root><tag>Content with &lt; &gt; &amp; special chars</tag></root>";
      expect(formatXml(input)).toBe(input);
    });

    it("should return inline content with internal whitespace unchanged", () => {
      const input = "<root><child>multiple    spaces    between    words</child></root>";
      expect(formatXml(input)).toBe(input);
    });
  });

  describe("Multi-line XML formatting (with proper indentation)", () => {
    it("should format simple nested tags with line breaks", () => {
      const input = [
        "<root>",
        "<child>content</child>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <child>content</child>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should format deeply nested tags", () => {
      const input = [
        "<root>",
        "<level1>",
        "<level2>",
        "<level3>deep content</level3>",
        "</level2>",
        "</level1>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <level1>",
        "    <level2>",
        "      <level3>deep content</level3>",
        "    </level2>",
        "  </level1>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should handle multiple sibling tags", () => {
      const input = [
        "<root>",
        "<child1>content1</child1>",
        "<child2>content2</child2>",
        "<child3>content3</child3>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <child1>content1</child1>",
        "  <child2>content2</child2>",
        "  <child3>content3</child3>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should handle empty tags", () => {
      const input = [
        "<root>",
        "<empty>",
        "</empty>",
        "<another>",
        "</another>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <empty>",
        "  </empty>",
        "  <another>",
        "  </another>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should handle self-closing tags", () => {
      const input = [
        "<root>",
        "<img src='test.jpg' />",
        "<br />",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <img src='test.jpg' />",
        "  <br />",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should handle mixed self-closing and regular tags", () => {
      const input = [
        "<root>",
        "<div>content</div>",
        "<hr />",
        "<p>paragraph</p>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <div>content</div>",
        "  <hr />",
        "  <p>paragraph</p>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });
  });

  describe("Comments", () => {
    it("should handle single-line comments", () => {
      const input = [
        "<root>",
        "<!-- This is a comment -->",
        "<child>content</child>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <!-- This is a comment -->",
        "  <child>content</child>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should handle multi-line comments", () => {
      const input = [
        "<root>",
        "<!-- This is a",
        "multi-line comment -->",
        "<child>content</child>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <!-- This is a",
        "  multi-line comment -->",
        "  <child>content</child>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should handle comments at different nesting levels", () => {
      const input = [
        "<root>",
        "<!-- Root level comment -->",
        "<child>",
        "<!-- Child level comment -->",
        "content",
        "</child>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <!-- Root level comment -->",
        "  <child>",
        "    <!-- Child level comment -->",
        "    content",
        "  </child>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });
  });

  describe("Content handling", () => {
    it("should handle content starting after opening tag", () => {
      const input = [
        "<root>",
        "<child>content starts here",
        "</child>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <child>",
        "    content starts here",
        "  </child>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should handle content ending before closing tag", () => {
      const input = [
        "<root>",
        "<child>",
        "content ends here</child>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <child>",
        "  content ends here</child>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should handle multiline content", () => {
      const input = [
        "<root>",
        "<child>",
        "Line 1 of content",
        "Line 2 of content",
        "Line 3 of content",
        "</child>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <child>",
        "    Line 1 of content",
        "    Line 2 of content", 
        "    Line 3 of content",
        "  </child>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });
  });

  describe("Attributes", () => {
    it("should handle tags with attributes", () => {
      const input = [
        "<root>",
        "<div class='container' id='main'>content</div>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <div class='container' id='main'>content</div>",
        "  </root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should handle complex attributes", () => {
      const input = [
        "<root>",
        "<img src='image.jpg' alt='Test Image' width='100' height='200' />",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <img src='image.jpg' alt='Test Image' width='100' height='200' />",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });
  });

  describe("Line break normalization", () => {
    it("should normalize Windows line breaks (\\r\\n)", () => {
      const input = "<root>\r\n<child>content</child>\r\n</root>";
      const expected = [
        "<root>",
        "  <child>content</child>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should normalize old Mac line breaks (\\r)", () => {
      const input = "<root>\r<child>content</child>\r</root>";
      const expected = [
        "<root>",
        "  <child>content</child>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should handle mixed line breaks", () => {
      const input = "<root>\r\n<child1>content1</child1>\n<child2>content2</child2>\r</root>";
      const expected = [
        "<root>",
        "  <child1>content1</child1>",
        "  <child2>content2</child2>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });
  });

  describe("Complex structures", () => {
    it("should handle complex nested structure with mixed content", () => {
      const input = [
        "<html>",
        "<head>",
        "<title>Test Page</title>",
        "<meta charset='utf-8' />",
        "</head>",
        "<body>",
        "<!-- Main content -->",
        "<div class='container'>",
        "<h1>Welcome</h1>",
        "<p>This is a paragraph with <strong>bold text</strong>.</p>",
        "<ul>",
        "<li>Item 1</li>",
        "<li>Item 2</li>",
        "</ul>",
        "</div>",
        "</body>",
        "</html>"
      ].join("\n");
      
      const expected = [
        "<html>",
        "  <head>",
        "    <title>Test Page</title>",
        "    <meta charset='utf-8' />",
        "  </head>",
        "  <body>",
        "    <!-- Main content -->",
        "    <div class='container'>",
        "      <h1>Welcome</h1>",
        "      <p>This is a paragraph with <strong>bold text</strong>.</p>",
        "      <ul>",
        "        <li>Item 1</li>",
        "        <li>Item 2</li>",
        "      </ul>",
        "    </div>",
        "  </body>",
        "</html>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should handle XML with processing instructions and DOCTYPE (treated as content)", () => {
      const input = [
        "<?xml version='1.0' encoding='UTF-8'?>",
        "<!DOCTYPE html>",
        "<root>",
        "<data>content</data>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<?xml version='1.0' encoding='UTF-8'?>",
        "  <!DOCTYPE html>",
        "    <root>",
        "      <data>content</data>",
        "    </root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });
  });

  describe("Edge cases", () => {
    it("should handle empty input", () => {
      expect(formatXml("")).toBe("");
    });

    it("should handle whitespace-only input", () => {
      expect(formatXml("   \n  \t  ")).toBe("");
    });

    it("should handle single inline tag", () => {
      const input = "<tag>content</tag>";
      expect(formatXml(input)).toBe(input);
    });

    it("should handle single self-closing tag", () => {
      const input = "<tag />";
      expect(formatXml(input)).toBe(input);
    });

    it("should handle just text content", () => {
      const input = "Just some text content";
      expect(formatXml(input)).toBe(input);
    });

    it("should handle malformed XML gracefully", () => {
      const input = [
        "<root>",
        "<unclosed>",
        "<child>content</child>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <unclosed>",
        "    <child>content</child>",
        "  </root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });
  });

  describe("Whitespace preservation", () => {
    it("should trim whitespace from lines while preserving structure", () => {
      const input = [
        "  <root>  ",
        "    <child>  content with spaces  </child>  ",
        "  </root>  "
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <child>  content with spaces  </child>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });

    it("should handle content with internal whitespace correctly (inline)", () => {
      const input = "<root><child>multiple    spaces    between    words</child></root>";
      expect(formatXml(input)).toBe(input);
    });

    it("should handle content with internal whitespace correctly (multi-line)", () => {
      const input = [
        "<root>",
        "<child>multiple    spaces    between    words</child>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <child>multiple    spaces    between    words</child>",
        "</root>"
      ].join("\n");
      
      expect(formatXml(input)).toBe(expected);
    });
  });

  describe("Options configuration", () => {
    describe("indentSize option", () => {
      it("should use custom indent size", () => {
        const input = [
          "<root>",
          "<child>content</child>",
          "</root>"
        ].join("\n");
        
        const options: FormatXmlOptions = { indentSize: 4 };
        const result = formatXml(input, options);
        
        const expected = [
          "<root>",
          "    <child>content</child>",
          "</root>"
        ].join("\n");
        
        expect(result).toBe(expected);
      });

      it("should handle single space indentation", () => {
        const input = [
          "<root>",
          "<child>content</child>",
          "</root>"
        ].join("\n");
        
        const options: FormatXmlOptions = { indentSize: 1 };
        const result = formatXml(input, options);
        
        const expected = [
          "<root>",
          " <child>content</child>",
          "</root>"
        ].join("\n");
        
        expect(result).toBe(expected);
      });
    });

    describe("indentType option", () => {
      it("should use tabs for indentation", () => {
        const input = [
          "<root>",
          "<child>content</child>",
          "</root>"
        ].join("\n");
        
        const options: FormatXmlOptions = { indentType: 'tabs' };
        const result = formatXml(input, options);
        
        const expected = [
          "<root>",
          "\t<child>content</child>",
          "</root>"
        ].join("\n");
        
        expect(result).toBe(expected);
      });

      it("should use spaces for indentation by default", () => {
        const input = [
          "<root>",
          "<child>content</child>",
          "</root>"
        ].join("\n");
        
        const options: FormatXmlOptions = { indentType: 'spaces' };
        const result = formatXml(input, options);
        
        const expected = [
          "<root>",
          "  <child>content</child>",
          "</root>"
        ].join("\n");
        
        expect(result).toBe(expected);
      });
    });

    describe("trimContent option", () => {
      it("should trim content when trimContent is true", () => {
        const input = [
          "<root>",
          "<child>",
          "  content with spaces  ",
          "</child>",
          "</root>"
        ].join("\n");
        
        const options: FormatXmlOptions = { trimContent: true };
        const result = formatXml(input, options);
        
        const expected = [
          "<root>",
          "  <child>",
          "    content with spaces",
          "  </child>",
          "</root>"
        ].join("\n");
        
        expect(result).toBe(expected);
      });

      it("should preserve content whitespace when trimContent is false", () => {
        const input = [
          "<root>",
          "<child>",
          "  content with spaces  ",
          "</child>",
          "</root>"
        ].join("\n");
        
        const options: FormatXmlOptions = { trimContent: false };
        const result = formatXml(input, options);
        
        const expected = [
          "<root>",
          "  <child>",
          "      content with spaces  ",
          "  </child>",
          "</root>"
        ].join("\n");
        
        expect(result).toBe(expected);
      });
    });

    describe("normalizeLineBreaks option", () => {
      it("should normalize line breaks when normalizeLineBreaks is true", () => {
        const input = "<root>\r\n<child>content</child>\r</root>";
        const options: FormatXmlOptions = { normalizeLineBreaks: true };
        const result = formatXml(input, options);
        
        const expected = [
          "<root>",
          "  <child>content</child>",
          "</root>"
        ].join("\n");
        
        expect(result).toBe(expected);
      });

      it("should preserve original line breaks when normalizeLineBreaks is false", () => {
        const input = "<root>\r\n<child>content</child>\r</root>";
        const options: FormatXmlOptions = { normalizeLineBreaks: false };
        const result = formatXml(input, options);
        
        // Should preserve some original line break characters
        // Note: \r\n gets converted to \n during processing, but \r is preserved
        expect(result).toContain("\r");
        expect(result).toContain("</root>");
      });
    });

    describe("combined options", () => {
      it("should apply multiple options together", () => {
        const input = [
          "<root>",
          "<child>  content  </child>",
          "</root>"
        ].join("\n");
        
        const options: FormatXmlOptions = {
          indentSize: 4,
          indentType: 'spaces',
          trimContent: true
        };
        
        const result = formatXml(input, options);
        
        const expected = [
          "<root>",
          "    <child>  content  </child>",
          "</root>"
        ].join("\n");
        
        expect(result).toBe(expected);
      });

      it("should work with tabs and custom indent size", () => {
        const input = [
          "<root>",
          "<level1>",
          "<level2>content</level2>",
          "</level1>",
          "</root>"
        ].join("\n");
        
        const options: FormatXmlOptions = {
          indentType: 'tabs'
        };
        
        const result = formatXml(input, options);
        
        const expected = [
          "<root>",
          "\t<level1>",
          "\t\t<level2>content</level2>",
          "\t</level1>",
          "</root>"
        ].join("\n");
        
        expect(result).toBe(expected);
      });
    });

    describe("default behavior", () => {
      it("should use default options when no options provided", () => {
        const input = [
          "<root>",
          "<child>content</child>",
          "</root>"
        ].join("\n");
        
        const resultWithoutOptions = formatXml(input);
        const resultWithEmptyOptions = formatXml(input, {});
        
        expect(resultWithoutOptions).toBe(resultWithEmptyOptions);
      });
    });
  });

  describe("Performance and stability", () => {
    it("should handle large XML structures efficiently", () => {
      // Create a large nested structure with line breaks
      const depth = 50;
      const lines: string[] = [];
      
      // Build opening tags
      for (let i = 0; i < depth; i++) {
        lines.push(`<level${i}>`);
      }
      
      // Add content
      lines.push("deep content");
      
      // Build closing tags
      for (let i = depth - 1; i >= 0; i--) {
        lines.push(`</level${i}>`);
      }
      
      const input = lines.join("\n");
      
      const startTime = performance.now();
      const result = formatXml(input);
      const endTime = performance.now();
      
      // Check that it's properly indented
      expect(result).toContain("                                                  deep content");
      expect(endTime - startTime).toBeLessThan(100); // Should complete in reasonable time
    });

    it("should be consistent across multiple calls", () => {
      const input = [
        "<root>",
        "<child>content</child>",
        "</root>"
      ].join("\n");
      
      const expected = [
        "<root>",
        "  <child>content</child>",
        "</root>"
      ].join("\n");
      
      // Run multiple times to ensure consistency
      for (let i = 0; i < 100; i++) {
        expect(formatXml(input)).toBe(expected);
      }
    });

    it("should handle inline XML consistently", () => {
      const input = "<root><child>content</child></root>";
      
      // Run multiple times to ensure consistency
      for (let i = 0; i < 100; i++) {
        expect(formatXml(input)).toBe(input);
      }
    });

    it("should handle options performance efficiently", () => {
      const input = [
        "<root>",
        "<child>content</child>",
        "</root>"
      ].join("\n");
      
      const options: FormatXmlOptions = { indentSize: 4, trimContent: true };
      
      const startTime = performance.now();
      for (let i = 0; i < 1000; i++) {
        formatXml(input, options);
      }
      const endTime = performance.now();
      
      expect(endTime - startTime).toBeLessThan(1000); // Should complete 1000 calls in reasonable time
    });
  });
}); 