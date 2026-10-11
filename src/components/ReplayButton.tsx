"use client";

export const REPLAY_EVENT = "replay-envelope";

export default function ReplayButton() {
  function handleReplay() {
    window.dispatchEvent(new Event(REPLAY_EVENT));
  }

  return (
    <button
      type="button"
      onClick={handleReplay}
      className="mt-10 text-xs uppercase tracking-[0.2em] text-[#6f8ba6] underline decoration-[#c9a54c] underline-offset-4 transition-colors hover:text-[#b8923a]"
    >
      Back to Welcome
    </button>
  );
}