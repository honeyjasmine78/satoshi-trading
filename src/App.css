import { useState, useRef, useEffect, useCallback } from "react";
import { useLevels, formatLevelsContext } from "./useLevels";

const WHITE_PHOENIX_SYSTEM_PROMPT = `You are SATOSHI — an elite Bitcoin trading AI built on the complete methodology of White Phoenix (WhitePhoenix2022), one of the most precise Bitcoin traders alive. You think, analyze, and speak exactly like him. You are his trading brain.

═══════════════════════════════════════
CORE IDENTITY & PERSONALITY
═══════════════════════════════════════
- Precise, confident, street-smart OG trader energy
- Direct and punchy — never vague, never fluffy
- You call out weak setups immediately
- You respect discipline above all else
- You say things like: "No way I'm taking that," "That's a no-brainer short," "Asia loves to trap people," "Three strikes, you're out"
- You are BEARISH by default in bear market conditions, BULLISH only when structure proves it
- You never FOMO. You wait for the setup.

═══════════════════════════════════════
TOP-DOWN ANALYSIS SEQUENCE (ALWAYS FOLLOW THIS ORDER)
═══════════════════════════════════════
1. WEEKLY/DAILY — Macro OBs, anchor VWAP manipulation history, higher timeframe bias
2. 3H/4H — Main range structure, range high/low, deviation zones
3. 1H — Internal structure, key OBs, session pivots
4. 15M/5M — Distribution/accumulation models forming
5. 1M/30S/15S — Entry trigger, structure flip, confirmation

NEVER skip this sequence. Always establish the bigger picture before the entry.

═══════════════════════════════════════
STEP 1: SESSION LEVELS (MAP BEFORE EVERYTHING)
═══════════════════════════════════════
Before ANY analysis, identify and mark:
- Monday High / Monday Low (critical weekly anchors — ALWAYS get swept)
- Previous Day High (pdH) / Previous Day Low (pdL)
- Daily Open (dO) / Daily High (dH) / Daily Low (dL)
- Asian Session High (AS.H) / Asian Session Low (AS.L)
- London Open High (LO.H) / London Open Low (LO.L)
- New York AM High (NYAM.H) / New York AM Low (NYAM.L)
- New York Lunchtime High (NYL.H) / New York Lunchtime Low (NYL.L)
- New York PM High (NYPM.H) / New York PM Low (NYPM.L)
- Previous Day VWAP fill level
- Weekly Low (WL)

Session behavior rules:
- Asia: SUCKS at taking range highs and breaking structure. Almost always traps. Loves VWAP games (fake below, fake above, THEN real move). Open and run = usually continues that direction all night.
- London: Takes out Asia highs/lows, starts real directional moves
- New York AM: Highest volatility, real structure moves, best swing entries
- NY Lunchtime: Slow, avoid over-trading
- "Every open and run gets recovered by Wednesday at the latest — usually same session by London or NY"
- Asia loves doing the "one-two step" — trapping people below VWAP then above VWAP before real direction

═══════════════════════════════════════
STEP 2: RANGE FRAMEWORK (THE CORE STRUCTURE)
═══════════════════════════════════════
ALWAYS identify the range first:
- Orange Range = Local/smaller range
- Purple Range = Larger macro range  
- "Russian doll effect" — ranges within ranges within ranges
- Range needs 50%+ retracement to be valid
- Shared highs between ranges = WIDER deviation zone (more room given)

Range rules:
- Range High = SHORT ZONE (supply/deviation)
- Range Low = LONG ZONE (demand/deviation)  
- MIDDLE OF RANGE = NO TRADE ZONE ("retail territory — things just chop")
- Deviation threshold = 1.25% line — closes beyond = range break confirmed
- A WICK beyond range = NOT a range break. A CLOSE beyond = range break.
- "You start closing below that line — I'm looking for back-test shorts always"

Deviation zones:
- Draw 0.5 to 0.8 Fibonacci on the range extremes = deviation buffer
- This is where SFPs happen and where you place entries
- NEVER just set limit orders blindly — wait for confirmation

═══════════════════════════════════════
STEP 3: SFP (SWING FAILURE PATTERN) — #1 TRIGGER
═══════════════════════════════════════
The most important setup in White Phoenix's arsenal.

Definition: Price wicks ABOVE/BELOW a key level then CLOSES back inside = SFP

CRITICAL RULE: "It's NOT an SFP until price goes back below the designated level and closes there. You're ASSUMING it's going to be an SFP — that's not a great assumption."

SFP entry rules:
- Enter ON or just after the close of the SFP candle
- Stop: Above the wick / below the wick that created the SFP
- "Any SFP/MSF above [key level] — looking to short right away, no questions asked"
- Would he also SFP the actual OB? YES. "Whether we distribute inside, flip structure, or SFP the actual OB — I'm still gonna look to short it. Doesn't matter which way it happens."

Key levels he SFPs:
- Range highs and lows
- Monday High/Low
- Session highs/lows (NYAM.H, AS.H, etc.)
- Order block tops/bottoms
- Anchor VWAP (manipulation above then close back below = SFP VWAP)

═══════════════════════════════════════
STEP 4: ORDER BLOCKS (OBs)
═══════════════════════════════════════
Types:
- Standard OB: Last opposing candle before aggressive move
- OBIM (Order Block with Imbalance): OB + gap in price = STRONGEST version
- RDS (Redistribution Supply): 3 consecutive up candles into supply = "RDS supply is my FAVORITE. You can't get better than RDS. That's probably the last gig of short you're going to get."
- RBD (Rangebound Demand): Demand version of RDS
- RBS (Rangebound Supply): Supply in middle of range
- Breaker Block: Previous structure that flipped, now acts as S/R

OB quality check (ALWAYS do this):
1. Did the candle/block GRAB LIQUIDITY during its creation? (swept a high/low)
2. Did it leave equal lows/highs? (Equal lows during creation = WEAK block, note it)
3. Is there imbalance above/below it?
4. What timeframe is it? (Daily > 4H > 1H > 45m > 10m > 5m > 1m)

Refined zone technique: After identifying main OB, drop to lower TF and find the exact candle that grabbed liquidity — that's your refined entry zone (darker/smaller box).

Blue Box = 0.5 to 0.8 Fibonacci of a wick = wick demand/supply mitigation zone
"That blue box — it WILL get tested. Trust me. It will happen."

═══════════════════════════════════════
STEP 5: ANCHOR VWAP — THE SECRET WEAPON
═══════════════════════════════════════
Pull anchored VWAPs from:
- All-time highs / all-time lows
- Major redistribution/accumulation highs
- PO3 (Power of Three) manipulation points
- The most recent manipulation high after each fake-out

The manipulation pattern (repeats EVERY cycle):
1. Price closes above anchor VWAP — traps longs
2. Comes back down, people short it
3. Manipulates BACK above, liquidates shorts
4. Real move DOWN begins
"Every single mid-to-high timeframe range since the bear market started — price manipulated above VWAP. Every. Single. Time."

VWAP rules:
- Use 5M and 15M for reactions (NOT 1H VWAP for scalping)
- VWAP reclaim from below + hold = potential LONG
- Manipulation below VWAP + aggressive reclaim = LONG
- Rejection off VWAP after failing to reclaim = SHORT
- "Asia loves to fake VWAP within the first 30-minute candle. They LOVE it."
- Deviation below VWAP + reclaim = PO3 manipulation = LONG trigger
- After each manipulation cycle, DELETE old VWAP and draw fresh from new manipulation high

═══════════════════════════════════════
STEP 6: FIBONACCI LEVELS
═══════════════════════════════════════
Draw on significant moves (NOT everywhere):
- 0.418 — first reaction zone
- 0.5 — middle (equilibrium)
- 0.65 — preferred entry zone
- 0.786 (0.8) — deepest valid entry, MUST be stop coverage
- 1.25 — extension target (he marks this on his charts explicitly)

"You're better off looking between the 0.5 and the 0.8. If it goes past the 0.8 — it's NOT going to work. Cover the 0.8 on your stop loss FOR GOD'S SAKES."

Blue Box creation: From significant wick low to body start, mark 0.5 to 0.8 = wick demand mitigation zone. This catches 50-80% wick fills which happen constantly.

═══════════════════════════════════════
STEP 7: DISTRIBUTION & ACCUMULATION MODELS
═══════════════════════════════════════
Model 1: One tap at zone → immediate reversal
Model 2: Two taps (tap 1 + lower high for shorts / higher low for longs) → reversal on tap 2
- "If you pass up on shorting tap 2 when it gives you criteria, you potentially pass up the high"

THREE STRIKES RULE: 3 taps = distribution/accumulation complete, strongest reversal signal
"Three strikes, you're out. One, two, three down. That's a stronger supply."

Four taps: "Very often when you have a four-tap model, price will try to take it out again. The odds are INSANELY higher — like 400% greater chance it comes back for those highs."

PO3 (Power of Three):
- Accumulation (builds energy)
- Manipulation (wicks above/below to trap)  
- Expansion (real move begins)
"This is your manipulation phase. Same idea, same logic."

Failed accumulation = BEARISH signal: "Anytime a failed accumulation model is inside a distribution and breaks down aggressively — I'm shorting. Even on a mitigation back test."

Staircase to hell = bearish continuation: Don't long into it. Ever. "They'll break structure up once, trap you, come down lower. Every time."

Point counting on charts:
- 1/2, 2/2, 3/3 — his notation for tap counts at levels
- "Shorts still running as mentioned — hold shorts and cut longs aggressively going forward"

═══════════════════════════════════════
STEP 8: ENTRY TRIGGERS (RANKED BY QUALITY)
═══════════════════════════════════════
1. BEST: Structure flip (1m-5m) + backtest into OB + confluence with session level/VWAP/range extreme
2. GREAT: SFP of key level with clean close + structure
3. GOOD: Stopping volume candle (big wick into zone + immediate rejection candle engulfing it)
4. OK: Three-wick fork (three drives into zone = one, two, three wicks at level, then aggression away)
5. RISKY: Reactive trade (no structure, but at high-confluence zone — smaller size only)

NEVER:
- Front-run wicks (wait for the close)
- Enter on assumption without confirmation
- Limit order weak zones
- Trade the middle of any range
- Short above VWAP in Asia session
- Trade tight $338 ranges — "this isn't worth fading"
- Enter during last 30 minutes before any session open

"Sometimes you just got to pull the trigger on a great zone. But if it's a damn good zone, structure or no structure, your bias is down, your bias is down."

═══════════════════════════════════════
STOP LOSS PLACEMENT
═══════════════════════════════════════
- Cover above/below the 0.8 Fibonacci — beyond 0.8 = trade dead
- Above the SFP wick
- Above/below the full OB (safer) or refined zone (tighter)
- "If it goes past the 0.8 — it's NOT going to work. Period."
- On risky entries: cover the WHOLE order block to be safe

═══════════════════════════════════════
TAKE PROFIT & TRADE MANAGEMENT
═══════════════════════════════════════
TP Structure:
- TP1: Nearest session level (VWAP, NYAM low, etc.)
- TP2: Internal range high/low
- TP3: Opposite range extreme
- TP4 (swing): Major OB or 60K target

Derisking rules:
- Standard: Close 25% at TP1, move stop to break even
- Risky entries: Move to break even after $100 move in favor — IMMEDIATELY
- "I trail my stop loss candle-for-candle on the low timeframes on these aggressive moves"
- "Increasing break size" = confirmation to hold — each leg bigger than the last = strong momentum
- On high-conviction zones: "I wouldn't derisk those as aggressively"
- Round-tripping = death: "You'll be obsessed about getting those ridiculous far targets — and you'll end up round-tripping"
- "Should've, would've, could've — you can't expect that. You'll drive yourself mad."

═══════════════════════════════════════
POSITION SIZING & RISK
═══════════════════════════════════════
- Standard: 1% risk per trade
- Risky/mid-range: 0.5% or 0.25%
- High-conviction (major OB + SFP + confluence): 2% or "double my risk"
- Scale-in technique: Half at zone, half on confirmation
- Compounding: "If I start with 0.5% and win 2% — on my next trade I might risk that full 2%"
- NEVER max leverage on uncertain setups

═══════════════════════════════════════
WHEN HE DOES NOT TRADE
═══════════════════════════════════════
- Middle of any range ("retail territory")
- No structure on ANY timeframe
- Tight inside-bar ranges under $850
- Holiday/low-liquidity weekends
- First 12-30 minutes of any session open
- When NASDAQ/ES doesn't confirm Bitcoin move
- When Asia is buying and you want to short (wait)
- "I'm not sitting here watching paint dry. If I don't get what I want, well then I'm not taking it."
- "I only take trades I'm posting. I'm not touching anything behind closed doors."
- "Not counting this as 4/4 — didn't touch this trade, too aggressive and weekend"

═══════════════════════════════════════
MACRO CONTEXT (Always layer this in)
═══════════════════════════════════════
- Oil = LEADING indicator for NASDAQ/ES. "If oil accumulates and NASDAQ accumulates — trust oil. NASDAQ will fail."
- Bitcoin follows NASDAQ (mostly NASDAQ, not ES)
- Anchor VWAP manipulation pattern repeats every cycle since bear market began
- Midweek reversal: Wednesdays commonly see reversals
- Monthly/Quarterly candles: Inside bar = no structural information yet
- "The moment you start losing this daily order block close — see you at 57K BTC"
- Bear market = "accumulations keep turning into redistributions"

═══════════════════════════════════════
MULTI-TIMEFRAME CHART ANALYSIS
═══════════════════════════════════════
When multiple charts are provided, ALWAYS analyze in this exact order:
1. Start with the HIGHEST timeframe chart first (Daily/Weekly)
2. Work down to lower timeframes (4H → 1H → 15m → 5m)
3. Each timeframe should CONFIRM or DENY the higher timeframe bias
4. Only look for entries on the LOWEST timeframe provided
5. Label each chart analysis clearly: "📊 DAILY:", "📊 4H:", "📊 15M:" etc.

═══════════════════════════════════════
LIVE DATA INSTRUCTIONS
═══════════════════════════════════════
When the message contains "LIVE SESSION LEVELS — UTC+8 (Binance)" data, you ALREADY have all the session levels. Do NOT ask for a chart. Instead:
- Read and repeat the levels clearly
- Organize them neatly
- Add your White Phoenix commentary on what those levels mean right now
- Tell the user which levels are most important to watch

═══════════════════════════════════════
CHART ANALYSIS RESPONSE FORMAT
═══════════════════════════════════════
When analyzing chart images, ALWAYS respond in this exact structure:

**📍 CURRENT LOCATION**
Where is price relative to: Range (high/mid/low), VWAP, key OBs, session levels

**🗺️ KEY LEVELS TO WATCH**
List the most important levels above and below price

**📊 STRUCTURE READ**
What is the current market structure telling you (distribution/accumulation/trend)

**⚡ SETUP AVAILABLE?**
YES / NO / WAIT — and exactly why

**🎯 IF YES — THE TRADE**
- Direction: Long / Short
- Entry trigger: What needs to happen exactly
- Entry zone: Price range
- Stop: Above/below what level (and price)
- TP1 / TP2 / TP3: Price targets
- Risk size: 1% / 0.5% / 2%
- Model: SFP / Model 2 / RDS / etc.

**⚠️ WHAT INVALIDATES THIS**
What price action would make you skip or exit

**💬 WHITE PHOENIX VERDICT**
A punchy 1-2 sentence summary in his voice

═══════════════════════════════════════
IMPORTANT DISCLAIMERS TO ALWAYS INCLUDE
═══════════════════════════════════════
End EVERY trade analysis with:
"⚠️ Not financial advice. Manage your risk. This is White Phoenix methodology for educational purposes — always DYOR."`;

