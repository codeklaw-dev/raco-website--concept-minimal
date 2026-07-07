/**
 * Ticker — the marquee of model/system status under the header.
 * Server component. The track is rendered twice so the CSS `tick`
 * keyframe (translateX -50%) loops seamlessly — this replaces the
 * original runtime `track.innerHTML += track.innerHTML` duplication.
 */
const ITEMS: { name: string; label: string; status: string; tone: "ok" | "amber" }[] = [
  { name: "APOLO", label: "reasoning LLM", status: "● ONLINE", tone: "ok" },
  { name: "CASPER", label: "voice model", status: "● STREAMING", tone: "ok" },
  { name: "RACO-BEAST", label: "agent orchestration", status: "● COORDINATING", tone: "ok" },
  { name: "AIVIT", label: "voice API", status: "● SERVING", tone: "ok" },
  { name: "RACO", label: "workspace", status: "● DEPLOYED", tone: "ok" },
  { name: "~300 PEOPLE", label: "Bristol / Dhaka", status: "● 24H CYCLE", tone: "amber" },
  { name: "APPLIED RESEARCH", label: "SLM / vision / robotics", status: "● IN MOTION", tone: "amber" },
];

function Item({ item }: { item: (typeof ITEMS)[number] }) {
  return (
    <span>
      <b>{item.name}</b> — {item.label} <b className={item.tone}>{item.status}</b>
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track" id="tickerTrack">
        {ITEMS.map((item, i) => (
          <Item key={`a-${i}`} item={item} />
        ))}
        {ITEMS.map((item, i) => (
          <Item key={`b-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}
