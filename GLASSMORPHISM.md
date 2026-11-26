# Glassmorphism Design Rules (for AI agents)

Follow this file for every UI task in this project. If a request conflicts with these rules, ask before breaking them.

## 1. Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + CSS variables for all glass values
- Components are small, reusable, and live in `components/ui/`

## 2. Core principle

Glass only works when there is something colorful behind it to blur. Always build the background first, then the glass surfaces on top.

## 3. Background

- Full-page gradient: deep indigo -> violet -> teal (define as CSS variables)
- Optional slow floating animation (20s+ duration, `transform` only, respect `prefers-reduced-motion`)
- Never use a flat white or flat gray page background

## 4. Design tokens (put in `globals.css`)

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.10);
  --glass-bg-strong: rgba(255, 255, 255, 0.18);
  --glass-border: rgba(255, 255, 255, 0.22);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  --glass-blur: 16px;
  --glass-saturate: 150%;
  --glass-radius: 20px;
}

.glass {
  background: var(--glass-bg);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  border: 1px solid var(--glass-border);
  border-radius: var(--glass-radius);
  box-shadow: var(--glass-shadow), inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

.glass-strong {
  background: var(--glass-bg-strong);
}

/* Fallback for browsers without backdrop-filter */
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass {
    background: rgba(30, 27, 75, 0.85);
  }
}
```

## 5. Where to use glass

Use glass on: cards, navbar, modals, sidebars, dropdowns.

Do NOT use glass on: full-page sections, large text blocks, table rows, or every element.

- Max 2 stacked glass layers
- Navbar and modals use `.glass-strong` for better legibility

## 6. Text and contrast

- Text must meet WCAG AA (4.5:1 body, 3:1 large text) against the actual blurred background
- Default text: white, with `text-white/90` for body and `text-white/70` for secondary
- Never place small text on low-opacity glass over bright blobs; raise the fill opacity instead
- Headings: bold, large, generous spacing (Inter or similar)

## 7. Interaction

- Hover: slightly brighter fill + `translateY(-2px)`, `transition: 200ms ease`
- Focus: visible ring (`ring-2 ring-white/60`), never remove outlines
- Buttons: primary = solid gradient fill, secondary = glass
- All interactive elements are keyboard accessible

## 8. Performance

- Avoid `backdrop-filter` on large animated areas or many elements at once
- Keep blur between 8px and 24px
- Animate `transform` and `opacity` only
- Add `will-change: transform` only on elements that actually animate

## 9. Responsive and themes

- Mobile first; test at 375px, 768px, 1280px
- On mobile, reduce blur to 10-12px for performance
- Support dark mode by redefining the CSS variables, not by duplicating components

## 10. Avoid

- Pure white or solid gray cards
- Heavy black shadows
- Borders thicker than 1px
- Rainbow or clashing background colors
- Glass on glass on glass
- Low-contrast text for the sake of aesthetics

## 11. Before finishing, self-review

- [ ] Background has gradient + blobs, so the blur is visible
- [ ] Text passes contrast checks
- [ ] `-webkit-backdrop-filter` is included for Safari
- [ ] `@supports` fallback exists
- [ ] Glass limited to allowed components, max 2 layers
- [ ] Works on mobile and keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] No hardcoded glass values; everything uses CSS variables
