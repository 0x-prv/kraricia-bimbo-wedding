"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-10-24T08:00:00+08:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft | null {
  const diff = WEDDING_DATE - Date.now();

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return <div className="h-24" aria-hidden="true" />;
  }

  if (!timeLeft) {
    return (
      <p className="font-serif text-xl italic text-[#b8923a]">
        Today is the day!
      </p>
    );
  }

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex h-20 w-16 flex-col items-center justify-center border border-[#c9a54c] bg-white/40 sm:h-24 sm:w-20"
        >
          <span className="font-serif text-2xl text-[#2e3d4d] sm:text-3xl">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#6f8ba6]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}