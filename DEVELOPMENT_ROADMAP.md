# DEVELOPMENT ROADMAP

## Project Goal

Build a premium, high-performance tourism website for Egyptian Tour Guide - Merna & Rania that provides an excellent user experience, ranks well in search engines, and converts visitors into customers.

---

# Development Workflow

The AI should always follow this order:

1. Analyze
2. Plan
3. Explain
4. Wait for approval
5. Implement
6. Test
7. Update AI_HANDOFF.md

---

# Phase 1 — Full Project Analysis

Status: ✅ Complete (Session 1)

Tasks:
- [x] Read the entire project.
- [x] Understand the folder structure.
- [x] List every page.
- [x] Understand the navigation.
- [x] Review CSS architecture.
- [x] Review JavaScript.
- [x] Detect bugs.
- [x] Detect duplicated code.
- [x] Detect missing pages.
- [x] Detect responsive issues.
- [x] Review accessibility.
- [x] Review SEO.
- [x] Review performance.

Full findings are recorded in AI_HANDOFF.md under "Known Bugs" and referenced throughout the phases below.

---

# Phase 2 — Bug Fixes

Status: ⏳ Pending approval

These are isolated, low-risk, high-value fixes — none require touching shared layout or design.

**High priority:**
- [x] Fix broken image references on `post-safety-tips.html` (`Nile-felluca.webp` → `Nile-Felluca.webp`; `Fatoum1 (1).webp` → `Fayoum1 (1).webp`). (Completed Session 2.)
- [x] Fix incorrect canonical URLs and matching JSON-LD `url` fields on `itinerary-10-days.html` and `itinerary-nile-cruise.html` so they point to themselves, not nonexistent pages. (Completed Session 3.)
- [x] Add the Google Analytics (`gtag.js`) snippet to `about.html`, `egypt-tour-reviews.html`, and `process-policies.html` so those pages are tracked. (Completed Session 4.)
- [x] Replace the full-resolution `slide1.jpg`/`slide3.jpg` hero backgrounds on `egypt-tour-reviews.html` and `process-policies.html` with the existing `slide1.webp`/`slide3.webp` (same image, ~19x smaller). (Completed Session 5.)
- [x] Add a favicon (`<link rel="icon">`) to all 36 real pages. (Completed Session 6; `apple-touch-icon.png` generated in Session 17 / P3 — approved and completed locally.)

**Medium priority:**
- [x] Trim `giza-pyramids-quad-bike-tour.html`'s meta description from 236 to under ~160 characters; tighten the ~11 other pages that are modestly over. (Completed Session 9 — all 20 pages over 160 chars shortened.)
- [x] Standardize the floating WhatsApp CTA button (`.wa-float`) across all 36 real pages: added missing `.wa-float` to `giza-gem.html`, `luxor-east-bank-tour.html`, and `luxor-west-bank-tour.html`, and standardized `aria-label="Contact us on WhatsApp"` on `<a>` with decorative `alt="" aria-hidden="true"` on `<img>` across all 36 pages. (Completed Session 16 / P2.)
- [x] Standardize the homepage link URL site-wide (`https://mmernaguide.info/` with trailing slash — implemented on all 6 blog posts in Session 17 / P3, approved and completed locally).

---

# Completed Local / Review-Branch Final Completion Phases

- **P3:** UI/UX polish, 404, Apple Touch Icon. *(Uploaded to `p3-p4-review` at `b1f7e60`; not merged to `main`.)*
- **P4:** Performance, image optimization, mobile Safari hero fixes. *(Uploaded to `p3-p4-review` at `b1f7e60`; not merged to `main`.)*
- **P5:** Metadata, schema accuracy, copied keywords, and itinerary content corrections, including the 31 OG title mismatches, `post-fayoum-safari.html` JSON-LD URL encoding, Luxor keywords, and `itinerary-3-days.html` / `itinerary-8-days.html` fixes. *(Uploaded to `p3-p4-review` at `caf598a`; not merged to `main`.)*
- **P6:** Site-wide navigation unification — standardized all 23 non-standard `<ul class="nav-menu">` pages to the 7-link Pattern 1 with single-line desktop CSS (`gap: 30px`, `font-size: 0.75rem; white-space: nowrap;`) and fixed logo trailing slash on all 6 `post-*.html` pages. *(Uploaded to `p3-p4-review` at `d7a53c4`; not merged to `main`.)*
- **P7:** Itinerary content de-templatization — rewrote all 8 itinerary pages (`itineraries.html` + 7 detail pages) with distinct, Egyptologist-voiced copy, resolved 8-day/10-day/12-day factual & pacing contradictions, preserved 3-day/4-tour airport-transfer commitments, and synchronized `FAQPage` JSON-LD with visible FAQs. *(Uploaded to `p3-p4-review` at `2e8b92b`; not merged to `main`.)*
- **P8:** Clean URL migration — migrated all 35 non-home real pages to `/<slug>/index.html` (normalizing `Blogs.html` → `/blogs/`), updated internal links, canonicals, `og:url`, JSON-LD URLs, `404.html`, and `sitemap_index.xml` (`36` clean URLs), converted relative assets on moved pages to root-relative paths, and replaced all 36 legacy redirect stubs (the 35 root `.html` files + `process & policies.html`) with GitHub Pages-compatible client-side redirect stubs using `noindex, follow`, immediate meta refresh, JavaScript `location.replace()`, and a visible fallback link (no `rel="canonical"` on the stubs; client-side redirects, NOT HTTP 301 redirects). *(Implemented locally and awaiting review; not uploaded, merged, or deployed.)*

