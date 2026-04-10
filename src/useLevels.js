import { useState, useEffect } from "react";

const BINANCE_BASE = "https://api.binance.com/api/v3";

async function getKlines(interval, limit) {
  const res = await fetch(
    `${BINANCE_BASE}/klines?symbol=BTCUSDT&interval=${interval}&limit=${limit}`
  );
  return await res.json();
}

function getMonday() {
  const now = new Date();
  const day = now.getUTCDay();
  const diff = day === 0 ? 6 : day - 1;
  const monday = new Date(now);
  monday.setUTCDate(now.getUTCDate() - diff);
  monday.setUTCHours(0, 0, 0, 0);
  return monday.getTime();
}

function getCurrentSession() {
  const now = new Date();
  // Convert UTC to UTC+8
  const hour8 = (now.getUTCHours() + 8) % 24;

  // Sessions in UTC+8 time
  // Asia = 08:00 - 16:00 (UTC+8)
  // London = 15:00 - 00:00 (UTC+8)
  // New York = 20:00 - 05:00 (UTC+8)
  if (hour8 >= 8 && hour8 < 15) return "Asia";
  if (hour8 >= 15 && hour8 < 20) return "London";
  if (hour8 >= 20 || hour8 < 5) return "New York";
  return "Pre-Asia";
}

function getSessionStartUTC() {
  const now = new Date();
  const hour8 = (now.getUTCHours() + 8) % 24;
  const sessionStart = new Date(now);

  if (hour8 >= 8 && hour8 < 15) {
    // Asia starts at 00:00 UTC
    sessionStart.setUTCHours(0, 0, 0, 0);
  } else if (hour8 >= 15 && hour8 < 20) {
    // London starts at 07:00 UTC
    sessionStart.setUTCHours(7, 0, 0, 0);
  } else if (hour8 >= 20 || hour8 < 5) {
    // New York starts at 12:00 UTC
    sessionStart.setUTCHours(12, 0, 0, 0);
  } else {
    sessionStart.setUTCHours(21, 0, 0, 0);
  }

  return sessionStart.getTime();
}

export function useLevels() {
  const [levels, setLevels] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLevels = async () => {
    try {
      const daily = await getKlines("1d", 3);
      const hourly = await getKlines("1h", 48);
      const weekly = await getKlines("1w", 2);

      // Today and yesterday
      const todayCandle = daily[daily.length - 1];
      const prevDayCandle = daily[daily.length - 2];

      const dailyOpen = parseFloat(todayCandle[1]);
      const dailyHigh = parseFloat(todayCandle[2]);
      const dailyLow = parseFloat(todayCandle[3]);

      const prevDayHigh = parseFloat(prevDayCandle[2]);
      const prevDayLow = parseFloat(prevDayCandle[3]);
      const prevDayOpen = parseFloat(prevDayCandle[1]);

      // Weekly
      const weeklyCandle = weekly[weekly.length - 1];
      const weeklyHigh = parseFloat(weeklyCandle[2]);
      const weeklyLow = parseFloat(weeklyCandle[3]);
      const weeklyOpen = parseFloat(weeklyCandle[1]);

      // Monday High/Low
      const mondayStart = getMonday();
      const mondayCandles = hourly.filter(k => k[0] >= mondayStart);
      const mondayHigh = mondayCandles.length > 0
        ? Math.max(...mondayCandles.map(k => parseFloat(k[2])))
        : null;
      const mondayLow = mondayCandles.length > 0
        ? Math.min(...mondayCandles.map(k => parseFloat(k[3])))
        : null;

      // Current session
      const sessionName = getCurrentSession();
      const sessionStartTime = getSessionStartUTC();
      const sessionCandles = hourly.filter(k => k[0] >= sessionStartTime);

      const sessionHigh = sessionCandles.length > 0
        ? Math.max(...sessionCandles.map(k => parseFloat(k[2])))
        : null;
      const sessionLow = sessionCandles.length > 0
        ? Math.min(...sessionCandles.map(k => parseFloat(k[3])))
        : null;

      setLevels({
        dailyOpen,
        dailyHigh,
        dailyLow,
        prevDayHigh,
        prevDayLow,
        prevDayOpen,
        weeklyHigh,
        weeklyLow,
        weeklyOpen,
        mondayHigh,
        mondayLow,
        sessionName,
        sessionHigh,
        sessionLow,
        lastUpdated: new Date().toLocaleTimeString(),
      });

    } catch (err) {
      console.error("Failed to fetch levels:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLevels();
    const interval = setInterval(fetchLevels, 60000);
    return () => clearInterval(interval);
  }, []);

  return { levels, loading, refetch: fetchLevels };
}

export function formatLevelsContext(levels) {
  if (!levels) return "";

  const fmt = (n) => n ? "$" + parseFloat(n).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }) : "N/A";

  return `
═══════════════════════════════════════
LIVE SESSION LEVELS — UTC+8 (Binance)
═══════════════════════════════════════
📅 TODAY
  Daily Open:     ${fmt(levels.dailyOpen)}
  Daily High:     ${fmt(levels.dailyHigh)}
  Daily Low:      ${fmt(levels.dailyLow)}

📅 PREVIOUS DAY
  Prev Day High:  ${fmt(levels.prevDayHigh)}
  Prev Day Low:   ${fmt(levels.prevDayLow)}
  Prev Day Open:  ${fmt(levels.prevDayOpen)}

📅 THIS WEEK
  Monday High:    ${fmt(levels.mondayHigh)}
  Monday Low:     ${fmt(levels.mondayLow)}
  Weekly Open:    ${fmt(levels.weeklyOpen)}
  Weekly High:    ${fmt(levels.weeklyHigh)}
  Weekly Low:     ${fmt(levels.weeklyLow)}

🕐 CURRENT SESSION: ${levels.sessionName}
  Session High:   ${fmt(levels.sessionHigh)}
  Session Low:    ${fmt(levels.sessionLow)}

Last Updated: ${levels.lastUpdated}
═══════════════════════════════════════
`.trim();
}