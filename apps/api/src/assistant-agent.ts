import { Agent } from "@repo/ai-agents";
import { z } from "zod";
import { callLlm } from "./call-llm";

export const assistantAgent = new Agent(
  "You are a helpful assistant that can answer questions and help with tasks.",
  callLlm
);

assistantAgent.registerTool({
  name: "get_weather",
  description: "Get the weather for a given location",
  schema: z.object({ location: z.string() }),
  execute: async (input) => {
    console.log("get_weather input:", JSON.stringify(input, null, 2));
    return {
      content: "The weather in Paris is sunny.",
    };
  },
});
