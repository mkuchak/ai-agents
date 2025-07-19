import { config } from "dotenv";
import { orchestrator } from "./agents";

config();

const USD_TO_BRL_RATE = 5.58;

async function main() {
  let totalCost = 0;

  await orchestrator.run({
    message: {
      role: "user",
      // content: "What is the capital of France and what is the weather there?",
      content: "What is 1 + 1?",
    },
    onMessage: (message) => {
      console.log("MESSAGE", JSON.stringify(message, null, 2));
      totalCost += message.metadata?.usage?.cost ?? 0;
    },
    // onStreamingChunk: (chunk) => {
    //   console.log("STREAMING CHUNK:", chunk);
    // },
  });

  console.log(
    "Total cost in BRL cents:",
    Number((totalCost * USD_TO_BRL_RATE * 100).toFixed(2))
  );
}

main();
