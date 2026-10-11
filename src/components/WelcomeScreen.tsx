"use client";

import { useEffect, useState } from "react";
import { REPLAY_EVENT } from "./ReplayButton";

type WelcomeScreenProps = {
  role: string;
  name: string;
};

/* ---------- Floral pieces (inline SVG) ---------- */

const PETAL = "#9dbbd6";
const PETAL_EDGE = "#7b9fbf";
const LEAF = "#a9c4bb";
const STEM = "#8fb0a6";
const GOLD = "#c9a54c";

function Flower({
  cx,
  cy,
  r = 14,
  rotate = 0,
  petal = PETAL,
}: {
  cx: number;
  cy: number;
  r?: number;
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
          strokeWidth="0.6"
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
      strokeWidth="0.6"
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    />
  );
}

function FloralCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Stems */}
      <g stroke={STEM} strokeWidth="2" strokeLinecap="round">
        <path d="M0 0 C 50 30, 90 50, 150 40" />
        <path d="M0 0 C 30 50, 50 90, 40 150" />
        <path d="M0 0 C 60 60, 100 100, 170 95" />
        <path d="M0 0 C 60 60, 100 100, 95 170" />
        <path d="M150 40 C 170 30, 190 28, 205 22" />
        <path d="M40 150 C 30 170, 28 190, 22 205" />
      </g>

      {/* Leaves */}
      <Leaf x={55} y={32} rotate={-20} scale={0.9} />
      <Leaf x={100} y={52} rotate={25} scale={0.8} />
      <Leaf x={32} y={55} rotate={110} scale={0.9} />
      <Leaf x={52} y={100} rotate={65} scale={0.8} />
      <Leaf x={120} y={78} rotate={-35} scale={0.9} />
      <Leaf x={78} y={122} rotate={125} scale={0.9} />
      <Leaf x={175} y={36} rotate={-30} scale={0.7} />
      <Leaf x={36} y={175} rotate={120} scale={0.7} />

      {/* Flowers */}
      <Flower cx={70} cy={70} r={26} rotate={10} />
      <Flower cx={150} cy={40} r={18} rotate={-15} petal="#b3cde2" />
      <Flower cx={40} cy={150} r={18} rotate={25} petal="#b3cde2" />
      <Flower cx={170} cy={95} r={11} rotate={5} />
      <Flower cx={95} cy={170} r={11} rotate={30} />
      <Flower cx={205} cy={22} r={9} rotate={0} petal="#b3cde2" />
      <Flower cx={22} cy={205} r={9} rotate={0} petal="#b3cde2" />
    </svg>
  );
}

function FloralSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 80 C 20 55, 35 40, 60 22"
        stroke={STEM}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Leaf x={22} y={62} rotate={-60} scale={0.6} />
      <Leaf x={36} y={46} rotate={-25} scale={0.55} />
      <Flower cx={60} cy={22} r={12} rotate={10} />
      <Flower cx={34} cy={46} r={8} rotate={-10} petal="#b3cde2" />
      <Flower cx={16} cy={70} r={6} rotate={20} />
    </svg>
  );
}

/* ---------- Welcome screen ---------- */

