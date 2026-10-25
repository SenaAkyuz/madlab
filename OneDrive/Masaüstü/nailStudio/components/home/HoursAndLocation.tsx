import { site } from "@/config/site";
import Button from "@/components/ui/Button";
import { MailIcon, InstagramIcon, PhoneIcon } from "@/components/ui/Icons";

// Gerçek harita iframe'i yok: stilize SVG harita
function StylizedMap() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" role="img" aria-label="Stüdyonun konumunu gösteren stilize harita">
      <rect width="400" height="220" fill="#EEEDEB" />
      <path d="M0 150 C80 120 140 190 220 150 S340 110 400 140" stroke="#E6E0F0" strokeWidth="26" fill="none" />
      <g stroke="#fff" strokeWidth="10" strokeLinecap="round" fill="none">
        <path d="M-10 60 L420 40" /><path d="M90 -10 L120 230" /><path d="M260 -10 L300 230" /><path d="M-10 190 L420 205" />
      </g>
      <g fill="#E3D3C6">
        <rect x="140" y="70" width="58" height="48" rx="8" /><rect x="320" y="70" width="60" height="40" rx="8" />
        <rect x="14" y="80" width="60" height="55" rx="8" /><rect x="140" y="140" width="50" height="40" rx="8" />
      </g>
      <g transform="translate(222 92)">
        <circle r="26" fill="#A9697A" opacity=".18" />
        <path d="M0 14 C-18 -4 -18 -26 0 -26 C18 -26 18 -4 0 14Z" fill="#A9697A" />
        <circle cy="-12" r="5.5" fill="#F7F3EF" />
      </g>
    </svg>
  );
}

export default function HoursAndLocation() {
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;
  return (
    <section className="container-x section-y">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[32px] bg-platinum p-8 sm:p-10">
          <h2 className="font-display text-3xl">Çalışma saatleri</h2>
          <dl className="font-mono mt-8 space-y-4 text-[0.92rem]">
            {site.hours.map((h) => (
              <div key={h.day} className="flex items-baseline justify-between gap-4 border-b border-[var(--line)] pb-4 last:border-0">
                <dt>{h.day}</dt>
                <dd className={h.time === "Kapalı" ? "text-ink-soft" : ""}>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col rounded-[32px] bg-platinum p-8 sm:p-10">
          <h2 className="font-display text-3xl">Konum</h2>
          <p className="font-mono mt-4 text-[0.92rem]">{site.address}</p>
          <div className="mt-6 min-h-[160px] flex-1 overflow-hidden rounded-[20px]">
            <StylizedMap />
          </div>
          <div className="mt-6">
            <Button href={maps} variant="mocha">
              Yol Tarifi
            </Button>
          </div>
        </div>
      </div>

      <ul className="font-mono mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-2 rounded-[32px] bg-platinum px-8 py-4 text-[0.88rem] sm:rounded-full">
        <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex min-h-11 items-center gap-2 hover:text-rosewood"><PhoneIcon width={17} height={17} />{site.phone}</a></li>
        <li><a href={`mailto:${site.email}`} className="flex min-h-11 items-center gap-2 hover:text-rosewood"><MailIcon width={17} height={17} />{site.email}</a></li>
        <li><a href={site.social.instagram} className="flex min-h-11 items-center gap-2 hover:text-rosewood"><InstagramIcon width={17} height={17} />{site.instagram}</a></li>
      </ul>
    </section>
  );
}
