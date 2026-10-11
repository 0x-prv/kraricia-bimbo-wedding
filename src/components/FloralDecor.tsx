const PETAL = "#9dbbd6";
const PETAL_LIGHT = "#b3cde2";
const PETAL_EDGE = "#7b9fbf";
const LEAF = "#a9c4bb";
const STEM = "#8fb0a6";
const GOLD = "#c9a54c";

function Flower({
  cx,
  cy,
  r,
  rotate = 0,
  petal = PETAL,
}: {
  cx: number;
  cy: number;
  r: number;
  rotate?: number;
  petal?: string;
}) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate})`}>
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="0"
          cy={-r * 0.9}
          rx={r * 0.5}
          ry={r}
          fill={petal}
          fillOpacity="0.92"
          stroke={PETAL_EDGE}
          strokeWidth="0.5"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r={r * 0.32} fill={GOLD} />
      <circle r={r * 0.14} fill="#8a6a22" fillOpacity="0.5" />
    </g>
  );
}

function Leaf({
  x,
  y,
  rotate = 0,
  scale = 1,
}: {
  x: number;
  y: number;
  rotate?: number;
  scale?: number;
}) {
  return (
    <path
      d="M0 0 C 8 -10, 24 -10, 34 0 C 24 10, 8 10, 0 0Z"
      fill={LEAF}
      fillOpacity="0.9"
      stroke={STEM}
      strokeWidth="0.5"
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    />
  );
}

/**
 * Small blue flower cluster, naka-design para sa TOP-LEFT corner.
 * Gamitin ang className para i-flip / i-position:
 *  - top-right:    "absolute right-0 top-0 -scale-x-100"
 *  - bottom-left:  "absolute bottom-0 left-0 -scale-y-100"
 *  - bottom-right: "absolute bottom-0 right-0 rotate-180"
 */
export default function FloralDecor({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Stems */}
      <g stroke={STEM} strokeWidth="1.5" strokeLinecap="round">
        <path d="M0 0 C 25 15, 45 25, 78 20" />
        <path d="M0 0 C 15 25, 25 45, 20 78" />
        <path d="M0 0 C 30 30, 50 50, 82 48" />
        <path d="M0 0 C 30 30, 50 50, 48 82" />
      </g>

      {/* Leaves */}
      <Leaf x={28} y={16} rotate={-20} scale={0.6} />
      <Leaf x={50} y={26} rotate={25} scale={0.55} />
      <Leaf x={16} y={28} rotate={110} scale={0.6} />
      <Leaf x={26} y={50} rotate={65} scale={0.55} />
      <Leaf x={58} y={38} rotate={-35} scale={0.55} />
      <Leaf x={38} y={58} rotate={125} scale={0.55} />

      {/* Flowers */}
      <Flower cx={34} cy={34} r={15} rotate={10} />
      <Flower cx={78} cy={20} r={10} rotate={-15} petal={PETAL_LIGHT} />
      <Flower cx={20} cy={78} r={10} rotate={25} petal={PETAL_LIGHT} />
      <Flower cx={82} cy={48} r={6} rotate={5} />
      <Flower cx={48} cy={82} r={6} rotate={30} />
    </svg>
  );
}