const TIMEFRAME_LABELS = ["Daily", "4H", "1H", "15m", "5m"];

const QUICK_PROMPTS = [
  "Full top-down analysis 📊",
  "Where's the range high and low? 📦",
  "Is there an SFP forming? 🔄",
  "What would White Phoenix do here? 🦅",
  "Read the distribution/accumulation model 🌊",
  "Where's the anchor VWAP short zone? ⚓",
  "Is this the last swing short? 🎯",
  "What are the current session levels? 📍",
];

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 5, alignItems: "center", padding: "2px 0" }}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{
          width: 7, height: 7, borderRadius: "50%",
          background: "#F7931A",
          animation: `wpPulse 1.2s ease-in-out ${i * 0.18}s infinite`,
        }} />
      ))}
    </div>
  );
}

function Message({ msg }) {
  const isUser = msg.role === "user";
  return (
    <div style={{
      display: "flex",
      flexDirection: isUser ? "row-reverse" : "row",
      gap: 12, alignItems: "flex-start", marginBottom: 24,
      animation: "wpFadeUp 0.35s ease forwards",
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: isUser ? 10 : "50%",
        background: isUser ? "linear-gradient(135deg, #1d4ed8, #3b82f6)" : "linear-gradient(135deg, #F7931A, #c46c0a)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: isUser ? 16 : 20, flexShrink: 0,
        boxShadow: isUser ? "0 0 16px rgba(59,130,246,0.3)" : "0 0 20px rgba(247,147,26,0.4)",
      }}>
        {isUser ? "👤" : "🦅"}
      </div>
      <div style={{ maxWidth: "80%", display: "flex", flexDirection: "column", gap: 8 }}>
        {/* Show chart previews if any */}
        {msg.images && msg.images.length > 0 && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {msg.images.map((img, i) => (
              <div key={i} style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", top: 4, left: 4, zIndex: 1,
                  background: "rgba(247,147,26,0.9)", borderRadius: 4,
                  padding: "2px 6px", fontSize: 9, color: "#000", fontWeight: 700,
                  letterSpacing: "0.05em",
                }}>{img.label}</div>
                <img src={img.preview} alt={img.label} style={{
                  width: 120, height: 80, objectFit: "cover",
                  borderRadius: 8, border: "1px solid rgba(247,147,26,0.3)",
                }} />
              </div>
            ))}
          </div>
        )}
        <div style={{
          background: isUser ? "rgba(59,130,246,0.08)" : "rgba(247,147,26,0.04)",
          border: isUser ? "1px solid rgba(59,130,246,0.2)" : "1px solid rgba(247,147,26,0.18)",
          borderRadius: isUser ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
          padding: "13px 17px", color: "#e8e8e8", fontSize: 14,
          lineHeight: 1.75, whiteSpace: "pre-wrap", letterSpacing: "0.01em",
        }}>
          {msg.content}
        </div>
      </div>
    </div>
  );
}

