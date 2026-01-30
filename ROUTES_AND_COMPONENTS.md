# Routes and Components

Next.js App Router routes mapped to React components. Replace placeholder components in `components/pages/` and `components/layout/Layout.tsx` with your React code.

## Layout

- **Layout** → `components/layout/Layout.tsx` (wraps all pages via `app/layout.tsx`)

## Routes → Page components

| Route | Component | File |
|-------|-----------|------|
| `/` | Homepage | `components/pages/Homepage.tsx` |
| `/uk` | UkPage | `components/pages/UkPage.tsx` |
| `/australia` | AustraliaPage | `components/pages/AustraliaPage.tsx` |
| `/canada` | CanadaPage | `components/pages/CanadaPage.tsx` |
| `/dubai` | DubaiPage | `components/pages/DubaiPage.tsx` |
| `/germany` | GermanyPage | `components/pages/GermanyPage.tsx` |
| `/ireland` | IrelandPage | `components/pages/IrelandPage.tsx` |
| `/newzealand` | NewZealandPage | `components/pages/NewZealandPage.tsx` |
| `/pageforcountry` | PageForCountry | `components/pages/PageForCountry.tsx` |
| `/about-us` | AboutUs | `components/pages/AboutUs.tsx` |
| `/privacy-policy` | PrivacyPolicy | `components/pages/PrivacyPolicy.tsx` |
| `/terms-and-conditions` | TermsAndConditions | `components/pages/TermsAndConditions.tsx` |
| `/Refund-Policies` | RefundPolicies | `components/pages/RefundPolicies.tsx` |
| `/contact-us` | ContactPage | `components/pages/ContactPage.tsx` |
| `/blogs` | BlogsPage | `components/pages/BlogsPage.tsx` |
| `/blog/:id` | SingleBlogPage | `components/pages/SingleBlogPage.tsx` (receives `params`) |
| `/career` | Career | `components/pages/Career.tsx` |
| `/career/ACW` | AcademicWriter | `components/pages/AcademicWriter.tsx` |
| `/career/ME` | MarketingExecutive | `components/pages/MarketingExecutive.tsx` |
| `/plans` | PlansPage | `components/pages/PlansPage.tsx` |
| `/services/:id` | ServicesSingle | `components/pages/ServicesSingle.tsx` (receives `params`) |

## Dynamic routes

- **`/blog/[id]`**: `SingleBlogPage` gets `params: Promise<{ id: string }>`. Use `const { id } = await params` (or `use(params)` in client components).
- **`/services/[id]`**: `ServicesSingle` gets `params: Promise<{ id: string }>`. Same pattern.

All pages are server-rendered by default (SSR for SEO).