export default function WelcomeScreen({
  role,
  name,
}: WelcomeScreenProps) {
  const [ready, setReady] = useState(false);
  const [opening, setOpening] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Replay: ibalik ang envelope kapag may "replay-envelope" signal
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    function handleReplay() {
      window.scrollTo({ top: 0, behavior: "auto" });

      setOpening(false);
      setReady(false);
      setClosed(false);

      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setReady(true), 150);
    }

    window.addEventListener(REPLAY_EVENT, handleReplay);

    return () => {
      window.removeEventListener(REPLAY_EVENT, handleReplay);
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (closed) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [closed]);

  function handleOpen() {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      setClosed(true);
    }, 2400);
  }

  if (closed) return null;

  return (
    <div
      className={`wedding-intro fixed inset-0 z-50 flex items-center justify-center overflow-hidden text-[#2e3d4d] ${
        opening ? "intro-exit" : ""
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#dbe8f3]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#f4f9fd_0%,_#dbe8f3_48%,_#bcd2e4_100%)]" />

      {/* Subtle background texture */}
      <div className="envelope-grain pointer-events-none absolute inset-0" />

      {/* Corner florals */}
      <FloralCorner
        className={`pointer-events-none absolute left-0 top-0 z-[1] w-40 transition-opacity duration-1000 sm:w-72 ${
          ready ? "opacity-90" : "opacity-0"
        }`}
      />
      <FloralCorner
        className={`pointer-events-none absolute bottom-0 right-0 z-[1] w-40 rotate-180 transition-opacity duration-1000 sm:w-72 ${
          ready ? "opacity-90" : "opacity-0"
        }`}
      />

      {/* Main content */}
      <div
        className={`relative z-10 flex w-full max-w-xl flex-col items-center px-5 text-center transition-all duration-1000 ${
          ready
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        }`}
      >
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#6f8ba6] sm:text-xs">
          Wedding Invitation
        </p>

        <h1 className="mt-5 font-serif text-3xl tracking-wide text-[#2e3d4d] sm:text-5xl">
          Kraricia <span className="italic text-[#b8923a]">&</span> Bimbo
        </h1>

        <p className="mt-3 font-serif text-sm italic text-[#5a6f82]">
          A celebration of love
        </p>

        {/* Envelope stage */}
        <div
          className={`envelope-scene relative mt-16 w-full max-w-[330px] sm:mt-20 ${
            opening ? "envelope-opening" : ""
          }`}
        >
          {/* Shadow underneath envelope */}
          <div className="envelope-shadow absolute -bottom-7 left-[8%] h-10 w-[84%] rounded-[50%] bg-[#2e3d4d]/30 blur-xl" />

          {/* Invitation card inside the envelope */}
          <div className="invitation-card absolute left-[7%] top-[4%] z-[1] flex h-[90%] w-[86%] flex-col items-center justify-center border border-[#c9a54c] bg-[#fbfdff] px-4 text-[#2e3d4d]">
            <div className="absolute inset-2 border border-[#c9a54c]/70" />

            <p className="relative text-[9px] uppercase tracking-[0.35em] text-[#6f8ba6]">
              Together with love
            </p>

            <h2 className="relative mt-4 font-serif text-2xl italic sm:text-3xl">
              K <span className="text-[#b8923a]">&</span> B
            </h2>

            <div className="relative my-4 h-px w-16 bg-[#c9a54c]" />

            <p className="relative font-serif text-sm tracking-wide">
              Kraricia & Bimbo
            </p>

            <p className="relative mt-2 text-[9px] uppercase tracking-[0.25em] text-[#6f8ba6]">
              Our Wedding Day
            </p>
          </div>

          {/* Envelope body */}
          <div className="envelope-body relative z-[2] aspect-[1.42/1] w-full overflow-hidden rounded-sm border border-[#c9a54c]/60 bg-[#9fbdd6] shadow-[0_20px_50px_rgba(46,61,77,0.3)]">
            {/* Paper shading */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#bdd3e6] via-[#9fbdd6] to-[#86a8c5]" />

            {/* Left and right folds */}
            <div
              className="absolute inset-0 bg-[#acc7dd]"
              style={{
                clipPath: "polygon(0 0, 50% 56%, 0 100%)",
              }}
            />

            <div
              className="absolute inset-0 bg-[#94b4ce]"
              style={{
                clipPath: "polygon(100% 0, 50% 56%, 100% 100%)",
              }}
            />

            {/* Bottom fold */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#7d9fbc] via-[#94b4ce] to-[#9fbdd6]"
              style={{
                clipPath: "polygon(0 100%, 50% 37%, 100% 100%)",
              }}
            />

            {/* Subtle paper highlight */}
            <div className="pointer-events-none absolute inset-0 border border-white/20" />
          </div>

          {/* Envelope flap */}
          <div
            className="envelope-flap absolute inset-0 z-[4]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 59%)",
              transformOrigin: "top center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#c6dbec] via-[#aac6dc] to-[#92b2cc]" />

            <div
              className="absolute inset-0 border-t border-[#c9a54c]/60"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 59%)",
              }}
            />

            {/* Flap edge highlight */}
            <div
              className="absolute inset-0 bg-[#e6f0f8]/40"
              style={{
                clipPath: "polygon(0 0, 50% 59%, 100% 0, 50% 53%)",
              }}
            />
          </div>

          {/* Flower sprigs on envelope corners */}
          <FloralSprig
            className={`pointer-events-none absolute -bottom-5 -left-6 z-[6] w-20 transition-opacity duration-500 sm:w-24 ${
              opening ? "opacity-0" : "opacity-100"
            }`}
          />
          <FloralSprig
            className={`pointer-events-none absolute -bottom-5 -right-6 z-[6] w-20 -scale-x-100 transition-opacity duration-500 sm:w-24 ${
              opening ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Wax seal */}
          <button
            type="button"
            onClick={handleOpen}
            disabled={opening}
            aria-label="Open wedding invitation"
            className="wax-seal absolute left-1/2 top-[34%] z-[5] flex h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#c9a54c] bg-[radial-gradient(circle_at_35%_25%,#f7e6aa,#d9b45a_55%,#a8822f)] text-[#5e4716] shadow-[0_7px_16px_rgba(46,61,77,0.35),inset_0_-4px_8px_rgba(94,71,22,0.25)] transition-transform duration-300 hover:scale-105 active:scale-95 disabled:cursor-default sm:h-[88px] sm:w-[88px]"
          >
            <span className="absolute inset-[6px] rounded-full border border-[#8a6a22]/60" />
            <span className="font-serif text-2xl italic sm:text-3xl">
              K <span className="text-lg">&</span> B
            </span>
          </button>
        </div>

        {/* Guest information */}
        <div
          className={`mt-16 transition-all duration-500 ${
            opening ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <p className="font-serif text-base italic text-[#6f8ba6]">
            A special invitation for
          </p>

          <p className="mt-2 font-serif text-xl tracking-wide text-[#2e3d4d] sm:text-2xl">
            {role} {name}
          </p>

          <button
            type="button"
            onClick={handleOpen}
            disabled={opening}
            className="mt-7 inline-flex items-center gap-3 border-b border-[#c9a54c] pb-2 text-[10px] uppercase tracking-[0.3em] text-[#5a6f82] transition-colors hover:border-[#b8923a] hover:text-[#2e3d4d] disabled:pointer-events-none"
          >
            <span>Open your invitation</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .wedding-intro {
          isolation: isolate;
        }

        .envelope-grain {
          opacity: 0.09;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.3'/%3E%3C/svg%3E");
        }

        .envelope-scene {
          perspective: 1200px;
          transform-style: preserve-3d;
          animation: envelope-arrive 1s ease-out both;
        }

        .envelope-scene:not(.envelope-opening):hover {
          transform: translateY(-4px);
          transition: transform 350ms ease;
        }

        .envelope-body {
          transform-style: preserve-3d;
        }

        .envelope-flap {
          transform-style: preserve-3d;
          backface-visibility: visible;
          transition:
            transform 900ms cubic-bezier(0.22, 0.75, 0.25, 1),
            z-index 0ms linear 450ms;
        }

        .invitation-card {
          box-shadow: 0 2px 12px rgba(46, 61, 77, 0.12);
          transition:
            transform 1200ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 900ms ease;
        }

        .wax-seal {
          transition:
            opacity 350ms ease,
            transform 450ms ease;
        }

        .envelope-opening .envelope-flap {
          transform: rotateX(180deg);
          z-index: 0;
        }

        .envelope-opening .invitation-card {
          transform: translateY(-76%) scale(1.025);
          box-shadow: 0 18px 40px rgba(46, 61, 77, 0.3);
          transition-delay: 400ms;
        }

        .envelope-opening .wax-seal {
          opacity: 0;
          transform: translate(-50%, -80%) scale(1.5) rotate(15deg);
          pointer-events: none;
        }

        .envelope-opening .envelope-shadow {
          opacity: 0.2;
          transition: opacity 900ms ease;
        }

        .intro-exit {
          animation: intro-exit 700ms ease-in 1.7s forwards;
          pointer-events: none;
        }

        @keyframes envelope-arrive {
          from {
            opacity: 0;
            transform: translateY(24px) rotateX(7deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes intro-exit {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .envelope-scene,
          .intro-exit {
            animation-duration: 0.01ms;
            animation-delay: 0ms;
          }

          .envelope-flap,
          .invitation-card,
          .wax-seal {
            transition-duration: 0.01ms;
          }
        }
      `}</style>
    </div>
  );
}