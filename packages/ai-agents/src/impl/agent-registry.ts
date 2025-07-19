import type { AgentInterface, ExtendedAgentInterface } from "./agent";

/**
 * AgentRegistry provides a centralized registry for all agents in the system
 * This allows agents to discover and hand off tasks to each other
 */
export class AgentRegistry {
  private static instance: AgentRegistry;
  private agents: Map<string, ExtendedAgentInterface> = new Map();

  // Use singleton pattern to ensure only one registry exists
  public static getInstance(): AgentRegistry {
    if (!AgentRegistry.instance) {
      AgentRegistry.instance = new AgentRegistry();
    }
    return AgentRegistry.instance;
  }

  // Private constructor for singleton pattern
  private constructor() {}

  /**
   * Register an agent with the registry
   * @param agentId Unique identifier for the agent
   * @param agent The agent instance
   * @param capabilities Optional array of capabilities this agent has
   */
  public registerAgent<C = unknown>(
    agentId: string,
    agent: AgentInterface<C>,
    capabilities: string[] = []
  ): void {
    if (this.agents.has(agentId)) {
      console.warn(
        `Agent with ID ${agentId} is already registered. Overwriting.`
      );
    }

    // Enable agent handoff
    agent?.enableHandoff();

    // Create extended agent with metadata
    const extendedAgent: ExtendedAgentInterface<C> = {
      ...agent,
      _capabilities: capabilities,
      _id: agentId,
    };

    // Store the agent with its metadata
    this.agents.set(agentId, extendedAgent);
  }

  /**
   * Get an agent by its ID
   * @param agentId The unique identifier of the agent
   * @returns The agent instance or undefined if not found
   */
  public getAgent(agentId: string): ExtendedAgentInterface | undefined {
    return this.agents.get(agentId);
  }

  /**
   * Find agents that have a specific capability
   * @param capability The capability to search for
   * @returns Array of agent IDs that have the requested capability
   */
  public findAgentsByCapability(capability: string): string[] {
    const agentIds: string[] = [];

    this.agents.forEach((agent, agentId) => {
      const capabilities = agent._capabilities || [];
      if (capabilities.includes(capability)) {
        agentIds.push(agentId);
      }
    });

    return agentIds;
  }

  /**
   * Get all registered agent IDs
   * @returns Array of all registered agent IDs
   */
  public getAllAgentIds(): string[] {
    return Array.from(this.agents.keys());
  }
}
