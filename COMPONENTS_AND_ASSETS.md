# Where to Put React Components & Images

Use this structure so we can quickly wire your React app into Next.js.

---

## Components

| Folder | Use for | Examples |
|--------|---------|----------|
| **`components/layout/`** | Layout, header, footer, nav | `Layout.tsx`, `Header.tsx`, `Footer.tsx`, `Navigation.tsx` |
| **`components/pages/`** | One component per route | `Homepage.tsx`, `UkPage.tsx`, `AboutUs.tsx`, etc. (replace the placeholders) |
| **`components/ui/`** | Shared UI used across pages | `Button.tsx`, `Card.tsx`, `Input.tsx`, `Modal.tsx` |
| **`components/sections/`** | Larger blocks (optional) | `Hero.tsx`, `Features.tsx`, `Testimonials.tsx`, `ContactForm.tsx` |

- **Page components** → `components/pages/`. Replace the existing placeholder files (same names).
- **Layout pieces** (Header, Footer, etc.) → `components/layout/`. Use them inside `Layout.tsx`.
- **Reusable UI** → `components/ui/`. Import from pages or layout.
- **Big reusable sections** → `components/sections/` (create if you use them).

---

## Images

| Folder | Use for |
|--------|---------|
| **`public/images/`** | All images (photos, logos, illustrations) |
| **`public/images/icons/`** | Icons |
| **`public/images/logos/`** | Logos |

- **Reference in code:** use paths like `/images/logo.png`, `/images/icons/arrow.svg` (no `public`).
- **Next.js Image:** `<Image src="/images/hero.jpg" alt="..." width={800} height={400} />`.

---

## Quick reference

```
ah-next/
├── components/
│   ├── layout/          ← Layout, Header, Footer, Nav
│   ├── pages/           ← One per route (replace placeholders)
│   ├── ui/              ← Buttons, inputs, cards, modals
│   └── sections/        ← Hero, features, forms (optional)
├── public/
│   └── images/          ← All images
│       ├── icons/
│       └── logos/
└── app/                 ← Routes only; they import from components/
```

When you share your React components, place them in these folders and we’ll hook them into the routes.
