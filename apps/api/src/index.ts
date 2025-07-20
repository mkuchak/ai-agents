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
      console.log("Message:", JSON.stringify(message, null, 2));
      totalCost += message.metadata?.usage?.cost ?? 0;
    },
    onStreamingChunk: (chunk) => {
      res.write(chunk);
    },
    onToolResult: (toolResult) => {
      res.write(JSON.stringify({ isToolResult: true, ...toolResult }));
    },
  });

  const totalCostInBrlCents = Number(
    (totalCost * USD_TO_BRL_RATE * 100).toFixed(2)
  );

  console.log("Total cost in BRL cents:", totalCostInBrlCents);

  // res.write(
  //   `\n\nMESSAGES:\n\n${JSON.stringify(messages, null, 2)}\n\nTotal cost in BRL cents: ${totalCostInBrlCents}`
  // );

  res.end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
