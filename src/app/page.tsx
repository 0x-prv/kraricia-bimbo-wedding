import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#e6f0f8] text-[#2e3d4d]">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-16">
        {/* Decorative background */}
        <div className="pointer-events-none absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-[#bcd2e4]/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-80 w-80 rounded-full bg-[#c9a54c]/20 blur-3xl" />

        <div className="relative w-full max-w-xl text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-[#6f8ba6]">
            Together with their families
          </p>

          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#c9a54c]">
            <span className="font-serif text-3xl italic text-[#b8923a]">
              K & B
            </span>
          </div>

          <p className="mb-4 font-serif text-lg italic text-[#6f8ba6]">
            You are cordially invited to celebrate the wedding of
          </p>

          <h1 className="font-serif text-5xl leading-tight tracking-wide sm:text-7xl">
            Kraricia
            <span className="my-2 block text-3xl italic text-[#b8923a] sm:text-4xl">
              &
            </span>
            Bimbo
          </h1>

          <div className="mx-auto my-8 h-px w-20 bg-[#c9a54c]" />

          <p className="text-sm uppercase tracking-[0.25em] text-[#5a6f82]">
            October 24, 2026
          </p>

          <p className="mt-3 text-sm tracking-widest text-[#5a6f82]">
            8:00 in the morning
          </p>

          <p className="mt-10 font-serif text-xl italic">
            A beautiful beginning,
            <br />
            a lifetime of love.
          </p>

          <Link
            href="/invite/guest"
            className="mt-10 inline-flex min-h-12 items-center justify-center border border-[#c9a54c] px-9 py-4 text-xs uppercase tracking-[0.25em] transition duration-300 hover:bg-[#c9a54c] hover:text-white"
          >
            Open Invitation
          </Link>

          <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-[#8aa2b8]">
            Made with love for your special day
          </p>
        </div>
      </section>
    </main>
  );
}