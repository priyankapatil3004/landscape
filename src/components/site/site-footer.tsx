import { BRAND } from "@/lib/site-content";
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const SOCIALS = [
  { href: BRAND.socials.instagram, label: "Instagram", Icon: Instagram },
  { href: BRAND.socials.facebook, label: "Facebook", Icon: Facebook },
  { href: BRAND.socials.youtube, label: "YouTube", Icon: Youtube },
  { href: BRAND.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: BRAND.socials.twitter, label: "X", Icon: XIcon },
  { href: BRAND.socials.whatsapp, label: "WhatsApp", Icon: MessageCircle },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-forest text-forest-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 40% at 15% 0%, rgba(176,141,60,0.16), transparent 60%), radial-gradient(50% 40% at 85% 100%, rgba(255,255,255,0.06), transparent 60%)",
        }}
      />
      <div className="container-x relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white p-1.5 ring-1 ring-white/20">
                <img src="/apple-touch-icon.png" alt="Omkar Landscape" className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="font-display text-2xl tracking-tight">Omkar Landscape</p>
                <p className="text-[0.65rem] tracking-[0.28em] text-forest-foreground/70 uppercase">
                  Pune · Since 2014
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-forest-foreground/80">
              Bespoke landscape design, garden development and long-term care for
              residences, farmhouses and commercial estates across India.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-forest-foreground/25 bg-forest-foreground/5 text-forest-foreground/90 transition-all hover:-translate-y-0.5 hover:border-forest-foreground/50 hover:bg-forest-foreground/15"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-semibold tracking-[0.24em] uppercase text-forest-foreground/70">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#nursery", label: "Our Plant Source" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#gallery", label: "Gallery" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-forest-foreground/85 transition hover:text-forest-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-semibold tracking-[0.24em] uppercase text-forest-foreground/70">
              Reach us
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4" />
                <a href={`mailto:${BRAND.email}`} className="hover:underline">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4" />
                <a href={`tel:+${BRAND.whatsapp}`} className="hover:underline">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="leading-snug">{BRAND.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-forest-foreground/15 pt-6 text-xs text-forest-foreground/70 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Omkar Landscape. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href={BRAND.credit.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-forest-foreground underline-offset-2 hover:underline"
            >
              {BRAND.credit.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.828l-5.36-6.98L4.6 22H1.34l8.02-9.164L1 2h6.914l4.84 6.4L18.244 2Zm-2.394 18h1.82L7.24 4H5.29l10.56 16Z" />
    </svg>
  );
}
