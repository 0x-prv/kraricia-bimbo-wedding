import FloralDecor from "./FloralDecor";

// ============ DITO MO ILALAGAY ANG DETALYE ============

// Dress code
const DRESS_CODE_TITLE: string = "Semi-Formal";

const DRESS_CODE_NOTES: string =
  "Gentlemen: dress shirt or polo with slacks (vest or blazer optional). Ladies: dresses or elegant separates.";

const DRESS_CODE_COLORS: { name: string; hex: string }[] = [
  { name: "Powder Blue", hex: "#bcd2e4" },
  { name: "Baby Blue", hex: "#cfe3f3" },
  { name: "Sky Mist", hex: "#a9c7e0" },
  { name: "Periwinkle", hex: "#b5c4e6" },
  { name: "Soft White", hex: "#f4f7fa" },
];

// RSVP via Messenger
const RSVP_MESSENGER_LINK: string = "https://m.me/Nineng.T.Avelino";
const RSVP_DEADLINE: string = "";

// =======================================================

type InvitationExtrasProps = {
  guestTitle: string;
};

export default function InvitationExtras({
  guestTitle,
}: InvitationExtrasProps) {
  const hasDressCode =
    DRESS_CODE_TITLE !== "" ||
    DRESS_CODE_NOTES !== "" ||
    DRESS_CODE_COLORS.length > 0;

  const hasRsvp = RSVP_MESSENGER_LINK !== "";

  if (!hasDressCode && !hasRsvp) return null;

  return (
    <div className="mx-auto mt-10 flex w-full max-w-md flex-col gap-5">
      {/* Dress code card */}
      {hasDressCode && (
        <section className="relative overflow-hidden rounded-2xl border border-[#d5dfeb] bg-white shadow-[0_8px_30px_rgba(46,61,77,0.07)]">
          <FloralDecor className="absolute right-0 top-0 w-16 -scale-x-100 opacity-80 sm:w-20" />
          <FloralDecor className="absolute bottom-0 left-0 w-14 -scale-y-100 opacity-70 sm:w-16" />

          <div className="relative p-5 sm:p-6">
            <div className="flex flex-col items-center text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e6f0f8] text-[#557895]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M16 4 12 7 8 4 3.5 7.5 6 12l3-1v9h6v-9l3 1 2.5-4.5L16 4Z" />
                </svg>
              </span>

              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8b9daf]">
                Guest Attire
              </p>

              {DRESS_CODE_TITLE !== "" && (
                <h3 className="mt-2 font-serif text-2xl text-[#2e3d4d]">
                  {DRESS_CODE_TITLE}
                </h3>
              )}

              <div className="my-4 h-px w-12 bg-[#c9a54c]" />

              {DRESS_CODE_NOTES !== "" && (
                <p className="max-w-sm text-sm leading-7 text-[#65778a]">
                  {DRESS_CODE_NOTES}
                </p>
              )}
            </div>

            {DRESS_CODE_COLORS.length > 0 && (
              <div className="mt-6 border-t border-[#e7edf3] pt-5">
                <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b9daf]">
                  Suggested Colors
                </p>

                <div className="flex flex-wrap justify-center gap-x-5 gap-y-4">
                  {DRESS_CODE_COLORS.map((color) => (
                    <div
                      key={color.name}
                      className="flex w-16 flex-col items-center text-center"
                    >
                      <span
                        className="h-10 w-10 rounded-full border border-[#d5dfeb] shadow-sm"
                        style={{ backgroundColor: color.hex }}
                      />

                      <span className="mt-2 text-[10px] leading-4 text-[#65778a]">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* RSVP card */}
      {hasRsvp && (
        <section className="relative overflow-hidden rounded-2xl border border-[#d5dfeb] bg-white shadow-[0_8px_30px_rgba(46,61,77,0.07)]">
          <FloralDecor className="absolute right-0 top-0 w-16 -scale-x-100 opacity-80 sm:w-20" />
          <FloralDecor className="absolute bottom-0 left-0 w-14 -scale-y-100 opacity-70 sm:w-16" />

          <div className="relative p-5 sm:p-6">
            <div className="flex flex-col items-center text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e6f0f8] text-[#557895]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="15" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>

              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8b9daf]">
                Kindly Respond
              </p>

              <h3 className="mt-2 font-serif text-2xl text-[#2e3d4d]">
                Will you join us?
              </h3>

              <div className="my-4 h-px w-12 bg-[#c9a54c]" />

              <p className="max-w-sm text-sm leading-7 text-[#65778a]">
                Your presence would mean so much to us. Please let
                us know if you can attend by sending us a message
                on Messenger.
              </p>

              <div className="mt-4 rounded-lg bg-[#f4f7fa] px-4 py-3">
                <p className="text-xs leading-5 text-[#65778a]">
                  RSVP for:{" "}
                  <span className="font-medium text-[#2e3d4d]">
                    {guestTitle}
                  </span>
                </p>
              </div>

              {RSVP_DEADLINE !== "" && (
                <p className="mt-4 text-xs text-[#8b9daf]">
                  Kindly respond on or before {RSVP_DEADLINE}.
                </p>
              )}
            </div>

            <a
              href={RSVP_MESSENGER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2e3d4d] px-5 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#435c70] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a54c] focus-visible:ring-offset-2"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.91 1.43 5.5 3.67 7.18V22l3.36-1.85c.94.26 1.94.4 2.97.4 5.52 0 10-4.14 10-9.25S17.52 2 12 2Zm1.03 12.45-2.55-2.72-4.97 2.72 5.47-5.81 2.62 2.72 4.9-2.72-5.47 5.81Z" />
              </svg>
              RSVP on Messenger
            </a>
          </div>
        </section>
      )}
    </div>
  );
}