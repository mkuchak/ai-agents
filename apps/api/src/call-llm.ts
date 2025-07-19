import { GoogleGenAI, Type } from "@google/genai";
import type { CallLlmResponse } from "@repo/ai-agents";

export async function callLlm(input: string): Promise<CallLlmResponse> {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const config = {
    thinkingConfig: {
      thinkingBudget: 0,
    },
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.OBJECT,
      required: ["thought", "is_final_answer"],
      properties: {
        thought: {
          type: Type.STRING,
          description: "Analysis and reasoning about the current situation",
        },
        response_to_user: {
          type: Type.STRING,
          description: "Optional response to show to the user",
        },
        action: {
          type: Type.OBJECT,
          required: ["tool_name", "tool_input"],
          properties: {
            tool_name: {
              type: Type.STRING,
              description: "Name of the tool to use",
            },
            tool_input: {
              type: Type.TYPE_UNSPECIFIED,
              description: "Input parameters for the tool",
            },
          },
        },
        is_final_answer: {
          type: Type.BOOLEAN,
          description: "Whether this is the final response or needs more steps",
        },
      },
    },
  };

  const response = await ai.models.generateContentStream({
    config,
    // model: "gemini-2.5-flash",
    // model: "gemini-2.0-flash",
    model: "gemini-2.0-flash-lite",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: input,
          },
        ],
      },
    ],
  });

  let accumulatedResponse = "";

  for await (const chunk of response) {
    if (chunk.text) {
      accumulatedResponse += chunk.text;
    }
  }

  return {
    content: accumulatedResponse,
    usage: undefined, // can set usage here if needed
  };
}
