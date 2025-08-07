import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from "@repo/ui/components/code-block";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/ui/components/collapsible";
import {
  ChevronDownIcon,
  FileTextIcon,
  RefreshCwIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AppHeader } from "../components/chat-header";

interface AuditLog {
  input: string;
  output: string;
  timestamp: string;
}

export function meta() {
  return [
    { title: "LLM Audit Logs" },
    {
      name: "description",
      content: "View and manage LLM interaction audit logs",
    },
  ];
}

export default function Logs() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/audit-logs");
      const data = await response.json();
      setLogs(data);
    } catch (error) {
      console.error("Failed to fetch audit logs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLocalClear = async () => {
    // Only handle local state updates - the AppHeader handles the API calls
    setLogs([]);
  };

  useEffect(() => {
    fetchLogs();
  }, []); // Empty dependency array - only run once on mount

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const formatJson = (jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return jsonString;
    }
  };

  const formatXml = (xmlString: string) => {
    // Simple XML formatting - could be enhanced with a proper XML formatter
    return xmlString.replace(/></g, ">\n<").replace(/^\s*$/gm, "").trim();
  };

  return (
    <div className="min-h-screen">
      <AppHeader
        title="LLM Audit Logs"
        description="Track all LLM input and output interactions"
        navigationTo="/"
        navigationIcon={FileTextIcon}
        navigationLabel="Chat"
        onClear={handleLocalClear}
      />

      {/* Content */}
      <div className="space-y-6 p-6">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <RefreshCwIcon
              size={24}
              className="animate-spin text-muted-foreground"
            />
          </div>
        ) : logs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <FileTextIcon size={48} className="mb-4 text-muted-foreground" />
            <h3 className="font-semibold text-lg">No audit logs yet</h3>
            <p className="text-muted-foreground text-sm">
              LLM interactions will appear here once you start chatting.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-sm">
                {logs.length} interaction{logs.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {logs.map((log, index) => {
              const inputData = [
                {
                  language: "input-prompt",
                  filename: "prompt.xml",
                  code: formatXml(log.input),
                },
              ];

              const outputData = [
                {
                  language: "output-response",
                  filename: "response.json",
                  code: formatJson(log.output),
                },
              ];

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
                >
                  <div className="flex flex-col space-y-1.5 p-6 pb-3">
                    <div className="flex items-center justify-between font-semibold text-base leading-none tracking-tight">
                      <span>Interaction #{index + 1}</span>
                      <span className="font-normal text-muted-foreground text-sm">
                        {formatTimestamp(log.timestamp)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6 p-6 pt-0">
                    {/* Input Section */}
                    <div>
                      <Collapsible defaultOpen={index < 3}>
                        <CollapsibleTrigger className="mb-3 flex items-center gap-2 font-medium text-green-600 text-sm hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">
                          <ChevronDownIcon className="group-data-[state=closed]:-rotate-90 h-4 w-4 transition-transform" />
                          Input (XML Prompt)
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CodeBlock
                            data={inputData}
                            defaultValue="input-prompt"
                            className="[&_.line]:leading-relaxed [&_.line]:before:mr-4 [&_.line]:before:w-12 [&_code]:overflow-x-hidden [&_code]:whitespace-pre-wrap [&_code]:break-words [&_pre]:overflow-x-hidden"
                          >
                            <CodeBlockHeader>
                              <CodeBlockFiles>
                                {(item) => (
                                  <CodeBlockFilename
                                    key={item.language}
                                    value={item.language}
                                  >
                                    {item.filename}
                                  </CodeBlockFilename>
                                )}
                              </CodeBlockFiles>
                              <CodeBlockCopyButton />
                            </CodeBlockHeader>
                            <CodeBlockBody>
                              {(item) => (
                                <CodeBlockItem
                                  key={item.language}
                                  value={item.language}
                                  lineNumbers={true}
                                >
                                  <CodeBlockContent language="xml">
                                    {item.code}
                                  </CodeBlockContent>
                                </CodeBlockItem>
                              )}
                            </CodeBlockBody>
                          </CodeBlock>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>

                    {/* Output Section */}
                    <div>
                      <Collapsible defaultOpen={index < 3}>
                        <CollapsibleTrigger className="mb-3 flex items-center gap-2 font-medium text-blue-600 text-sm hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                          <ChevronDownIcon className="group-data-[state=closed]:-rotate-90 h-4 w-4 transition-transform" />
                          Output (JSON Response)
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CodeBlock
                            data={outputData}
                            defaultValue="output-response"
                            className="[&_.line]:leading-relaxed [&_.line]:before:mr-4 [&_.line]:before:w-12 [&_code]:overflow-x-hidden [&_code]:whitespace-pre-wrap [&_code]:break-words [&_pre]:overflow-x-hidden"
                          >
                            <CodeBlockHeader>
                              <CodeBlockFiles>
                                {(item) => (
                                  <CodeBlockFilename
                                    key={item.language}
                                    value={item.language}
                                  >
                                    {item.filename}
                                  </CodeBlockFilename>
                                )}
                              </CodeBlockFiles>
                              <CodeBlockCopyButton />
                            </CodeBlockHeader>
                            <CodeBlockBody>
                              {(item) => (
                                <CodeBlockItem
                                  key={item.language}
                                  value={item.language}
                                  lineNumbers={true}
                                >
                                  <CodeBlockContent language="json">
                                    {item.code}
                                  </CodeBlockContent>
                                </CodeBlockItem>
                              )}
                            </CodeBlockBody>
                          </CodeBlock>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
