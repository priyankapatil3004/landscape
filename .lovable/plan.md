# Omkar Landscape — Premium Website + Admin Dashboard

A production-grade, SEO/GEO-optimized landscape design website with a full content-management dashboard. No pricing anywhere. Uploaded logo used across brand surfaces.

## 1. Brand & Design System

- **Logo**: uploaded PNG used as-is in header, footer, admin, and as favicon/apple-touch-icon (auto-generated 32/180/512 versions).
- **Palette** (premium, nature-inspired, no purple):
  - Deep Forest `#1F4A2C` (primary, matches logo)
  - Moss `#3E7A45`
  - Sage Cream `#F5F1E8` (background)
  - Warm Ivory `#FBFAF6`
  - Charcoal `#1A1F1B` (text)
  - Gold accent `#B08D3C` (subtle premium touch)
- **Typography**: Cormorant Garamond (display, serif — matches logo) + Inter (body).
- Generous whitespace, editorial hero, magazine-style project grid, soft shadows, subtle motion.
- Fully responsive (mobile-first, tested 360→1920px).

## 2. Public Site Pages

- `/` Home — hero, services teaser, featured projects, about snippet, testimonials, CTA
- `/about` — story, founder, values, process
- `/services` — 8 services (Landscape Design, Garden Development, Lawn Development, Terrace Garden, Farmhouse Landscaping, Commercial Maintenance, Plant Supply, Other/Consultation)
- `/portfolio` — project grid + detail pages
- `/gallery` — filterable image gallery
- `/contact` — lead form + business info + map
- Sitemap.xml, robots.txt, JSON-LD (LocalBusiness + Service), per-route meta/OG/Twitter, canonical, alt-text on every image.
- **No pricing, no packages, no budget field anywhere.**

## 3. Contact / Lead Form

Fields: Full Name, Mobile, WhatsApp, Email, Location, Service Required (dropdown of 8), Message, Reference Image (optional upload), Submit → "Send Enquiry".
On submit:
1. Insert lead row (with `source_page`, `created_at`, `status='New'`).
2. Trigger email to omkar@omkarlandscape.com (subject: "New Website Enquiry from Omkar Landscape Website").
3. Trigger WhatsApp notification to `8767952504` via configured webhook; if not configured, dashboard shows "Send WhatsApp" button that opens `wa.me` pre-filled.
4. Show editable success message.

## 4. Admin Dashboard (`/admin`, auth-gated)

- **Auth**: Lovable Cloud email/password, `admin` role via `user_roles` table + `has_role()` RPC.
- **Leads**: table with filter/search, status pipeline (New, Contacted, Site Visit Scheduled, Quotation Sent, Converted, Closed), detail view, "Send WhatsApp" fallback button, export CSV.
- **Content editors** (all editable, live on site):
  - Site settings (brand text, contact info, social)
  - Hero, About, Founder sections (text + image + alt)
  - Services (list, icon, description, image, alt, order, show/hide)
  - Projects/Portfolio (title, category, description, images, alt, order, show/hide)
  - Gallery (upload, title, category, alt, caption, order, show/hide, edit, delete)
  - Testimonials
  - Footer/brand images
  - SEO settings per page (title, description, OG image + alt, keywords)
- **Every image upload** everywhere includes: file, title, category, alt text, optional caption, display order, show/hide, edit, delete.
- **Notification settings**: lead notification email, WhatsApp number, enable/disable email, enable/disable WhatsApp, WhatsApp webhook URL, email provider settings, success message text, privacy consent text.

## 5. Backend (Lovable Cloud)

Tables (all with RLS + GRANTs):
- `profiles`, `user_roles` (enum: admin, editor)
- `site_settings` (singleton JSON per key)
- `sections` (hero/about/founder text blocks)
- `services`, `projects`, `project_images`, `gallery_images`, `testimonials`, `seo_meta`
- `leads` (all form fields + status + source_page + timestamps + optional reference image URL)
- `notification_settings` (singleton)
- Storage buckets: `site-images` (public read), `lead-uploads` (private)

Server functions:
- `submitLead` (public) — validates via zod, inserts lead, calls notifier
- `notifyLead` — sends email + WhatsApp per settings
- Admin CRUD via authenticated server fns

## 6. Notifications

- **Email**: Lovable Emails (built-in) — requires setting up email domain in a follow-up step; sends to `omkar@omkarlandscape.com`.
- **WhatsApp**: config-driven webhook (any provider — Twilio/Meta/Gallabox). Admin pastes webhook URL in settings. If empty → manual `wa.me/918767952504?text=...` fallback in dashboard.

## 7. SEO / GEO / LLM-friendly

- Semantic HTML, single H1 per page, descriptive alt on every image.
- Unique title <60ch + meta description <160ch per route.
- Canonical, OG, Twitter, JSON-LD LocalBusiness (address, phone, email, service area = India, geo coords editable in admin), Service schema per service, BreadcrumbList.
- Sitemap.xml with all public routes + dynamic projects; robots.txt allowing all.
- llms.txt with brand summary for LLM crawlers.
- Image lazy-loading, responsive `srcset`, preconnect to fonts.
- Fast (SSR via TanStack Start), accessible (WCAG AA contrast).

## 8. Footer

Full brand block + nav + contact + social + credit line: `Designed by [AnuRajya Technologies](https://anurajya.com/)`.

---

## Technical Notes

- Stack: TanStack Start + Tailwind v4 + shadcn (customized) + Lovable Cloud (Supabase) + Lovable Emails.
- Uploaded logo stored under `src/assets/omkar-logo.png`; favicons generated from it into `public/`.
- Design tokens defined in `src/styles.css` as oklch semantic tokens; components use tokens only (no hardcoded colors).

## Build Sequencing

1. Enable Lovable Cloud, create schema + RLS + storage.
2. Design system + brand assets + favicons + logo import.
3. Public pages with seeded/default content pulled from DB (fallback to defaults).
4. Lead form + `submitLead` server fn + email via Lovable Emails + WhatsApp webhook.
5. Admin auth + dashboard (leads, content, media, settings).
6. SEO polish: sitemap, robots, JSON-LD, llms.txt, per-route meta.
7. Verify responsive + Lighthouse-style pass.

## Open Confirmations

1. **Email sending**: OK to use built-in Lovable Emails? (You'll be prompted once to verify sender domain `omkarlandscape.com` — DNS records provided.)
2. **WhatsApp provider**: use webhook-based integration (you paste URL from Twilio/Gallabox/Meta later)? Manual `wa.me` fallback always available.
3. **Admin login**: create first admin via signup + I'll seed the `admin` role for the first registered user; OK?
4. Any city/region focus for local SEO (e.g., Pune, Mumbai)? Needed for LocalBusiness schema `addressLocality`.

Approve and I'll start building.
