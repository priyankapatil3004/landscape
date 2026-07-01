import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#nursery", label: "Our Plant Source" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-300",
        scrolled
          ? "border-primary/10 bg-white/70 shadow-[0_8px_30px_-16px_rgba(31,74,44,0.35)] backdrop-blur-xl backdrop-saturate-150"
          : "border-white/40 bg-white/50 backdrop-blur-lg backdrop-saturate-150",
      )}
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 100%)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
      />
      <div className="container-x flex h-[68px] items-center justify-between gap-4 md:h-[84px]">
        <Link
          to="/"
          hash="home"
          className="group flex items-center"
          onClick={() => setOpen(false)}
          aria-label="Omkar Landscape — Home"
        >
          <img
            src="/apple-touch-icon.png"
            alt="Omkar Landscape"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-full px-3.5 py-2 text-[13px] font-medium text-foreground/75 transition-colors hover:text-primary after:absolute after:bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gloss-btn ml-3 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg"
          >
            Start a project
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground ring-1 ring-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="gloss-btn mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
