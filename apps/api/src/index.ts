import { config } from "dotenv";
import { assistantAgent } from "./assistant-agent";

config();

async function main() {
  await assistantAgent.run({
    message: {
      role: "user",
      content: "What is the capital of France and what is the weather there?",
    },
    onMessage: (message) => {
      console.log("MESSAGE", JSON.stringify(message, null, 2));
    },
  });
}

main();
