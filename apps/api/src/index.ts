import { randomUUID } from "node:crypto";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { orchestratorAgent } from "./agents/orchestrator-agent";

config();

const PORT = process.env.PORT || 3000;
const USD_TO_BRL_RATE = 5.58;

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
  // let buffer = "";

  // Set up simple streaming response
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");

  // const messages = await orchestratorAgent.run({
  await orchestratorAgent.run({
    message: {
      role: "user",
      content: message,
    },
    onMessage: (message) => {
      message.id = randomUUID();
      // console.log("Message:", JSON.stringify(message, null, 2));
      totalCost += message.metadata?.usage?.cost ?? 0;
    },
    onStreamingChunk: (_chunk) => {
      // res.write(chunk);
      // buffer += chunk;
    },
    onToolResult: (_toolResult) => {
      // res.write(JSON.stringify(toolResult));
      // buffer += JSON.stringify(toolResult);
    },
  });

  const totalCostInBrlCents = Number(
    (totalCost * USD_TO_BRL_RATE * 100).toFixed(2)
  );

  console.log("Total cost in BRL cents:", totalCostInBrlCents);

  // res.write(
  //   `\n\nMESSAGES:\n\n${JSON.stringify(messages, null, 2)}\n\nTotal cost in BRL cents: ${totalCostInBrlCents}\n\nBUFFER:\n\n${buffer}`
  // );

  // Stream the fake response slowly, character by character
  for (let i = 0; i < fakeResponse.length; i++) {
    res.write(fakeResponse[i]);
    await new Promise((resolve) => setTimeout(resolve, 20));
  }

  res.end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const fakeResponse = `{
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
