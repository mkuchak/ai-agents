import { beforeEach, describe, expect, it, vi } from "vitest";
import { formatDateTime } from "./format-date-time";

describe("formatDateTime", () => {
  // Use a fixed date for consistent testing
  const FIXED_DATE = new Date("2024-07-18T21:26:00.000Z"); // Thursday, July 18, 2024, 21:26:00 UTC
  const FIXED_TIMESTAMP = FIXED_DATE.getTime();
  const FIXED_DATE_STRING = "2024-07-18T21:26:00.000Z";

  beforeEach(() => {
    // Reset any date mocking before each test
    vi.useRealTimers();
  });

  describe("Default behavior", () => {
    it("should return current date/time with default timezone and locale when no options provided", () => {
      const before = new Date();
      const result = formatDateTime();
      const after = new Date();

      // Check that the result date is within the expected range
      expect(result.now.getTime()).toBeGreaterThanOrEqual(before.getTime());
      expect(result.now.getTime()).toBeLessThanOrEqual(after.getTime());

      // Check structure
      expect(result).toHaveProperty("now");
      expect(result).toHaveProperty("dayOfWeek");
      expect(result).toHaveProperty("date");
      expect(result).toHaveProperty("time");

      // Check types
      expect(result.now).toBeInstanceOf(Date);
      expect(typeof result.dayOfWeek).toBe("string");
      expect(typeof result.date).toBe("string");
      expect(typeof result.time).toBe("string");
    });

    it("should use default timezone (America/New_York) and locale (en-US)", () => {
      const result = formatDateTime({ date: FIXED_DATE });

      // In NY timezone, the date should be July 18, 2024 (17:26 local time)
      expect(result.dayOfWeek).toBe("Thursday");
      expect(result.date).toBe("07/18/2024");
      expect(result.time).toBe("17:26:00");
    });
  });

  describe("Date input variations", () => {
    it("should handle Date object input", () => {
      const result = formatDateTime({ date: FIXED_DATE });

      expect(result.now).toEqual(FIXED_DATE);
      expect(result.dayOfWeek).toBe("Thursday");
      expect(result.date).toBe("07/18/2024");
      expect(result.time).toBe("17:26:00");
    });

    it("should handle timestamp number input", () => {
      const result = formatDateTime({ date: FIXED_TIMESTAMP });

      expect(result.now).toEqual(FIXED_DATE);
      expect(result.dayOfWeek).toBe("Thursday");
      expect(result.date).toBe("07/18/2024");
      expect(result.time).toBe("17:26:00");
    });

    it("should handle ISO string input", () => {
      const result = formatDateTime({ date: FIXED_DATE_STRING });

      expect(result.now).toEqual(FIXED_DATE);
      expect(result.dayOfWeek).toBe("Thursday");
      expect(result.date).toBe("07/18/2024");
      expect(result.time).toBe("17:26:00");
    });

    it("should handle various date string formats", () => {
      // Test with explicit timezone to avoid parsing issues with date-only strings
      const iso = formatDateTime({
        date: "2024-07-18T12:00:00.000Z", // Use explicit time to avoid timezone issues
        timeZone: "UTC",
      });
      expect(iso.dayOfWeek).toBe("Thursday");

      const slash = formatDateTime({
        date: "2024/07/18",
        timeZone: "UTC",
      });
      expect(slash.dayOfWeek).toBe("Thursday");

      const monthName = formatDateTime({
        date: "July 18, 2024",
        timeZone: "UTC",
      });
      expect(monthName.dayOfWeek).toBe("Thursday");

      const dayFirst = formatDateTime({
        date: "18 Jul 2024",
        timeZone: "UTC",
      });
      expect(dayFirst.dayOfWeek).toBe("Thursday");
    });
  });

  describe("Timezone variations", () => {
    it("should format correctly for UTC timezone", () => {
      const result = formatDateTime({
        date: FIXED_DATE,
        timeZone: "UTC",
      });

      expect(result.dayOfWeek).toBe("Thursday");
      expect(result.date).toBe("07/18/2024");
      expect(result.time).toBe("21:26:00");
    });

    it("should format correctly for Los Angeles timezone", () => {
      const result = formatDateTime({
        date: FIXED_DATE,
        timeZone: "America/Los_Angeles",
      });

      expect(result.dayOfWeek).toBe("Thursday");
      expect(result.date).toBe("07/18/2024");
      expect(result.time).toBe("14:26:00"); // UTC-7 in July (PDT)
    });

    it("should format correctly for Tokyo timezone", () => {
      const result = formatDateTime({
        date: FIXED_DATE,
        timeZone: "Asia/Tokyo",
      });

      expect(result.dayOfWeek).toBe("Friday"); // Next day in Tokyo
      expect(result.date).toBe("07/19/2024");
      expect(result.time).toBe("06:26:00"); // UTC+9
    });

    it("should format correctly for London timezone", () => {
      const result = formatDateTime({
        date: FIXED_DATE,
        timeZone: "Europe/London",
      });

      expect(result.dayOfWeek).toBe("Thursday");
      expect(result.date).toBe("07/18/2024");
      expect(result.time).toBe("22:26:00"); // UTC+1 in July (BST)
    });
  });

  describe("Locale variations", () => {
    it("should format correctly for German locale", () => {
      const result = formatDateTime({
        date: FIXED_DATE,
        locale: "de-DE",
        timeZone: "UTC",
      });

      expect(result.dayOfWeek).toBe("Donnerstag"); // Thursday in German
      expect(result.date).toBe("18.07.2024"); // German date format
      expect(result.time).toBe("21:26:00");
    });

    it("should format correctly for French locale", () => {
      const result = formatDateTime({
        date: FIXED_DATE,
        locale: "fr-FR",
        timeZone: "UTC",
      });

      expect(result.dayOfWeek).toBe("jeudi"); // Thursday in French
      expect(result.date).toBe("18/07/2024"); // French date format
      expect(result.time).toBe("21:26:00");
    });

    it("should format correctly for Japanese locale", () => {
      const result = formatDateTime({
        date: FIXED_DATE,
        locale: "ja-JP",
        timeZone: "UTC",
      });

      expect(result.dayOfWeek).toBe("木曜日"); // Thursday in Japanese
      expect(result.date).toBe("2024/07/18"); // Japanese date format
      expect(result.time).toBe("21:26:00");
    });

    it("should format correctly for British English locale", () => {
      const result = formatDateTime({
        date: FIXED_DATE,
        locale: "en-GB",
        timeZone: "UTC",
      });

      expect(result.dayOfWeek).toBe("Thursday");
      expect(result.date).toBe("18/07/2024"); // British date format (dd/mm/yyyy)
      expect(result.time).toBe("21:26:00");
    });

    it("should format correctly for Portuguese Brazil locale", () => {
      const result = formatDateTime({
        date: FIXED_DATE,
        locale: "pt-BR",
        timeZone: "America/Sao_Paulo",
      });

      expect(result.dayOfWeek).toBe("quinta-feira"); // Thursday in Portuguese
      expect(result.date).toBe("18/07/2024"); // Brazilian date format (dd/mm/yyyy)
      expect(result.time).toBe("18:26:00"); // UTC-3 in July (BRT)
    });
  });

  describe("Combined options", () => {
    it("should handle custom date, timezone, and locale together", () => {
      const result = formatDateTime({
        date: FIXED_DATE,
        timeZone: "Europe/Paris",
        locale: "fr-FR",
      });

      expect(result.dayOfWeek).toBe("jeudi");
      expect(result.date).toBe("18/07/2024");
      expect(result.time).toBe("23:26:00"); // UTC+2 in July (CEST)
    });

    it("should handle timezone override with different locale", () => {
      const result = formatDateTime({
        date: FIXED_DATE,
        timeZone: "Asia/Shanghai",
        locale: "zh-CN",
      });

      expect(result.dayOfWeek).toBe("星期五"); // Friday in Chinese (next day due to timezone)
      expect(result.date).toBe("2024/07/19"); // Chinese format, next day due to timezone
      expect(result.time).toBe("05:26:00"); // UTC+8
    });
  });

  describe("Edge cases", () => {
    it("should handle leap year dates correctly", () => {
      const leapYearDate = new Date("2024-02-29T12:00:00.000Z");
      const result = formatDateTime({
        date: leapYearDate,
        timeZone: "UTC",
      });

      expect(result.dayOfWeek).toBe("Thursday");
      expect(result.date).toBe("02/29/2024");
      expect(result.time).toBe("12:00:00");
    });

    it("should handle New Year transition correctly", () => {
      const newYearDate = new Date("2023-12-31T23:59:59.000Z");
      const result = formatDateTime({
        date: newYearDate,
        timeZone: "UTC",
      });

      expect(result.dayOfWeek).toBe("Sunday");
      expect(result.date).toBe("12/31/2023");
      expect(result.time).toBe("23:59:59");
    });

    it("should handle daylight saving time transitions", () => {
      // Test DST transition in US (Spring forward)
      const springForward = new Date("2024-03-10T07:00:00.000Z"); // 2 AM EST becomes 3 AM EDT
      const result = formatDateTime({
        date: springForward,
        timeZone: "America/New_York",
      });

      expect(result.dayOfWeek).toBe("Sunday");
      expect(result.date).toBe("03/10/2024");
      expect(result.time).toBe("03:00:00"); // Should be 3 AM due to DST
    });

    it("should handle very old dates", () => {
      const oldDate = new Date("1900-01-01T00:00:00.000Z");
      const result = formatDateTime({
        date: oldDate,
        timeZone: "UTC",
      });

      expect(result.now).toEqual(oldDate);
      expect(result.dayOfWeek).toBe("Monday");
      expect(result.date).toBe("01/01/1900");
      expect(result.time).toBe("00:00:00");
    });

    it("should handle far future dates", () => {
      const futureDate = new Date("2099-12-31T23:59:59.000Z");
      const result = formatDateTime({
        date: futureDate,
        timeZone: "UTC",
      });

      expect(result.now).toEqual(futureDate);
      expect(result.dayOfWeek).toBe("Thursday");
      expect(result.date).toBe("12/31/2099");
      expect(result.time).toBe("23:59:59");
    });

    it("should handle invalid date strings gracefully", () => {
      const result = formatDateTime({ date: "invalid-date" });

      // Invalid date should create an Invalid Date object
      expect(result.now.toString()).toBe("Invalid Date");
      expect(result.dayOfWeek).toBe("Invalid Date");
      expect(result.date).toBe("Invalid Date");
      expect(result.time).toBe("Invalid Date");
    });
  });

  describe("Return object structure", () => {
    it("should always return object with correct properties", () => {
      const result = formatDateTime({ date: FIXED_DATE });

      expect(result).toEqual({
        now: expect.any(Date),
        dayOfWeek: expect.any(String),
        date: expect.any(String),
        time: expect.any(String),
      });
    });

    it("should return the exact same Date object that was passed", () => {
      const result = formatDateTime({ date: FIXED_DATE });

      expect(result.now).toEqual(FIXED_DATE);
      expect(result.now.getTime()).toBe(FIXED_DATE.getTime());
    });

    it("should have consistent time format (HH:mm:ss)", () => {
      const result = formatDateTime({ date: FIXED_DATE });

      expect(result.time).toMatch(/^\d{2}:\d{2}:\d{2}$/);
    });

    it("should have consistent date format for en-US locale (MM/dd/yyyy)", () => {
      const result = formatDateTime({
        date: FIXED_DATE,
        locale: "en-US",
      });

      expect(result.date).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });
  });

  describe("Performance considerations", () => {
    it("should handle multiple rapid calls efficiently", () => {
      const startTime = performance.now();

      for (let i = 0; i < 1000; i++) {
        formatDateTime({ date: FIXED_DATE });
      }

      const endTime = performance.now();
      const duration = endTime - startTime;

      // Should complete 1000 calls in reasonable time (adjust threshold as needed)
      expect(duration).toBeLessThan(1000); // Less than 1 second
    });
  });
});
