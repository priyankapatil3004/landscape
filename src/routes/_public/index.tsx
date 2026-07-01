import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Leaf,
  Sprout,
  Trees,
  Award,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Sparkles,
  Quote,
  CheckCircle2,
  Eye,
  ClipboardList,
  CheckCircle,
  Store,
  TreePine,
} from "lucide-react";
import { HERO_IMAGE, PROJECT_FALLBACKS, GALLERY_FALLBACKS } from "@/components/site/media";
import { BRAND, SERVICE_OPTIONS, SERVICES, PROCESS_STEPS, SAIRAJ_NURSERY } from "@/lib/site-content";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import founderPhoto from "@/assets/founder-omkar.jpg";

const waLink = (text: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;

const WA_PORTFOLIO = waLink(
  "Hi Omkar Landscape, I'd like to see your portfolio and recent projects.",
);
const WA_GENERAL = waLink(
  "Hi Omkar Landscape, I'd like to enquire about your landscaping services.",
);

export const Route = createFileRoute("/_public/")({
  head: () => ({
    meta: [
      { title: "Omkar Landscape — Premium Landscape Design & Garden Development in Pune" },
      {
        name: "description",
        content:
          "Bespoke landscape design, garden development, terrace gardens, plant supply and long-term care across Pune and Maharashtra. Crafted by Omkar Landscape.",
      },
      { property: "og:title", content: "Omkar Landscape — Premium Landscape Design" },
      {
        property: "og:description",
        content: "Bespoke landscape design and garden development based in Pune.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SOCIAL_BAR = [
  { href: BRAND.socials.instagram, label: "Instagram", Icon: Instagram },
  { href: BRAND.socials.facebook, label: "Facebook", Icon: Facebook },
  { href: BRAND.socials.youtube, label: "YouTube", Icon: Youtube },
  { href: BRAND.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: BRAND.socials.whatsapp, label: "WhatsApp", Icon: MessageCircle },
];

const TESTIMONIALS = [
  {
    quote:
      "Omkar and his team transformed our courtyard into a calm, living space. The attention to detail and choice of native plants is exceptional.",
    author: "Priya S.",
    location: "Baner, Pune",
  },
  {
    quote:
      "From concept sketch to the final handover, everything was thoughtful and on time. Our farmhouse garden looks better every season.",
    author: "Rohan M.",
    location: "Mulshi",
  },
  {
    quote:
      "A rare team that truly cares about long-term care. Two years on, our terrace garden is still thriving.",
    author: "Kavita & Nikhil",
    location: "Wakad, Pune",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative overflow-hidden hero-glow">
        <div className="container-x grid gap-10 pt-14 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-20 lg:pb-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3.5 py-1.5 text-[11px] font-medium tracking-[0.16em] text-primary uppercase backdrop-blur">
              <Sparkles className="h-3 w-3" />
              Premium landscape design · Pune
            </span>
            <h1 className="mt-6 font-display font-medium leading-[1.02] tracking-tight text-primary">
              Gardens that breathe with your home.
              <span className="ml-3 gold-text">Crafted with care.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
              From the first sketch to the last stone, we shape gardens that grow into
              the character of your space — considered, calm and enduring.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="gloss-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:gloss-btn-hover"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={WA_PORTFOLIO}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/60 px-6 py-3 text-sm font-medium text-primary backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                <MessageCircle className="h-4 w-4" />
                Explore portfolio
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-[0.7rem] font-medium tracking-[0.24em] text-muted-foreground uppercase">
                Follow
              </span>
              <div className="h-px flex-1 max-w-8 bg-border" />
              {SOCIAL_BAR.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(31,74,44,0.25), transparent 70%)",
              }}
            />
            <div className="relative overflow-hidden rounded-[1.75rem] gloss-card">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] m-1.5">
                <img
                  src={HERO_IMAGE}
                  alt="Landscaped garden with lush trees and a stone path"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 max-w-[190px] rounded-2xl gloss-card p-4">
                <Leaf className="h-5 w-5 text-primary" />
                <p className="mt-2 text-[13px] font-semibold text-foreground">Site-led, hand-planted</p>
                <p className="text-[11px] leading-snug text-muted-foreground">
                  Supervised on the ground by our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-y bg-background">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">About Omkar Landscape</p>
            <h2 className="mt-4 font-display">A Pune team shaping calm, living gardens</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Based in Wakad, Pune, Omkar Landscape designs, builds and cares for gardens
              across homes, farmhouses and commercial spaces. We keep things simple — the
              right plants, honest materials, and a team that shows up on site until every
              corner feels right.
            </p>
          </div>

          <ul className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Trees, label: "Site-first design" },
              { icon: Leaf, label: "Native plant palettes" },
              { icon: Award, label: "In-house build teams" },
              { icon: Sprout, label: "Long-term care" },
            ].map((v) => (
              <li
                key={v.label}
                className="flex items-center gap-3 rounded-2xl gloss-card px-4 py-3 text-sm transition hover:-translate-y-0.5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                  <v.icon className="h-4 w-4" />
                </span>
                <span className="font-medium">{v.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>



      {/* PROCESS */}
      <section id="process" className="section-y bg-cream">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Process</p>
            <h2 className="mt-4 font-display">
              How We Plan & Execute <span className="gold-text">Your Landscape Project</span>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              At Omkar Landscape, every project starts with understanding the space, site
              condition and client requirement. From the first visit to final finishing,
              we follow a clear and practical process to deliver beautiful, long-lasting
              green spaces.
            </p>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = [Eye, ClipboardList, CheckCircle][i] ?? Sprout;
              return (
                <li
                  key={step.number}
                  className="group relative flex flex-col rounded-2xl gloss-card p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-5 top-5 font-display text-5xl leading-none gold-text opacity-70"
                  >
                    {step.number}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl leading-tight text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-y bg-background">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What We Deliver</p>
            <h2 className="mt-4 font-display">Our Landscaping Services</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Omkar Landscape provides professional landscaping, plantation, lawn
              installation and garden development services for residential, commercial,
              industrial and farmhouse projects across Pune.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.filter((s) => s.visible)
              .slice()
              .sort((a, b) => a.order - b.order)
              .map((s) => (
                <article
                  key={s.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl gloss-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative m-1.5 aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-3">
                    <h3 className="font-display text-[1.3rem] leading-tight text-primary">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <a
                      href={waLink(`Hi Omkar Landscape, I'd like to enquire about ${s.title}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/25 bg-white/70 px-4 py-2 text-xs font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                    >
                      Enquire on WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              ))}
          </div>

          {/* Founder signature */}
          <div className="mt-14 flex justify-center">
            <div className="flex flex-col items-center gap-1 rounded-full gloss-card px-7 py-4 text-center">
              <span className="text-[0.65rem] font-medium tracking-[0.28em] uppercase gold-text">
                Founder
              </span>
              <p className="font-display text-lg leading-tight text-primary">
                {BRAND.founder.name}
              </p>
              <p className="text-xs text-muted-foreground">Omkar Landscape, Pune</p>
            </div>
          </div>
        </div>
      </section>


      {/* PORTFOLIO */}
      <section id="portfolio" className="section-y bg-cream">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 font-display">Recent gardens</h2>
            </div>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire on WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECT_FALLBACKS.slice(0, 6).map((p, i) => (
              <article
                key={p.slug ?? i}
                className="group overflow-hidden rounded-2xl gloss-card transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="m-1.5 aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                  <img
                    src={p.cover_image_url!}
                    alt={p.cover_image_alt ?? p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 pt-3">
                  <p className="text-[10px] font-medium tracking-[0.22em] text-muted-foreground uppercase">
                    {p.category ?? "Landscape"}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl leading-tight">{p.title}</h3>
                  {p.location && (
                    <p className="mt-1 text-xs text-muted-foreground">{p.location}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section-y bg-background">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-4 font-display">Moments from our gardens</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {GALLERY_FALLBACKS.slice(0, 8).map((src, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-2xl gloss-card"
              >
                <img
                  src={src}
                  alt={`Omkar Landscape gallery image ${i + 1}`}
                  loading="lazy"
                  className="m-1.5 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] rounded-[1rem] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y bg-cream">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">In their words</p>
            <h2 className="mt-4 font-display">Clients who live in our gardens</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.author} className="rounded-2xl gloss-card p-7 transition hover:-translate-y-1">
                <Quote className="h-5 w-5 text-primary/60" />
                <blockquote className="mt-3 font-display text-lg leading-snug text-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-muted-foreground">{t.location}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PLANT SOURCE */}
      <section id="nursery" className="section-y bg-cream">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Sairaj Nursery</p>
            <h2 className="mt-4 font-display">
              Our Plant Source
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {SAIRAJ_NURSERY.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {SAIRAJ_NURSERY.locations.map((loc) => (
              <article
                key={loc.name}
                className="group flex flex-col rounded-2xl gloss-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition group-hover:scale-110">
                    <Store className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-primary">{loc.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{loc.description}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-1 flex-col justify-between gap-5">
                  <div className="flex items-start gap-3 rounded-xl bg-white/60 p-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-foreground/90">{loc.address}</p>
                  </div>

                  <ul className="grid grid-cols-2 gap-2">
                    {loc.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <TreePine className="h-3.5 w-3.5 text-primary/70" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/25 bg-white/70 px-4 py-2 text-xs font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                  >
                    Get directions <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl gloss-card p-6 text-center sm:flex-row sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                <Leaf className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-display text-lg leading-tight text-primary">Plants ready for your project</p>
                <p className="text-xs text-muted-foreground">Walk in, pick plants, or schedule a site visit.</p>
              </div>
            </div>
            <a
              href={waLink(
                "Hi Sairaj Nursery, I'd like to visit your nursery and explore plants for my project.",
              )}
              target="_blank"
              rel="noreferrer"
              className="gloss-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:gloss-btn-hover"
            >
              <MessageCircle className="h-4 w-4" />
              Visit nursery on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="section-y bg-background">

        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Meet the Founder</p>
            <h2 className="mt-4 font-display">
              {BRAND.founder.name}
              <span className="ml-2 gold-text block sm:inline">
                — {BRAND.founder.yearsExperience} years in the industry
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="order-1 mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:order-1 lg:max-w-none">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-[2rem] opacity-60 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 40% 40%, rgba(176,141,60,0.25), transparent 70%)",
                  }}
                />
                <div className="overflow-hidden rounded-[1.5rem] gloss-card">
                  <div className="aspect-[4/5] overflow-hidden rounded-[1.35rem] m-1.5">
                    <img
                      src={founderPhoto}
                      alt={`${BRAND.founder.name}, ${BRAND.founder.role} of Omkar Landscape`}
                      width={832}
                      height={1024}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-2">
              <p className="leading-relaxed text-muted-foreground">
                {BRAND.founder.bio}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                What began as a passion for green spaces has grown into a full-service
                landscape practice trusted by homeowners, farmhouse builders and commercial
                developers across Pune. Omkar personally walks every site, sketches every
                layout and stays involved through planting, handover and long-term care.
              </p>

              <div className="mt-7 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl gloss-card p-4 sm:flex sm:flex-wrap">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full ring-1 ring-primary/15">
                    <img
                      src={founderPhoto}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-display text-lg leading-tight text-foreground">
                      {BRAND.founder.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {BRAND.founder.role}
                    </p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="shrink-0 inline-flex items-center gap-1 rounded-full border border-primary/25 bg-white/70 px-4 py-2 text-xs font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-white sm:ml-auto"
                >
                  Work with Omkar <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}

/* --------------------------------- Contact --------------------------------- */

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("full_name") ?? "");
    const email = String(fd.get("email") ?? "");
    const mobile = String(fd.get("mobile") ?? "");
    const location = String(fd.get("location") ?? "");
    const service = String(fd.get("service_required") ?? "");
    const message = String(fd.get("message") ?? "");

    const lines = [
      `Hi Omkar Landscape,`,
      ``,
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `Email: ${email}`,
      location && `Location: ${location}`,
      service && `Service: ${service}`,
      message && ``,
      message && `${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Open WhatsApp in a new tab AND prepare a mailto — no backend required.
    const wa = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(lines)}`;
    window.open(wa, "_blank", "noopener,noreferrer");
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      `New enquiry — ${name}`,
    )}&body=${encodeURIComponent(lines)}`;

    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="section-y bg-background">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-4 font-display">Tell us about your space</h2>
          <p className="mt-4 text-muted-foreground">
            Share a few details — we'll respond over WhatsApp or email within one working day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl gloss-card p-6 md:p-9">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl">Almost there</h3>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Your WhatsApp and email should have opened with your message pre-filled.
                  Hit send and we'll get right back to you.
                </p>
                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/70 px-5 py-2.5 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-white"
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name">
                    <Input name="full_name" required placeholder="Your name" />
                  </Field>
                  <Field label="Email">
                    <Input name="email" type="email" required placeholder="you@example.com" />
                  </Field>
                  <Field label="Mobile number">
                    <Input name="mobile" required placeholder="+91 " />
                  </Field>
                  <Field label="Location">
                    <Input name="location" placeholder="City / area" />
                  </Field>
                  <Field label="Service required">
                    <select
                      name="service_required"
                      className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                    >
                      <option value="">Select a service…</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Message" hint="Tell us about the space, timeline, or anything specific">
                  <Textarea name="message" rows={4} placeholder="Share a few details…" />
                </Field>
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted about your enquiry. We respect your privacy.
                </p>
                <button
                  type="submit"
                  className="gloss-btn inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
                >
                  Send Enquiry
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl gloss-card p-5">
              <h3 className="font-display text-lg">Contact</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href={`tel:+${BRAND.whatsapp}`}
                    className="group flex items-center gap-3 rounded-lg px-2 py-1.5 -mx-2 transition hover:bg-primary/5"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <span className="font-medium text-foreground group-hover:text-primary">
                      {BRAND.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="group flex items-center gap-3 rounded-lg px-2 py-1.5 -mx-2 transition hover:bg-primary/5"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-primary" />
                    <span className="truncate text-foreground group-hover:text-primary">
                      {BRAND.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-lg px-2 py-1.5 -mx-2 transition hover:bg-primary/5"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground group-hover:text-primary">WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-3 rounded-lg px-2 py-1.5 -mx-2 transition hover:bg-primary/5"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-snug text-muted-foreground group-hover:text-primary">
                      {BRAND.address}
                    </span>
                  </a>
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4">
                {SOCIAL_BAR.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-forest p-5 text-forest-foreground">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(60% 60% at 20% 0%, rgba(176,141,60,0.25), transparent 60%)",
                }}
              />
              <p className="relative eyebrow text-forest-foreground/80">Reply time</p>
              <p className="relative mt-3 font-display text-xl leading-tight">
                Within one working day.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
