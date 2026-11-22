# CLAUDE.md — Egyptian Tour Guide – Merna & Rania

Guidance for Claude Code in this repository. This repo is PUBLIC: never add
customer data, quotations, credentials, secrets, or private business details.
Claude Code has NO access to the Claude.ai Project knowledge base or memory;
only what is in this repo or provided by the owner in the session is known.

### Exception — Owner-Approved Nile Felucca Guest Photographs
The repository is public, and customer privacy must remain protected.
The business owner has explicitly confirmed publication consent from all
identifiable guests appearing in the following four photographs. These specific
photographs are approved for use on `nile-felucca-ride/`:
- `cairo-nile-boat-tour-guests.webp`
- `nile-felucca-deck-mast-rigging.webp`
- `nile-boat-guest-seated-on-deck.webp`
- `two-women-smiling-nile-boat-ride-egypt.webp`

Conditions:
- Use only these authentic owner-approved image files within this exception.
- Preserve the actual photographic content.
- Do not invent guest names, relationships, nationalities or identities.
- Do not disclose private customer information.
- Do not publish booking records, private communications, phone numbers or
  email addresses.
- Remove any unnecessary sensitive metadata before public publication, without
  modifying the visible photograph.
- Do not extend this permission to other customer photographs or other pages
  without separate authorization.
- Preserve all other repository safety rules.

This exception documents the owner's confirmation of guest consent. It does not
authorize unrelated use of personal information.

### Exception — Owner-Approved Khan El Khalili Guest Photographs
The business owner has explicitly confirmed publication consent from all
identifiable guests appearing in the following four photographs. These specific
photographs are approved for use only on `khan-el-khalili-bazaar-tour/`:
- `khan-el-khalili-lantern-lit-evening-tour-group.webp`
- `khan-el-khalili-night-market-tour-group.webp`
- `khan-el-khalili-cafe-tour-group.webp`
- `islamic-cairo-mosque-minarets-tour-guest.webp`

The same conditions listed under the Nile Felucca exception apply. Do not
publish guest names, nationalities, private contact information or booking
records, and do not extend this permission to other images, pages or customer
information without separate authorization.

## 1. Project identity
- Business: Egyptian Tour Guide – Merna & Rania (private guided tours in Egypt).
- Website: https://mmernaguide.info/
- Repository: https://github.com/M-MernaTours/MeRania-Guides (default branch `main`).

## 2. Architecture & hosting (verified Nov 2026 — recheck when relevant)
- Static HTML site. No framework, no build step, no package manager.
- Pages are self-contained (inline `<style>`/`<script>`); no shared CSS/JS file.
  Do not introduce one without approval.
- Main content pages live at `/<slug>/index.html` (trailing-slash clean URLs).
  Many root `<slug>.html` files are client-side redirect stubs, but not all
  root `.html` files are stubs: inspect a file's contents before classifying
  or editing it.
- Home: `/index.html`. Custom 404: `/404.html`.
- SEO/config: `CNAME`, `.nojekyll`, `robots.txt`, `sitemap_index.xml`,
  `googlef86a829b05d516d4.html` (Search Console verification — never edit/delete).
- Hosting: GitHub Pages was the last verified production host for
  `mmernaguide.info` (live server headers). Cloudflare Pages also exists but was
  not serving the custom domain at that check. Treat this as last-verified, not
  permanent; recheck when hosting matters.
- `_redirects` (Cloudflare format) gives NO HTTP 301s on GitHub Pages. The HTML
  redirect stubs are intentional — keep them.
- Images live in the repo root (mostly `.webp`). Do not assume GA4 tags or
  identical navigation exist on every page; check the page.
- Content merged to `main` is expected to publish. Treat `main` as production.

## 3. Communication & language
- Talk to the owner in Egyptian Arabic, brief and direct.
- All tourist-facing website content is in English; professional, warm tone.
- Code, comments, and commit messages: English.

## 4. Workflow (mandatory)
1. **Read-only audit first.** Inspect only files relevant to the task; verify
   claims with `grep`/`git` before stating them.