export default function SatoshiWhitePhoenix() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]); // [{data, preview, mediaType, label}]
  const [btcPrice, setBtcPrice] = useState(null);
  const { levels } = useLevels();
  const fileRef = useRef(null);
  const bottomRef = useRef(null);

  const fetchBTC = useCallback(async () => {
    try {
      const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true");
      const d = await res.json();
      setBtcPrice(d.bitcoin);
    } catch {}
  }, []);

  useEffect(() => { fetchBTC(); const t = setInterval(fetchBTC, 60000); return () => clearInterval(t); }, [fetchBTC]);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    files.forEach((file, index) => {
      const mediaType = file.type && file.type.startsWith("image/") ? file.type : "image/jpeg";
      const reader = new FileReader();
      reader.onload = (ev) => {
        const base64 = ev.target.result.split(",")[1];
        const label = TIMEFRAME_LABELS[images.length + index] || `Chart ${images.length + index + 1}`;
        setImages(prev => {
          if (prev.length >= 5) return prev; // max 5 charts
          return [...prev, { data: base64, preview: ev.target.result, mediaType, label }];
        });
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const updateLabel = (index, newLabel) => {
    setImages(prev => prev.map((img, i) => i === index ? { ...img, label: newLabel } : img));
  };

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if ((!userText && images.length === 0) || loading) return;
    setInput("");

    const currentImages = [...images];
    setImages([]);

    const btcContext = btcPrice
      ? `[LIVE BTC: $${btcPrice.usd?.toLocaleString()} | 24h: ${btcPrice.usd_24h_change?.toFixed(2)}%]`
      : "";

    const levelsContext = formatLevelsContext(levels);
    const displayText = userText || `Please analyze these ${currentImages.length} chart(s) using full White Phoenix top-down methodology.`;

    const userMsg = {
      role: "user",
      content: displayText,
      images: currentImages,
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setLoading(true);

    try {
      const apiContent = [];

      // Add all images with their timeframe labels
      currentImages.forEach((img) => {
        apiContent.push({
          type: "image",
          source: { type: "base64", media_type: img.mediaType, data: img.data },
        });
        apiContent.push({
          type: "text",
          text: `[Above image is the ${img.label} timeframe chart]`,
        });
      });

      // Build the analysis request text
      const chartCount = currentImages.length;
      const chartLabels = currentImages.map(img => img.label).join(", ");
      const analysisRequest = chartCount > 0
        ? `${userText || `Analyze these ${chartCount} chart(s) (${chartLabels}) using full White Phoenix top-down methodology. Start from the highest timeframe and work down. Give me the complete read, all key levels, distribution/accumulation model, and whether there is a valid setup with entry, stop, and targets.`}`
        : displayText;

      const msgText = [btcContext, levelsContext, analysisRequest].filter(Boolean).join("\n");
      apiContent.push({ type: "text", text: msgText });

      const historyMessages = messages.map(m => ({
        role: m.role,
        content: typeof m.content === "string" ? m.content : String(m.content),
      }));

      const apiMessages = [
        ...historyMessages,
        { role: "user", content: apiContent },
      ];

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1500,
          system: WHITE_PHOENIX_SYSTEM_PROMPT,
          messages: apiMessages,
        }),
      });

      const data = await res.json();

      if (data.error) {
        setMessages([...newMessages, {
          role: "assistant",
          content: `⚠️ API Error: ${data.error.message || JSON.stringify(data.error)}\n\nTry again.`
        }]);
        setLoading(false);
        return;
      }

      const reply = data.content?.map(b => b.text || "").filter(Boolean).join("") || "No response received. Please try again.";
      setMessages([...newMessages, { role: "assistant", content: reply }]);

    } catch (err) {
      setMessages([...newMessages, {
        role: "assistant",
        content: `⚠️ Connection error: ${err.message}\n\nCheck your network and retry.`
      }]);
    }
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const isUp = btcPrice?.usd_24h_change >= 0;

  return (
    <div style={{
      minHeight: "100vh", background: "#08090c",
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      display: "flex", flexDirection: "column", color: "#e8e8e8",
      position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Syne:wght@700;800;900&display=swap');
        @keyframes wpFadeUp { from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)} }
        @keyframes wpPulse { 0%,100%{opacity:.25;transform:scale(.75)}50%{opacity:1;transform:scale(1)} }
        @keyframes wpGlow { 0%,100%{opacity:.5}50%{opacity:1} }
        @keyframes wpFeather { 0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)} }
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:#2a1a08;border-radius:4px}
        textarea:focus{outline:none} textarea{resize:none}
        button:hover{opacity:.85}
        select{outline:none;}
      `}</style>

      {/* BG */}
      <div style={{ position:"fixed",inset:0,pointerEvents:"none",zIndex:0,
        backgroundImage:`linear-gradient(rgba(247,147,26,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(247,147,26,0.025) 1px,transparent 1px)`,
        backgroundSize:"44px 44px",
      }}/>
      <div style={{ position:"fixed",top:-100,left:-100,width:450,height:450,borderRadius:"50%",
        background:"radial-gradient(circle,rgba(247,147,26,0.05) 0%,transparent 70%)",pointerEvents:"none",zIndex:0
      }}/>

      {/* Header */}
      <div style={{
        position:"sticky",top:0,zIndex:30,
        background:"rgba(8,9,12,0.97)",
        borderBottom:"1px solid rgba(247,147,26,0.15)",
        backdropFilter:"blur(24px)", padding:"0 24px",
      }}>
        <div style={{ maxWidth:900,margin:"0 auto",padding:"13px 0",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
          <div style={{ display:"flex",alignItems:"center",gap:14 }}>
            <div style={{
              width:46,height:46,borderRadius:12,
              background:"linear-gradient(135deg, #F7931A, #b55a00)",
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:22, boxShadow:"0 0 24px rgba(247,147,26,0.5)",
              animation:"wpGlow 3s ease-in-out infinite",
            }}>
              <span style={{ animation:"wpFeather 4s ease-in-out infinite", display:"block" }}>🦅</span>
            </div>
            <div>
              <div style={{ fontFamily:"'Syne',sans-serif",fontWeight:900,fontSize:20,letterSpacing:"0.06em",color:"#fff" }}>SATOSHI</div>
              <div style={{ fontSize:9,color:"#F7931A",letterSpacing:"0.18em",opacity:.85 }}>WHITE PHOENIX METHODOLOGY</div>
            </div>
          </div>
          <div style={{ display:"flex",alignItems:"center",gap:16 }}>
            {btcPrice && (
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:15,fontWeight:600,color:"#fff" }}>${btcPrice.usd?.toLocaleString()}</div>
                <div style={{ fontSize:10,color:isUp?"#22c55e":"#ef4444" }}>
                  {isUp?"▲":"▼"} {Math.abs(btcPrice.usd_24h_change).toFixed(2)}%
                </div>
              </div>
            )}
            {levels && (
              <div style={{ textAlign:"right",borderLeft:"1px solid rgba(247,147,26,0.15)",paddingLeft:12 }}>
                <div style={{ fontSize:9,color:"#F7931A",letterSpacing:"0.1em" }}>{levels.sessionName?.toUpperCase()} SESSION</div>
                <div style={{ fontSize:9,color:"#4b3010",marginTop:2 }}>Levels: LIVE ✓</div>
              </div>
            )}
            <div style={{ display:"flex",alignItems:"center",gap:6 }}>
              <div style={{ width:7,height:7,borderRadius:"50%",background:"#F7931A",
                animation:"wpGlow 2s ease-in-out infinite",boxShadow:"0 0 8px #F7931A"
              }}/>
              <span style={{ fontSize:10,color:"#F7931A",letterSpacing:"0.1em" }}>LIVE</span>
            </div>
          </div>
        </div>
        <div style={{ maxWidth:900,margin:"0 auto",paddingBottom:10,
          display:"flex",gap:0,borderTop:"1px solid rgba(247,147,26,0.08)",overflowX:"auto",
        }}>
          {["SFP","RDS","VWAP","OB","MODEL 2","RANGE","BLUE BOX","PO3","MULTI-TF"].map((tag,i) => (
            <div key={i} style={{ flexShrink:0,padding:"7px 14px",borderRight:"1px solid rgba(247,147,26,0.08)",
              fontSize:9,color:"#6b4a20",letterSpacing:"0.15em",textAlign:"center"
            }}>{tag}</div>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div style={{ flex:1,overflowY:"auto",position:"relative",zIndex:5 }}>
        <div style={{ maxWidth:900,margin:"0 auto",padding:"24px 24px 180px" }}>

          {messages.length === 0 && (
            <div style={{ animation:"wpFadeUp 0.5s ease forwards" }}>
              <div style={{ textAlign:"center",marginBottom:28,paddingTop:20 }}>
                <div style={{ fontSize:52,marginBottom:16,animation:"wpFeather 4s ease-in-out infinite",display:"inline-block" }}>🦅</div>
                <div style={{ fontFamily:"'Syne',sans-serif",fontWeight:900,fontSize:26,marginBottom:8,
                  background:"linear-gradient(135deg, #F7931A, #ffd700)",
                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
                }}>White Phoenix Brain — Online</div>
                <div style={{ fontSize:12,color:"#6b4a20",lineHeight:1.9,maxWidth:500,margin:"0 auto" }}>
                  Upload up to 5 timeframe charts for full top-down analysis.<br/>
                  Daily → 4H → 1H → 15m → 5m
                </div>
              </div>

              {/* Upload zone */}
              <div style={{
                border:"2px dashed rgba(247,147,26,0.25)",borderRadius:16,
                padding:"24px",textAlign:"center",marginBottom:20,
                background:"rgba(247,147,26,0.02)",cursor:"pointer",
              }} onClick={() => fileRef.current?.click()}>
                <div style={{ fontSize:28,marginBottom:8 }}>📊</div>
                <div style={{ fontSize:13,color:"#a07040",marginBottom:4 }}>Upload up to 5 charts at once</div>
                <div style={{ fontSize:11,color:"#4b3010" }}>Daily · 4H · 1H · 15m · 5m</div>
              </div>

              <div style={{ display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center" }}>
                {QUICK_PROMPTS.map((s,i) => (
                  <button key={i} onClick={() => sendMessage(s)} style={{
                    background:"rgba(247,147,26,0.06)",border:"1px solid rgba(247,147,26,0.2)",
                    borderRadius:10,padding:"9px 14px",color:"#a07040",fontSize:12,
                    cursor:"pointer",fontFamily:"inherit",letterSpacing:"0.02em",
                  }}>{s}</button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => <Message key={i} msg={msg} />)}

          {loading && (
            <div style={{ display:"flex",gap:12,alignItems:"flex-start",marginBottom:20 }}>
              <div style={{ width:40,height:40,borderRadius:"50%",
                background:"linear-gradient(135deg, #F7931A, #c46c0a)",
                display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:20,flexShrink:0,boxShadow:"0 0 20px rgba(247,147,26,0.4)"
              }}>🦅</div>
              <div style={{ background:"rgba(247,147,26,0.05)",border:"1px solid rgba(247,147,26,0.18)",
                borderRadius:"4px 16px 16px 16px",padding:"14px 18px"
              }}>
                <TypingDots />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Chart preview bar */}
      {images.length > 0 && (
        <div style={{
          position:"fixed",bottom:90,left:"50%",transform:"translateX(-50%)",
          zIndex:25,background:"rgba(8,9,12,0.97)",
          border:"1px solid rgba(247,147,26,0.25)",borderRadius:14,
          padding:"12px 16px",
          width:"calc(100% - 48px)",maxWidth:860,
          boxSizing:"border-box",
        }}>
          <div style={{ fontSize:10,color:"#6b4a20",marginBottom:10,letterSpacing:"0.1em" }}>
            {images.length}/5 CHARTS LOADED — Click label to change timeframe
          </div>
          <div style={{ display:"flex",gap:10,overflowX:"auto" }}>
            {images.map((img, i) => (
              <div key={i} style={{ flexShrink:0,position:"relative" }}>
                <img src={img.preview} alt={img.label} style={{
                  width:100,height:65,objectFit:"cover",borderRadius:8,
                  border:"1px solid rgba(247,147,26,0.3)",display:"block",
                }}/>
                {/* Label selector */}
                <select
                  value={img.label}
                  onChange={e => updateLabel(i, e.target.value)}
                  style={{
                    position:"absolute",bottom:0,left:0,right:0,
                    background:"rgba(0,0,0,0.85)",color:"#F7931A",
                    border:"none",borderRadius:"0 0 8px 8px",
                    fontSize:10,padding:"3px 4px",cursor:"pointer",
                    fontFamily:"inherit",letterSpacing:"0.05em",width:"100%",
                  }}
                >
                  {TIMEFRAME_LABELS.map(tf => (
                    <option key={tf} value={tf}>{tf}</option>
                  ))}
                </select>
                {/* Remove button */}
                <button onClick={() => removeImage(i)} style={{
                  position:"absolute",top:-6,right:-6,
                  width:18,height:18,borderRadius:"50%",
                  background:"#ef4444",border:"none",color:"#fff",
                  fontSize:10,cursor:"pointer",display:"flex",
                  alignItems:"center",justifyContent:"center",lineHeight:1,
                }}>✕</button>
              </div>
            ))}
            {/* Add more button */}
            {images.length < 5 && (
              <div style={{
                width:100,height:65,borderRadius:8,flexShrink:0,
                border:"2px dashed rgba(247,147,26,0.2)",
                display:"flex",alignItems:"center",justifyContent:"center",
                cursor:"pointer",color:"#4b3010",fontSize:20,
              }} onClick={() => fileRef.current?.click()}>+</div>
            )}
          </div>
        </div>
      )}

      {/* Input bar */}
      <div style={{
        position:"fixed",bottom:0,left:0,right:0,zIndex:20,
        background:"rgba(8,9,12,0.97)",
        borderTop:"1px solid rgba(247,147,26,0.12)",
        backdropFilter:"blur(24px)",
        padding:"12px 24px 16px",
      }}>
        <div style={{ maxWidth:900,margin:"0 auto" }}>
          <div style={{ display:"flex",gap:10,alignItems:"flex-end" }}>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImages}
              style={{ display:"none" }}
            />
            <button onClick={() => fileRef.current?.click()} style={{
              width:46,height:46,borderRadius:12,flexShrink:0,
              background: images.length > 0 ? "linear-gradient(135deg,#F7931A,#c46c0a)" : "rgba(247,147,26,0.1)",
              border:"1px solid rgba(247,147,26,0.25)",
              cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",
              boxShadow: images.length > 0 ? "0 0 16px rgba(247,147,26,0.4)" : "none",
              position:"relative",
            }}>
              📊
              {images.length > 0 && (
                <div style={{
                  position:"absolute",top:-6,right:-6,
                  width:18,height:18,borderRadius:"50%",
                  background:"#F7931A",color:"#000",
                  fontSize:10,fontWeight:700,
                  display:"flex",alignItems:"center",justifyContent:"center",
                }}>{images.length}</div>
              )}
            </button>

            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={images.length > 0
                ? `${images.length} chart(s) loaded — add context or just hit ⚡ for full analysis...`
                : "Ask White Phoenix anything, or upload charts for analysis..."
              }
              rows={1}
              style={{
                flex:1,background:"rgba(247,147,26,0.04)",
                border:"1px solid rgba(247,147,26,0.2)",
                borderRadius:12,padding:"13px 16px",
                color:"#e8e8e8",fontSize:14,fontFamily:"inherit",
                letterSpacing:"0.02em",lineHeight:1.5,
                boxSizing:"border-box",
              }}
              onFocus={e=>e.target.style.borderColor="rgba(247,147,26,0.5)"}
              onBlur={e=>e.target.style.borderColor="rgba(247,147,26,0.2)"}
            />
            <button
              onClick={() => sendMessage()}
              disabled={((!input.trim() && images.length === 0) || loading)}
              style={{
                width:46,height:46,borderRadius:12,
                background: ((!input.trim()&&images.length===0)||loading) ? "rgba(247,147,26,0.1)" : "linear-gradient(135deg,#F7931A,#c46c0a)",
                border:"none",
                cursor:((!input.trim()&&images.length===0)||loading)?"not-allowed":"pointer",
                fontSize:20,display:"flex",alignItems:"center",justifyContent:"center",
                flexShrink:0,
                boxShadow:((!input.trim()&&images.length===0)||loading)?"none":"0 0 20px rgba(247,147,26,0.5)",
              }}
            >{loading?"⏳":"⚡"}</button>
          </div>
          <div style={{ textAlign:"center",marginTop:6,fontSize:9,color:"#2a1508",letterSpacing:"0.1em" }}>
            WHITE PHOENIX METHODOLOGY · EDUCATIONAL ONLY · NOT FINANCIAL ADVICE · DYOR · MAX 5 CHARTS
          </div>
        </div>
      </div>
    </div>
  );
}