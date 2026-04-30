
# HBS VIP Club — Landing Page Plan

A single premium, responsive landing page in Uzbek for the HBS VIP Club Telegram trading community. Dark fintech aesthetic with gold accents, subtle green highlights, glassmorphism, and soft glow.

## Design system

- Background: deep black + dark navy gradients (`#06080F` → `#0B1120`)
- Primary accent: gold (`#D4AF37` / warm gold gradient)
- Secondary accent: soft emerald green for "win/positive" highlights
- Glassmorphism cards: translucent surfaces, 1px gold/white border, blurred backdrop
- Soft glow: radial gold/green halos behind hero, pricing, founder card
- Typography: clean sans (Inter / system) — large bold headings, comfortable body
- All tokens defined as HSL CSS variables in `index.css` and exposed in `tailwind.config.ts`
- Smooth fade/scale-in on scroll, hover lift on cards, animated gold underline on CTAs

## Global layout

- **Sticky header**: HBS logo (placeholder) on left, nav anchors centered (Klub, Ichkarida, Natijalar, Narxlar, FAQ), UZ/RU language switcher + gold "VIP Clubga qo'shilish" button on right that smooth-scrolls to the Pricing section. Mobile: hamburger drawer.
- **Footer**: logo, short tagline, Telegram support link, bot link, social row, copyright. Uzbek copy.
- Smooth-scroll anchor navigation, scroll-reveal animations.
- Repeated gold CTA after Results, Pricing, Founder, and Final CTA sections.

## Sections

1. **Hero** — centered headline, subheadline, primary gold CTA "VIP Clubga qo'shilish" (→ pricing), secondary ghost CTA "Ichkarida nimalar bor?" (→ what-you-get). Trust badge row (4 chips). A wide laptop mockup with a Telegram VIP screenshot **placeholder** rises from the bottom of the hero, partially visible. Background: radial gold + green glow.

2. **VIP Club o'zi nima?** — 4 glass cards (icons: Lock, LineChart, Users, GraduationCap).

3. **VIP Club ichida nimalar bor?** — 9 premium feature cards in a responsive grid (icon + title + 1-line description). Each has a subtle gold top border on hover.

4. **Natijalar va real ko'rinish** — large gallery with mixed mockups: laptop + phone frames + floating glass cards holding screenshot placeholders. Carousel on mobile, masonry grid on desktop. Labels: "Signal natijalari", "Guruh ichidagi tahlillar", "Feedbacklar", "Real savdo misollari". **Plus**: a stylized "Telegram channel preview" widget mimicking Telegram's UI (avatar, channel name, sample pinned messages and reactions) for live feel.

5. **Bu klub kimlar uchun?** — 4 clean glass cards with avatar-style icons.

6. **Sizdan nima talab qilinadi?** — two side-by-side cards: red-tinted "talab qilinmaydi" with X icons, green-tinted "talab etiladi" with check icons.

7. **VIP Clubga qanday qo'shilish mumkin?** — vertical 4-step timeline with gold numbered nodes and connecting line. Note about Telegram bot + bot link `https://t.me/hbs_obuna_bot` as a button.

8. **Obuna narxlari** — two pricing cards (Monthly 49 000 so'm / Yearly 450 000 so'm). Yearly card highlighted with gold border + "Tejamkor" badge. Prominent **"Bepul sinov muddati"** gold/green badge floating on the section. Sub-text + CTA "Telegram bot orqali qo'shilish".

9. **Clubning asosiy qiymati — odamlar** — 4 mentor cards with circular photo placeholders, name, role, small Telegram link icon. Hover: gold ring + soft glow.

10. **HBS VIP Club asoschisi** — large hero-style founder card: big circular photo placeholder on left, name + 4 achievement badges (gold pill chips) on right. Background gradient with green/gold glow.

11. **FAQ** — accordion (shadcn Accordion) with the 5 questions, each with concise placeholder Uzbek answers ready to edit.

12. **Yakuniy CTA** — full-width band with gold gradient glow, headline + subtext + big gold button "VIP Clubga qo'shilish" (→ pricing).

## Language switcher

- UZ/RU toggle in header, persists choice in `localStorage`.
- All copy stored in a single `src/i18n/strings.ts` map. UZ filled in fully now; RU keys present with same Uzbek text as a placeholder so the toggle works and translations can be filled in later.

## Asset handling (placeholders for now)

- Telegram screenshots, mentor photos, founder photo, logo, charts, feedback → use clean themed placeholders:
  - SVG/CSS-rendered "Telegram chat" mockups with realistic message bubbles, gold/green accents
  - Gradient avatar circles with initials for mentors/founder
  - Stylized "chart" SVGs for trading screenshots
- Each image lives in a single component (`PlaceholderScreenshot`, `PlaceholderAvatar`, `PlaceholderLogo`) so swapping in real uploads later is a one-line change per slot.

## Free trial treatment

- Highlighted gold/green "Bepul sinov muddati mavjud" badge in the pricing section header and a small companion chip in the hero trust-badge row.

## Technical notes

- Single page at existing `/` route (`src/pages/Index.tsx` fully replaced).
- New components under `src/components/landing/`: `Header`, `Hero`, `WhatIs`, `Inside`, `Results`, `TelegramPreview`, `WhoFor`, `Requirements`, `HowToJoin`, `Pricing`, `Mentors`, `Founder`, `FAQ`, `FinalCTA`, `Footer`, plus `Placeholder*` primitives and `LaptopMockup` / `PhoneMockup` SVG frames.
- Design tokens added to `index.css` (`--gold`, `--gold-soft`, `--emerald`, `--surface-glass`, gradient + shadow tokens) and mapped in `tailwind.config.ts`.
- Animations via Tailwind keyframes (`fade-in`, `scale-in`, soft-glow pulse) + small `useInView` hook for scroll reveals.
- Icons from `lucide-react`. Accordion from existing `@/components/ui/accordion`.
- Fully mobile-first; tested at 360, 768, 1280 breakpoints.
- No backend needed for v1. UZ/RU toggle is client-side only.

After approval I'll build it end-to-end and you can drop in real screenshots/photos by replacing the placeholder slots.
