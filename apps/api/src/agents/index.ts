import { AgentOrchestrator } from "@repo/ai-agents";
import { assistantAgent } from "./assistant-agent";
import { calculatorAgent } from "./calculator-agent";

export const orchestrator = new AgentOrchestrator("assistant-agent");
orchestrator.registerAgent("assistant-agent", assistantAgent, ["weather"]);
orchestrator.registerAgent("calculator-agent", calculatorAgent, ["calculator"]);
