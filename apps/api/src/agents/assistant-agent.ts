import { Agent } from "@repo/ai-agents";
import { z } from "zod";
import { geminiCallLlm } from "../adapters/gemini-call-llm";

export const assistantAgent = new Agent(
  "You are a helpful assistant that can answer questions and help with tasks or code problems.",
  geminiCallLlm
);

assistantAgent.registerTool({
  name: "get_weather",
  description: "Get the weather for a given city name",
  schema: z.object({
    cityName: z.string().min(1, "City name is required"),
  }),
  execute: async (input) => {
    // Sleep for 6 seconds before proceeding (simulate delay)
    await new Promise((resolve) => setTimeout(resolve, 6000));

    try {
      const { cityName } = input;

      // First, get coordinates from city name
      const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`;

      const geocodingResponse = await fetch(geocodingUrl);

      if (!geocodingResponse.ok) {
        throw new Error(
          `Geocoding API request failed: ${geocodingResponse.status}`
        );
      }

      const geocodingData = await geocodingResponse.json();

      if (!geocodingData.results || geocodingData.results.length === 0) {
        return {
          content: `Could not find coordinates for city: ${cityName}. Please check the city name and try again.`,
        };
      }

      const location = geocodingData.results[0];
      const { latitude, longitude } = location;

      // Now get weather data using the coordinates
      const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;

      const weatherResponse = await fetch(weatherApiUrl);

      if (!weatherResponse.ok) {
        throw new Error(
          `Weather API request failed: ${weatherResponse.status}`
        );
      }

      const weatherData = await weatherResponse.json();

      return weatherData;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return {
        content: `Error fetching weather data: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
    }
  },
});
