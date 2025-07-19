import {
  type Content,
  type GenerateContentConfig,
  GoogleGenAI,
  Type,
} from "@google/genai";
import type {
  CallLlmResponse,
  StreamingCallback,
  TokenUsage,
} from "@repo/ai-agents";
import { getLlmPrice } from "@repo/llm-prices";

export async function geminiCallLlm(
  input: string,
  onStreamingChunk?: StreamingCallback
): Promise<CallLlmResponse> {
  // Just select the first model from the list
  const [model] = [
    "gemini-2.0-flash", // good price, good performance
    "gemini-2.5-flash-lite-preview-06-17", // good price, good performance but unstable yet
    "gemini-2.5-flash", // reasonable price, very good performance
    "gemini-2.0-flash-lite", // awesome price, bad performance
  ];
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const config: GenerateContentConfig = {
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
      propertyOrdering: [
        "thought",
        "response_to_user",
        "action",
        "is_final_answer",
      ],
    },
  };
  const contents: Content[] = [
    {
      role: "user",
      parts: [
        // {
        //   inlineData: {
        //     data: "JVBERi0xLjYKJeLjz9MKMSAwIG9...",
        //     mimeType: "application/pdf",
        //     // mimeType: "image/png", // .png
        //     // mimeType: "audio/x-m4a", // .m4a
        //     // mimeType: "audio/mpeg", // .mp3
        //     // mimeType: "video/mp4", // .mp4
        //   },
        // },
        {
          text: input,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    config,
    model,
    contents,
  });

  let accumulatedResponse = "";
  let totalUsageMetadata = null;

  for await (const chunk of response) {
    if (chunk.text) {
      accumulatedResponse += chunk.text;
      onStreamingChunk?.(chunk.text);
    }

    // Capture usage metadata (typically available in the final chunk)
    if (chunk.usageMetadata) {
      totalUsageMetadata = chunk.usageMetadata;
    }
  }

  // Get pricing information for the model
  const modelPricing = await getLlmPrice(model);

  // Calculate usage and cost
  let usage: TokenUsage | undefined;

  if (totalUsageMetadata) {
    const inputTokens = totalUsageMetadata.promptTokenCount || 0;
    const outputTokens = totalUsageMetadata.candidatesTokenCount || 0;

    let cost = 0;
    if (
      modelPricing &&
      "input_cost_per_token" in modelPricing &&
      "output_cost_per_token" in modelPricing
    ) {
      // Calculate cost based on pricing per token
      // The API returns per-token pricing, not per 1M tokens
      const inputCostPerToken = modelPricing.input_cost_per_token || 0;
      const outputCostPerToken = modelPricing.output_cost_per_token || 0;
      const inputCost = inputTokens * inputCostPerToken;
      const outputCost = outputTokens * outputCostPerToken;
      cost = inputCost + outputCost;
    }

    usage = {
      model: model,
      inputTokens: inputTokens,
      outputTokens: outputTokens,
      cost: cost,
    };
  }

  return {
    content: accumulatedResponse,
    usage: usage,
  };
}
