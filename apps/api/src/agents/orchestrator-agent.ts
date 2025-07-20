import { AgentOrchestrator } from "@repo/ai-agents";
import { assistantAgent } from "./assistant-agent";
import { calculatorAgent } from "./calculator-agent";

export const orchestratorAgent = new AgentOrchestrator("assistant");
orchestratorAgent.registerAgent("assistant", assistantAgent, [
  "help with general questions",
  "check the weather",
]);
orchestratorAgent.registerAgent("mathematician", calculatorAgent, [
  "calculate",
]);
