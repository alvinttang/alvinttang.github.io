# Design System — Alvin Tang Personal Homepage

## Product Context
- **What this is:** Personal homepage for Alvin Tang — founder identity + live systems portfolio (not a job-application template).
- **Who it's for:** Peers in AI infra / agent systems, collaborators, investors skimming for signal, curious visitors from GitHub or AlvinClub.
- **Space/industry:** Production AI systems, agent safety, infrastructure; peers mentally adjacent to Linear/Vercel-grade product craft and operator dashboards.
- **Project type:** Marketing / personal site with product-portal density (links to live surfaces).

## Aesthetic Direction
- **Direction:** Industrial / Utilitarian + intentional HUD decoration
- **Decoration level:** intentional (fine grid, 1px rules, status dots — no 3D, no purple gradients)
- **Mood:** Mission control / systems console — calm, precise, always-on. Feels like production ops, not a hacker movie or a generic AI landing page.
- **Reference landscape (research, not copy):**
  - Dark precision baseline: Linear, Vercel product marketing
  - Personal site risk: most “tech portfolios” converge on centered hero + 3 feature cards
  - Terminal portfolios: fun but often cosplay — we take *telemetry language*, not fake CRT cosplay
- **Canonical mode:** Dark-first. Light mode is a secondary adaptation for accessibility, not the brand.

## Typography
- **Display/Hero:** Syne (600–800) — geometric, memorable, not Inter-pipeline
- **Body:** IBM Plex Sans (400–600) — engineered readability, professional without SaaS blandness
- **UI/Labels:** IBM Plex Sans Medium
- **Data/Tables:** JetBrains Mono (tabular-nums) — status bars, tables, paths, timestamps
- **Code:** JetBrains Mono
- **Loading:** Google Fonts (or self-host later):
  - `Syne`, `IBM Plex Sans`, `JetBrains Mono`
- **Scale (rem @ 16px root):**
  | Token | Size | Use |
  |-------|------|-----|
  | display-xl | clamp(2.4rem, 6vw, 4rem) | Hero |
  | display-lg | 1.5–1.75rem | Section titles |
  | body-lg | 1.125rem | Tagline |
  | body | 0.9375–1rem | Prose |
  | mono-sm | 0.6875–0.75rem | Sysbar, badges, labels |
  | mono | 0.8125rem | Tables, code samples |

## Color
- **Approach:** restrained (one live accent + one warn accent + cool neutrals)
- **Primary (Signal Cyan):** `#3DFFC8` — live, online, primary CTA fill, healthy status
- **Secondary (Amber):** `#FFB020` — in-progress, degraded, secondary emphasis
- **Fault:** `#FF5C7A` — error states only
- **Neutrals (dark canonical):**
  - Void bg `#05070A`
  - Surface `#0B0F14`
  - Surface-2 `#111820`
  - Border `#1A2332`
  - Border strong `#2A3A52`
  - Text `#E8EEF7`
  - Muted `#8B9BB4`
  - Faint `#5A6A82`
- **Semantic:** success = Signal Cyan; warning = Amber; error = Fault; info = cyan-dim surface
- **Dark mode:** default. Light mode: invert surfaces to `#F4F6F9` / white, deepen cyan to `#0B9B78` for contrast, keep structure identical.
- **Hard no:** default purple/violet gradients, rainbow glassmorphism, neon rainbow cyberpunk overload

## Spacing
- **Base unit:** 8px
- **Density:** comfortable-compact (product-site density, not magazine airy)
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64)

## Layout
- **Approach:** hybrid — editorial hero (identity + command meta) + grid-disciplined projects / writing
- **Grid:** 12-col conceptual; project cards auto-fill min ~280px
- **Max content width:** ~1120px
- **Border radius:** sm 4px · md 8px · lg 12px · pill 9999px (badges only)
- **Signature chrome:** sticky **sysbar** (SYS / NODE / REGION / LATENCY) + monospaced identity meta under hero

## Motion
- **Approach:** intentional
- **Easing:** enter ease-out · exit ease-in · move ease-in-out
- **Duration:** micro 50–100ms · short 150–250ms · medium 250–400ms · long 400–700ms (rare)
- **Allowed:** status-dot pulse, short fade/slide-in of sections, hover lift 2px on cards, focus rings
- **Forbidden by default:** scroll-jacking, heavy parallax, long hero video loops, particle storms

## Content architecture (homepage sections)
1. **Sysbar** — always-on system chrome
2. **Hero** — one line claim + founder meta + 2–3 CTAs (AlvinClub, GitHub, Live systems)
3. **Selected systems** — **exactly four** project cards (do not expand without approval):

| Project | Product name | One-line | Primary link (example) |
|---------|--------------|----------|------------------------|
| 1 | **Cortex Memory** | On-device memory engine for AI agents — private, local, MCP | GitHub / browser demo |
| 2 | **Universal Message Hub** | unified-channel — IM, Email, Voice, Calendar, IoT in one embeddable API | GitHub / docs |
| 3 | **Piano · 小琴童** | On-device piano transcription + AI coach for kids/parents | `https://bp.alvinclub.xyz/piano/` |
| 4 | **Chess · 星际棋手** | Kid-friendly AI chess coach, space-themed progression | `https://bp.alvinclub.xyz/chess/` |

4. **Writing / notes** (optional v1) — short list, mono dates
5. **Footer** — contact / colophon / region

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-15 | Initial design system | /design-consultation: Industrial HUD personal site for production-AI founder; research of dark tech + personal portfolio landscape; SAFE/RISK package approved by user; preview generated |
| 2026-07-15 | Dark-first, cyan+amber accents | Signal “live systems” without purple AI-slop; amber for ops-warn vocabulary |
| 2026-07-15 | Syne + IBM Plex Sans + JetBrains Mono | Distinct display, engineered body, operator mono co-equal |
| 2026-07-15 | No photo hero (v1 risk) | Prefer systems identity over soft personal branding ad |
| 2026-07-15 | Projects = piano, chess, cortex, universal hub only | User scope: expose only these four systems on the homepage |
| 2026-07-15 | Canonical product names | Cortex Memory · Universal Message Hub · Piano · Chess |
| 2026-07-15 | Style approved; no other public projects | User confirmed aesthetic OK; non-listed systems stay private |