2. **Propose:** what, why, exact files, risks. Then STOP.
3. **Approval gate A — files:** no creating, editing, renaming, or deleting any
   file until the owner explicitly approves that specific change.
4. **Implement** exactly the approved scope, nothing extra.
5. **Verify** (see §7) and report results honestly, including failures.
6. **Approval gate B — Git/deploy:** staging, commits, pushes, PRs, merges, and
   deployments each need a SEPARATE explicit approval, even after file approval.
- Prefer a feature branch and a reviewed PR for publication. Never push to
  `main` automatically. (Any direct-to-main workflow is the owner's decision.)
- Never force-push, rewrite shared history, or discard existing work.
- Approval for one task does not carry over to the next. If unclear, ask.

## 5. Design & branding (preserve)
- Keep the existing visual identity: layout, colors, fonts, logo, navigation,
  floating WhatsApp button, footer. Match each page's existing patterns; don't
  redesign while fixing.
- Preserve the existing copyright year ©2025. Do not standardize copyright
  wording site-wide or add missing notices unless approved as a separate task;
  report inconsistencies instead (e.g. `alexandria-day-tour/index.html` has none).
- Never remove functionality or content without explaining why and getting approval.

## 6. Business information — accuracy rules
- Use only facts already on the site or explicitly confirmed by the owner in
  the current session.
- NEVER invent or guess: prices, discounts, durations, inclusions, booking,
  payment or cancellation policies, opening hours, ticket rules, museum or site
  facts, review counts or ratings, licenses, or guarantees ("best", "#1",
  "100% refund", etc.).
- Historical/museum content: only well-established facts; flag anything
  uncertain for owner verification instead of publishing it.
- Existing trust metrics on the site (e.g. 84 reviews, 300+ tours, 5.0 rating)
  are historical claims needing current verification before reuse or update.
  Do not delete or alter them without approval, and never present them as
  newly verified.
- Keep visible content, `<title>`, meta description, OG/Twitter tags, and
  JSON-LD (incl. `FAQPage`) consistent. No self-serving `aggregateRating`.

## 7. Quality requirements (every change)
- **SEO:** one `<h1>`; unique `<title>` and meta description (roughly ≤60 and
  ≤160 chars are guidelines, not hard limits); self-referencing canonical with
  trailing slash; matching `og:url`/JSON-LD URLs; descriptive `alt` text.
  Update `sitemap_index.xml` when pages are added, moved, or removed.
  Internal links use clean URLs.
- **Accessibility:** semantic HTML, keyboard-usable nav, `aria-*` where needed,
  sufficient contrast, decorative images `alt=""`.
- **Performance:** prefer `.webp`, explicit image dimensions,
  `loading="lazy" decoding="async"` below the fold, no heavy new JS/libraries.
- **Mobile:** check ~375px, 768px, 1024px, 1280px — no horizontal overflow,
  working hamburger menu, readable text (headless Chromium/Playwright if available).
- Check internal links and image paths after edits (paths are case-sensitive).

## 8. Existing documentation
- `PROJECT_RULES.md`, `DEVELOPMENT_ROADMAP.md`, `AI_HANDOFF.md`: useful history
  (Sessions 1–20, phases P1–P9) but partly OUTDATED (e.g. "not merged to main",
  deleted CSS/JS files, old counts, bugs already fixed; later work such as the
  homepage redesign and `/memphis-saqqara-dahshur/` is not recorded).
- Keep them unchanged unless the owner asks otherwise.
- Precedence: (1) owner's current instructions and confirmed decisions,
  (2) current repository files, (3) `git log`, (4) this file, (5) older docs.
- Read the long docs only when the task needs history; use targeted `grep`.

## 9. Reporting & efficiency
- Keep replies short: findings → proposal → files affected → STOP.
- Use targeted inspection (`grep`, `sed -n`); don't read the whole repo per task.
- Don't duplicate business knowledge here; ask the owner for missing facts.
- At task end: list changed files, what was verified, and what remains open.
