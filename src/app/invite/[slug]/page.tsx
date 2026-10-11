import Image from "next/image";
import Link from "next/link";
import Countdown from "../../../components/Countdown";
import FloralDecor from "../../../components/FloralDecor";
import InvitationExtras from "../../../components/InvitationExtras";
import ReplayButton from "../../../components/ReplayButton";
import WelcomeScreen from "../../../components/WelcomeScreen";

export const instant = false;

type Guest = {
  name: string;
  role: "Ninong" | "Ninang";
};

const guests: Record<string, Guest> = {
  "zenaida-capalaran": {
    name: "Zenaida Capalaran",
    role: "Ninang",
  },
  "marivic-patoc": {
    name: "Marivic Patoc",
    role: "Ninang",
  },
  "frieda-frenando": {
    name: "Frieda Frenando",
    role: "Ninang",
  },
  "mylene-palomeras": {
    name: "Mylene Palomeras",
    role: "Ninang",
  },
  "norlita-ilagan": {
    name: "Norlita Ilagan",
    role: "Ninang",
  },
  "felix-avelino": {
    name: "Felix Avelino",
    role: "Ninong",
  },
  "mark-balantes": {
    name: "Mark Balantes",
    role: "Ninong",
  },
  "michael-alob": {
    name: "Michael Alob",
    role: "Ninong",
  },
  "dionson-torino": {
    name: "Dionson Torino",
    role: "Ninong",
  },
  "jun-laberinto": {
    name: "Jun Laberinto",
    role: "Ninong",
  },
};

type InvitationPageProps = {
  params: Promise<{ slug: string }>;
};

