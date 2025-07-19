import { AgentOrchestrator } from "@repo/ai-agents";
import { assistantAgent } from "./assistant-agent";
import { calculatorAgent } from "./calculator-agent";

export const orchestratorAgent = new AgentOrchestrator("assistant-agent");
orchestratorAgent.registerAgent("assistant-agent", assistantAgent, ["weather"]);
orchestratorAgent.registerAgent("calculator-agent", calculatorAgent, [
  "calculator",
]);
