import { z } from "zod";

/**
 * Schema for the handoff tool input
 */
export const handoffSchema = z.object({
  targetVerticalId: z
    .string()
    .describe(
      "The ID of the vertical to move to. Must be a registered vertical in the registry."
    ),
});

export type HandoffInput = z.infer<typeof handoffSchema>;

export type HandoffResult = {
  status: "success" | "error";
  message: string;
};
