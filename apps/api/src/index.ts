import { randomUUID } from "node:crypto";
import type { LlmInteractionData, Message } from "@repo/ai-agents";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { orchestratorAgent } from "./agents/orchestrator-agent";

config();

const PORT = process.env.PORT || 3000;
const USD_TO_BRL_RATE = 5.46;

const messagesDatabase: Message[] = [];
const llmInteractionLogs: (LlmInteractionData & { timestamp: string })[] = [];

const app = express();

// Configure CORS with most permissive settings for development
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "PATCH"],
    allowedHeaders: ["*"], // Allow all headers
    credentials: false, // Set to false when using origin: "*"
  })
);

app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  let totalCost = 0;

  // Set up simple streaming response
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");

  const messages: Message[] = [];
  
  await orchestratorAgent.run({
    history: messagesDatabase,
    message: {
      role: "user",
      content: message,
    },
    onMessage: (message) => {
      message.id = randomUUID();
      totalCost += message.metadata?.usage?.cost ?? 0;
      messages.push(structuredClone(message));
    },
    onStreamingChunk: (chunk) => {
      res.write(chunk);
    },
    onToolResult: (toolResult) => {
      res.write(JSON.stringify(toolResult));
    },
    onLlmInteraction: (data) => {
      llmInteractionLogs.push({
        input: data.input,
        output: data.output,
        timestamp: new Date().toISOString(),
      });
    },
  });

  // Add only the new messages that were generated during this conversation turn
  messagesDatabase.push(...messages);

  // Calculate the total cost in USD and BRL cents
  const totalCostInUsdCents = Number((totalCost * 100).toFixed(2));
  const totalCostInBrlCents = Number(
    (totalCost * USD_TO_BRL_RATE * 100).toFixed(2)
  );

  // Log the total cost in USD and BRL cents
  console.log("Total cost in USD cents:", totalCostInUsdCents);
  console.log("Total cost in BRL cents:", totalCostInBrlCents);

  // Stream the fake response slowly, character by character
  // for (let i = 0; i < fakeResponse.length; i++) {
  //   res.write(fakeResponse[i]);
  //   await new Promise((resolve) => setTimeout(resolve, 20));
  // }

  res.end();
});

app.get("/messages", (_req, res) => {
  res.json(messagesDatabase);
});

app.get("/audit-logs", (_req, res) => {
  res.json(llmInteractionLogs);
});

app.post("/messages/clear", (_req, res) => {
  messagesDatabase.length = 0;
  res.json({ success: true, message: "Messages cleared" });
});

app.post("/audit-logs/clear", (_req, res) => {
  llmInteractionLogs.length = 0;
  res.json({ success: true, message: "LLM audit logs cleared" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const _fakeResponse = `{
 "thought": "The user is asking a mathematical question. The current vertical \`assistant\` does not have the capability to perform calculations. I need to load skills from the \`mathematician\` vertical to perform this calculation. After loading the skills, I will use the calculator tool to answer the question.",
 "action": {
  "tool_input": {
   "targetVerticalId": "mathematician"
  },
  "tool_name": "load_skills_from"
 },
 "is_final_answer": false
}{"is_tool_result":true,"name":"load_skills_from","input":{"targetVerticalId":"mathematician"},"output":{"status":"success","message":"Successfully loaded skills from mathematician."},"timestamp":"2025-07-20T19:57:49.059Z"}{
 "thought": "The user asked a mathematical question. I have successfully loaded the skills from the 'mathematician' vertical. Now I need to use the 'calculator' tool to evaluate the expression '25 * 4'.",
 "action": {
  "tool_input": {
   "expression": "25 * 4"
  },
  "tool_name": "calculator"
 },
 "is_final_answer": false
}{"is_tool_result":true,"name":"calculator","input":{"expression":"25 * 4"},"output":{"expression":"25 * 4","result":100,"formatted_result":"100"},"timestamp":"2025-07-20T19:57:50.312Z"}{
  "thought": "The user asked for the result of '25 * 4'. I used the 'calculator' tool and obtained the result, which is 100. All tasks have been completed.",
  "response_to_user": "25 multiplied by 4 is 100.",
  "is_final_answer": true
}`;
