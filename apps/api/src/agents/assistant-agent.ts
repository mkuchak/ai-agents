import { Agent } from "@repo/ai-agents";
import dedent from "dedent";
import { z } from "zod";
import { geminiCallLlm } from "../adapters/gemini-call-llm";

export const assistantAgent = new Agent(
  "You are a helpful assistant that can answer questions and help with tasks.",
  geminiCallLlm
);

assistantAgent.registerTool({
  name: "get_weather",
  description:
    "Get the weather for a given location using latitude and longitude coordinates",
  schema: z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
  }),
  execute: async (input) => {
    console.log("get_weather input:", JSON.stringify(input, null, 2));

    try {
      const { latitude, longitude } = input;
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&timezone=America%2FSao_Paulo&forecast_days=1`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Weather API request failed: ${response.status}`);
      }

      const weatherData = await response.json();

      const dailyData = weatherData.daily;
      const hourlyData = weatherData.hourly;

      const maxTemp = dailyData.temperature_2m_max[0];
      const minTemp = dailyData.temperature_2m_min[0];
      const currentTemp = hourlyData.temperature_2m[0];

      const weatherReport = dedent`
        Weather forecast for coordinates (${latitude}, ${longitude}):
        * Current temperature: ${currentTemp}°C
        * Today's maximum: ${maxTemp}°C
        * Today's minimum: ${minTemp}°C
        * Timezone: America/Sao_Paulo`;

      return {
        content: weatherReport,
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return {
        content: `Error fetching weather data: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
    }
  },
});