# Remaining Final Completion Phases (P9)

- **P9:** Repository and asset housekeeping.

---

# Phase 3 — UI / UX Improvements

Status: ⏳ Pending approval

- [ ] **Unify site navigation.** Currently there are 5 different nav-menu variants; itinerary pages and `transportation.html` (9 pages) are missing links to About, Tours, Reviews, and the Travel Guide, and the 12 tour-detail pages are missing Booking Process, Reviews, and Travel Guide. Recommend converging on the 7-link nav already used on the core pages (Home / About / Tours / Booking Process / Reviews / Contact / Travel Guide) everywhere.
- [ ] Standardize responsive breakpoints (currently 768px / 992px / 1024px / 1100px are all used inconsistently across pages) to a single shared set.
- [ ] Reconsider `background-attachment: fixed` on hero sections (used on 4+ pages) — replace with a scroll-safe alternative to avoid known mobile Safari jank.
- [ ] Evaluate adding a lead-capture contact form as an alternative to WhatsApp/phone/email-only outreach on `contact.html` (see Phase 6).

---

# Phase 4 — Performance Optimization

Status: ⏳ Pending approval

- [ ] Ship the Phase 2 hero-image fix (slide1/slide3 jpg→webp) — this is the single biggest live-page performance win available.
- [ ] Housekeeping: remove the 86 unused image files (54 MB) sitting in the repo but never referenced by any page, to shrink repo/deploy size.
- [ ] Decide the fate of the orphaned `style.css`, `reviews.css`, `script.js`, `reviews.js`, `reviews-data.json` — either delete them (if the plan is to keep per-page inline styles/scripts) or use this as the trigger to actually centralize shared CSS/JS across all 38 pages (bigger effort, would also fix the Phase 3 breakpoint/nav drift issues as a side effect — worth discussing before choosing a direction).
- [ ] Spot-check remaining large images (several other unused files are 3–7 MB) in case any of them get reused later — re-export at web-appropriate sizes first.

---

# Phase 5 — SEO Optimization

Status: ⏳ Pending approval

Baseline is already solid (every page has a unique title, description, single H1, and — with the 2 exceptions fixed in Phase 2 — a correct canonical). Remaining opportunities:

- [ ] Tighten oversized meta descriptions (see Phase 2).
- [ ] Confirm `sitemap_index.xml` stays in sync as pages are added/removed (it currently lists 33 of the 36 real pages — worth a pass to confirm nothing is missing after Phase 2/3 changes).
- [ ] Review internal linking once navigation is unified in Phase 3 — a consistent nav will also improve crawlability and link equity flow between page families.
- [ ] Consider adding `Review`/`AggregateRating` structured data specifically to `egypt-tour-reviews.html` once its analytics tag is restored, to support rich results.

---

# Phase 6 — New Features

Status: ⏳ Pending approval — to be prioritized with client

- [ ] Lead-capture contact form (in addition to existing WhatsApp/phone/email links) on `contact.html`.
- [ ] Decide on a long-term CSS/JS strategy: keep the current self-contained-page pattern (simple, no build step, but duplicated) vs. centralize into shared files (less duplication, easier maintenance, but requires a build/include step or a static-site generator).
- [ ] Any other feature requests from the client to be added here.

---

# Phase 7 — Final Review

Status: ⏳ Pending

Tasks:
- Full code review.
- Full responsive review.
- Full SEO review.
- Performance review.
- Final testing.
- Production readiness checklist.

---

# Progress Log

## 2026-08-01 — Session 1

**Completed tasks:**
- Full Phase 1 project analysis (architecture, all 38 pages, navigation, SEO, accessibility, performance, code quality, duplication, security).
- Updated AI_HANDOFF.md with complete findings.
- Updated this roadmap with a prioritized Phase 2–6 backlog derived from the audit.

**Remaining tasks:**
- Client approval on Phase 2 priority order (recommended: start with the 5 high-priority bugs, since they're isolated and low-risk).
- Client decision needed on the Phase 4/6 architectural question: keep per-page inline CSS/JS, or centralize.

**Next priority:**
Await client approval, then implement Phase 2 high-priority fixes one at a time, explaining each change before making it, per PROJECT_RULES.md.
