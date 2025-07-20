import type { HandoffInput, HandoffResult } from "../contracts/handoff";
import { handoffSchema } from "../contracts/handoff";
import type { Tool } from "../contracts/tool";
import { AgentRegistry } from "./agent-registry";

/**
 * Implementation of the handoff tool
 * This tool allows an agent to delegate tasks to another agent
 */
export const handoffTool: Tool<
  typeof handoffSchema,
  { currentVerticalId?: string }
> = {
  name: "load_skills_from",
  description:
    "Load skills from another vertical domain when the current task requires specialized capabilities not available in your domain.",
  schema: handoffSchema,
  execute: async (
    input: HandoffInput,
    context?: { currentVerticalId?: string }
  ): Promise<HandoffResult> => {
    // Validate that the target agent exists in the registry
    const targetAgent = AgentRegistry.getInstance().getAgent(
      input.targetVerticalId
    );
    if (!targetAgent) {
      return {
        status: "error",
        message: `Target vertical with ID '${input.targetVerticalId}' not found. Available verticals: ${AgentRegistry.getInstance()
          .getAllAgentIds()
          .join(", ")}`,
      };
    }

    // Validate that we're not loading skills from the same agent
    if (context?.currentVerticalId === input.targetVerticalId) {
      return {
        status: "error",
        message: `Cannot load skills from the same vertical (${input.targetVerticalId}). Choose a different vertical with appropriate capabilities.`,
      };
    }

    return {
      status: "success",
      message: `Successfully loaded skills from ${input.targetVerticalId}.`,
    };
  },
};