/* Maliit na flower divider: line - flower - line */
function FlowerDivider() {
  return (
    <div
      className="my-8 flex items-center justify-center gap-3"
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-[#c9a54c] sm:w-16" />

      <svg viewBox="-20 -20 40 40" className="h-9 w-9" fill="none">
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-8"
            rx="5"
            ry="9"
            fill="#9dbbd6"
            fillOpacity="0.92"
            stroke="#7b9fbf"
            strokeWidth="0.5"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle r="4" fill="#c9a54c" />
        <circle r="1.7" fill="#8a6a22" fillOpacity="0.5" />
      </svg>

      <span className="h-px w-12 bg-[#c9a54c] sm:w-16" />
    </div>
  );
}

export default async function InvitationPage({
  params,
}: InvitationPageProps) {
  const { slug } = await params;
  const guest = guests[slug.toLowerCase()];

  if (!guest) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#e6f0f8] px-6 text-center text-[#2e3d4d]">
        <div className="max-w-md">
          <p className="font-serif text-3xl">
            Invitation not found
          </p>

          <p className="mt-4 text-sm leading-7 text-[#5a6f82]">
            This invitation link may be incorrect. Please check the
            link and try again.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block border border-[#c9a54c] px-6 py-3 text-xs uppercase tracking-widest"
          >
            Back to Welcome
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#e6f0f8] px-5 py-12 text-[#2e3d4d] sm:py-20">
      <WelcomeScreen role={guest.role} name={guest.name} />

      <section className="relative mx-auto flex min-h-[75vh] w-full max-w-2xl flex-col items-center justify-center overflow-hidden border border-[#c9a54c] px-6 py-12 text-center sm:px-14">
        {/* Corner florals */}
        <FloralDecor className="absolute left-0 top-0 z-0 w-28 opacity-90 sm:w-44" />
        <FloralDecor className="absolute right-0 top-0 z-0 w-28 -scale-x-100 opacity-90 sm:w-44" />
        <FloralDecor className="absolute bottom-0 left-0 z-0 w-28 -scale-y-100 opacity-90 sm:w-44" />
        <FloralDecor className="absolute bottom-0 right-0 z-0 w-28 rotate-180 opacity-90 sm:w-44" />

        {/* Content (nasa ibabaw ng bulaklak) */}
        <div className="relative z-10 flex w-full flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6f8ba6]">
            With love and gratitude
          </p>

          {/* Couple photo */}
          <div className="my-8 h-32 w-32 sm:h-36 sm:w-36">
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#c9a54c] p-1">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-[#cfe0ee]">
                <Image
                  src="/couple1.jpg"
                  alt="Kraricia and Bimbo"
                  fill
                  sizes="(max-width: 640px) 128px, 144px"
                  className="object-cover"
                  style={{
                    objectPosition: "30% 0%",
                    transformOrigin: "50% 22%",
                    transform: "translateY(-8%) scale(1.25)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Personalized greeting */}
          <p className="font-serif text-xl italic text-[#6f8ba6]">
            Dear {guest.role} {guest.name},
          </p>

          {/* Couple names */}
          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
            Kraricia
            <span className="my-3 block text-3xl italic text-[#b8923a]">
              &
            </span>
            Bimbo
          </h1>

          <FlowerDivider />

          {/* Invitation message */}
          <p className="max-w-md text-sm leading-8 text-[#5a6f82]">
            With joyful hearts, we invite you to be part of our special
            day as we begin our journey together in love and marriage.
            Your presence and blessing would mean so much to us.
          </p>

          {/* Wedding date and countdown */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#6f8ba6]">
              Our Wedding Day
            </p>

            <p className="mt-3 font-serif text-2xl">
              October 24, 2026
            </p>

            <p className="mt-2 text-sm tracking-widest text-[#5a6f82]">
              8:00 AM
            </p>

            <div className="mt-8">
              <Countdown />
            </div>
          </div>

          {/* Ceremony venue (Google Maps style) */}
          <div className="mt-10 w-full max-w-md overflow-hidden rounded-2xl border border-[#c9a54c]/50 bg-white text-left shadow-[0_8px_30px_rgba(46,61,77,0.08)]">
            {/* Map preview */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Cris+%26+Charms+Events+140+Kalayaan+Avenue+Quezon+City"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View ceremony venue on Google Maps"
              className="group relative block h-48 overflow-hidden bg-[#e6edf2] sm:h-56"
            >
              <iframe
                title="Cris & Charms Events map"
                src="https://maps.google.com/maps?q=Cris%20%26%20Charms%20Events%2C%20140%20Kalayaan%20Avenue%2C%20Quezon%20City&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="pointer-events-none h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-2 text-xs font-medium text-[#2e3d4d] shadow-md">
                <span className="mr-1 text-[#b8923a]">●</span>
                Open in Google Maps
              </span>
            </a>

            {/* Venue details */}
            <div className="relative p-5 sm:p-6">
              <FloralDecor className="absolute right-0 top-0 w-16 -scale-x-100 opacity-80 sm:w-20" />

              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e6f0f8] text-[#557895]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8b9daf]">
                    Ceremony Venue
                  </p>

                  <h3 className="mt-1 font-serif text-xl text-[#2e3d4d]">
                    Cris & Charms Events
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#65778a]">
                    Ground Floor, Unit 101CD, Balgan Place 3 Bldg.
                    <br />
                    140 Kalayaan Avenue, Brgy. Central
                    <br />
                    Quezon City
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-[#f4f7fa] p-3">
                <p className="text-xs leading-5 text-[#65778a]">
                  <span className="font-semibold text-[#2e3d4d]">
                    Landmark:
                  </span>{" "}
                  In front of the Fire Department of QC City Hall
                </p>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Cris+%26+Charms+Events%2C+140+Kalayaan+Avenue%2C+Quezon+City"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff" }}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2e3d4d] px-5 py-3.5 text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:bg-[#435c70]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="m3 11 18-8-8 18-2-8-8-2Z" />
                  <path d="m11 13 5-5" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Reception venue (text only, no map) */}
          <div className="relative mt-6 w-full max-w-md overflow-hidden rounded-2xl border border-[#c9a54c]/50 bg-white p-5 text-left shadow-[0_8px_30px_rgba(46,61,77,0.08)] sm:p-6">
            <FloralDecor className="absolute right-0 top-0 w-16 -scale-x-100 opacity-80 sm:w-20" />
            <FloralDecor className="absolute bottom-0 left-0 w-14 -scale-y-100 opacity-70 sm:w-16" />

            <div className="relative flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e6f0f8] text-[#557895]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8b9daf]">
                  Reception Venue
                </p>

                <h3 className="mt-1 font-serif text-xl text-[#2e3d4d]">
                  Avelino Residence
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#65778a]">
                  Reception venue for the wedding celebration.
                </p>
              </div>
            </div>
          </div>

          {/* Dress code and RSVP */}
          <InvitationExtras guestTitle={`${guest.role} ${guest.name}`} />

          {/* Closing message */}
          <p className="mt-10 font-serif text-lg italic text-[#6f8ba6]">
            With love,
            <br />
            Kraricia & Bimbo
          </p>

          {/* Replay envelope */}
          <ReplayButton />
        </div>
      </section>
    </main>
  );
}