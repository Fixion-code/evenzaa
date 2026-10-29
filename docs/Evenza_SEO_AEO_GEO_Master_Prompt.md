# EVENZA – MASTER SEO + AEO + GEO IMPLEMENTATION PROMPT
(Paste this whole file into your AI code editor: Cursor / Windsurf / Copilot / Claude Code. Save a copy as `docs/SEO_MASTER_PROMPT.md` in the repo.)

---

## 0. YOUR ROLE AND WORKING RULES

You are a senior technical SEO engineer + full-stack developer. Your job is NOT UI polishing. Your job is to make the Evenza website (https://evenzaa-sable.vercel.app, pages `/`, `/portfolio`, `/links`) rank on Google and be cited by AI answer engines (ChatGPT, Gemini, Perplexity, Google AI Overviews) so that **clients and event planners searching for manpower, hospitality staff, event crew and volunteers in Jaipur / Rajasthan / India contact us**. Every change must serve that goal: rankings → enquiries → leads.

**Business:** Evenza Hospitality Services (a venture of Shree Ji Company Pvt. Ltd., founded/led by Shlok Aggarwal and Stuti Shukla). Based in Jaipur, Rajasthan. Provides trained, uniformed event manpower: hospitality staff, hostesses/ushers, event volunteers, backstage/concert crew, tour managers, wedding hospitality teams, exhibition staff, corporate event staff, crowd/security support, large-scale rally and sports event crews. Pan-India, strongest in Rajasthan.

**Two audiences (build for both):**
1. **Buyers (money side):** event planners, wedding planners, corporates, exhibition organisers, colleges, political/sports/concert organisers who need manpower.
2. **Talent (supply side):** people searching for volunteering, part-time event work, freelancing in events, event crew jobs, hospitality jobs in Jaipur/Rajasthan. They feed our database and build topical authority, but the lead-gen priority is the buyer side.

**Working rules**
1. FIRST inspect the repo: framework (Next.js / Vite+React / plain HTML / PHP), rendering mode (SSR / SSG / CSR), hosting (Vercel), where meta tags, schema, routes, forms, and images are defined. Print a short stack summary and a numbered plan, then execute phase by phase. Do not ask me questions you can answer from the code.
2. Do not break existing design, routes, or form submissions. Prefer minimal visual change. Any visual change must be justified by SEO/conversion.
3. **Never invent facts.** No fake reviews, fake ratings, fake addresses, fake phone numbers, fake client names, fake statistics. Where real data is needed, read it from existing site content; if it is not there, add a clearly marked `TODO_OWNER:` placeholder and list all of them at the end.
4. **No keyword stuffing.** One primary keyword + 2–4 related terms per page, written naturally.
5. Create ONE central config file (e.g. `siteConfig.ts` / `site.config.js`) holding: `SITE_URL`, business name, legal name, phone, WhatsApp, email, address, geo coordinates, opening hours, social URLs, founders, logo path, default OG image. Canonicals, sitemap, OG tags, and schema must all read from it. Changing the domain later must be a one-line change.
6. After every phase, list what changed (file + reason) and how to verify.
7. At the end, give a final checklist for me to re-run the SAGE report and Google tests (Section 14).

---

## 1. PHASE 0 – RENDERING AND DOMAIN (HIGHEST TECHNICAL PRIORITY)

SAGE flagged "Text-to-HTML ratio 6–8%" and "content may be JS-rendered". Google and AI crawlers (many AI bots do NOT run JavaScript) must receive full content in the initial HTML.

1. Verify with `curl -s <url> | grep -i "<h1"` (or view-source) that the H1, body copy, links, JSON-LD and meta tags are present in the raw server HTML, not injected after hydration.
2. If the site is a client-side-only SPA (Vite/CRA React): migrate to server-side rendering or static generation (Next.js App Router with `generateMetadata`, or Astro, or at minimum build-time prerendering of every route). Meta tags and JSON-LD must be in the server response for every route.
3. If Next.js: use Server Components for content, `generateMetadata()` per page, `app/sitemap.ts`, `app/robots.ts`, Metadata API for canonicals/OG. Keep client components only for interactivity (forms, sliders).
4. Reduce markup bloat: remove wrapper-div soup, inline SVG repeated per item, and huge inline styles so visible text ratio rises. Target text-to-HTML ≥ 15%.
5. **Custom domain (critical):** a `*.vercel.app` subdomain is a weak ranking foundation and not brandable. Make the code domain-agnostic via `SITE_URL`, add a 301 redirect from `vercel.app` → the final domain (and `www` ↔ non-www, one canonical host only), and keep `vercel.app` out of the index once the real domain is live (`X-Robots-Tag: noindex` on preview/`*.vercel.app` hosts only). Suggested domains for the owner: `evenza.in`, `evenzaevents.in`, `evenzahospitality.com` (owner to buy/confirm).

---

## 2. PHASE 1 – FIX EVERY ISSUE FROM THE TWO SAGE REPORTS

### 2A. Home page `/` (score 64)
- **Schema:** `Organization: missing url` (x2). Every Organization/Person node must have `url`. Add `logo` (ImageObject), `description`, `sameAs`, `contactPoint`, `address`. `Person` nodes (founders): add `url`, `sameAs`, `image`, `jobTitle`. `LocalBusiness`: add `openingHoursSpecification`, `areaServed`, `geo`, `priceRange`, `telephone`, `image`.
- **Add schema types:** `BreadcrumbList`, `FAQPage` (real FAQs, Section 5), `Service` (one per service, linked to the Organization by `@id`), `WebPage`/`AboutPage`/`ContactPage` where relevant. Merge all into a single `@graph` using `@id` references (spec in Section 6).
- **Performance:** `evenza-profile.png` is 1904 KB → convert to AVIF/WebP, resize to the max displayed size, target < 150 KB. Add `width`/`height` to the 3 Unsplash avatar images. Add `loading="lazy"` to below-the-fold images (keep hero image eager + `fetchpriority="high"`). Total image weight must be < 1 MB. Only 1/12 images use modern formats → serve WebP/AVIF (`next/image` or `<picture>`).
- **Trust warning:** the 3 testimonial avatars are Unsplash stock photos. If those testimonials are not from real clients, replace them with real client names/logos/photos (with permission) or remove them. Do NOT add `Review`/`AggregateRating` schema unless reviews are genuine and visible on the page (Google policy; fake markup risks a manual action).
- **H1:** currently renders as "India's PremierEvent Manpower& Hospitality Partner." (words glued together because of line-break markup, and no location keyword). Make the H1 plain text with proper spacing, e.g. `Event Manpower & Hospitality Staff in Jaipur – Trained Event Crew, Volunteers & Teams Across India`. Keep the visual two-line styling via CSS, not by removing spaces.
- **Answer targeting (score 0):** add question headings and direct-definition paragraphs (Section 5).
- **Voice readiness:** shorten sentences, add FAQ, add `speakable` (Section 6).
- **Entity & Authority (20):** add visible links to About, Contact, Privacy Policy, Terms in header/footer; add author/publisher in schema; add `datePublished`/`dateModified` on content pages with `<time datetime>`.
- **Forms:** "form #1 missing input types": add correct `type` (`tel`, `email`, `date`, `number`), `name`, `autocomplete`, `<label for>`, `required`. Keep stable IDs.
- Add a **skip-to-content link** as the first focusable element (`<a href="#main" class="skip-link">Skip to main content</a>`).
- Add breadcrumbs (visible nav + BreadcrumbList schema) on all inner pages.

### 2B. Portfolio `/portfolio` (score 61)
- **Keyword stuffing bug:** "jaipur" 7.57%, "Evenza's experienced hospitality on-ground operations team" appears **47 times** (once per image), plus malformed templated strings like "corporate corporate", "sports sports", "Jaipur professional corporate". This is a template/data bug. Fix: generate unique caption + alt text per item from real data: event name/type, city, venue (if allowed), date, role of staff, number of staff, scale. Example alt: `Evenza hospitality team welcoming guests at a destination wedding in Udaipur, 2025`. Remove the repeated boilerplate sentence. Target keyword density for any term < 3%.
- **Schema: `Organization: missing url` x17.** Each gallery item is embedding its own Organization. Define the Organization ONCE in the `@graph` and reference it with `{"@id": "SITE_URL/#organization"}` everywhere else. Replace `ImageGallery` blob with `CollectionPage` → `ItemList` of case studies, or `ImageObject` items with `contentUrl`, `caption`, `creator: {"@id": ...}`, `datePublished`.
- **Heading hierarchy:** H1 → H3 skips H2. Use H1 → H2 (category e.g. "Wedding Events") → H3 (event).
- **H1:** "Our Portfolio" has no keywords. Use `Event Staffing Portfolio – Weddings, Corporate Events, Concerts & Rallies Managed by Evenza in Jaipur & India`.
- **Title:** 68 chars is too long (truncates). Keep ≤ 60: `Event Staffing Portfolio & Proof of Work | Evenza Jaipur`.
- **Text-to-HTML 6%, 48 images:** paginate or "load more" with real HTML links; use `loading="lazy"`; only 1/48 images are modern format → convert all to WebP/AVIF with responsive `srcset`; 6 images need lazy.
- **Make each major event a real indexable case-study page** `/portfolio/<event-slug>` (Challenge → What we deployed (number of staff, roles) → Result → photos), with its own title, meta, schema and internal links to the relevant service page. This is far stronger for ranking and AI citation than a wall of images.
- Add a short intro with a real definition and an FAQ ("What events has Evenza staffed?").
- Add `<time>` / dates to each project.

### 2C. `/links`
- If it is a link-in-bio style page with no unique content: set `<meta name="robots" content="noindex, follow">`, remove from sitemap, keep canonical to itself. Make sure no important keyword page is only reachable from `/links`.

### 2D. Fix on all pages (appears in both reports)
- No About/Contact/Privacy/Terms links → create these pages (Section 4) and link in header + footer.
- No `<link rel="sitemap">`/sitemap → add `sitemap.xml` and reference in `robots.txt`.
- No hreflang needed (single language), but set `<html lang="en-IN">`.
- No heading IDs → add `id` to every H2/H3 for deep-linking/anchors.
- WebMCP: optional; implement only the cheap parts (Section 9). Do not let this delay core SEO.

---

## 3. PHASE 2 – KEYWORD STRATEGY AND PAGE ARCHITECTURE

Google ranks **pages**, not websites. One landing page cannot rank for 15 different intents. Create dedicated, content-rich pages (min 700–1,200 original words each, unique, not templated copies), one primary intent per page.

### 3A. Required page map (slug → primary keyword → secondary keywords)

**Buyer pages (priority 1):**

| Slug | Primary keyword | Secondary / semantic |
|---|---|---|
| `/` | event manpower in Jaipur | event staffing agency Jaipur, hospitality staff Jaipur, event crew India |
| `/event-manpower-jaipur` | event manpower in Jaipur | manpower for events, event staff on hire, event staffing company Rajasthan |
| `/hospitality-staff-jaipur` | hospitality team in Jaipur | hospitality staff for events, hostess, ushers, guest relations, front desk, welcome team, Rajasthan |
| `/wedding-event-staff-jaipur` | wedding event staff Jaipur | wedding hospitality team, destination wedding manpower Rajasthan, wedding management staff, guest handling, Udaipur/Jodhpur/Jaipur weddings |
| `/event-volunteers-jaipur` | event volunteers in Jaipur | volunteer management for events, trained volunteers for marathon/college fest/expo/rally |
| `/event-crew-backstage-crew-jaipur` | event crew in Jaipur | concert crew, backstage crew, stage crew, production helpers, artist management support |
| `/tour-managers-rajasthan` | tour managers in Rajasthan | tour manager for corporate groups, group tour escorts, MICE tour management |
| `/corporate-event-staff-jaipur` | corporate event staff Jaipur | conference staff, exhibition staff, promoters, registration desk staff |
| `/crowd-security-management-jaipur` | event security and crowd management Jaipur | event bouncers, crowd control team, rally management (only if you genuinely offer and are licensed; state licensing facts only if true) |
| `/rally-sports-event-staffing-rajasthan` | large event manpower Rajasthan | 10,000-person rallies, sports events, IPL/stadium staffing (only real experience) |
| `/event-staff-pricing-jaipur` | event staff cost in Jaipur | price per staff per day (only if owner provides real ranges) |

**Talent pages (priority 2):**

| Slug | Primary keyword | Secondary |
|---|---|---|
| `/volunteer-in-jaipur` | volunteering in Jaipur | volunteer for events Jaipur, event volunteer opportunities Rajasthan, volunteer certificate |
| `/part-time-event-jobs-jaipur` | part time event jobs in Jaipur | part time work for students, weekend event work, event staff jobs |
| `/freelance-event-work-rajasthan` | freelancing in events | freelance event staff Jaipur, freelance event crew, hospitality freelance |
| `/join-our-team` | work with Evenza | registration form with role, city, experience, availability, ID, WhatsApp |

**Trust/entity pages (mandatory):** `/about`, `/contact`, `/faq`, `/privacy-policy`, `/terms`, `/blog`.

**City pages** (`/event-staff-udaipur`, `/event-staff-jodhpur`, `/event-staff-jaisalmer`, `/event-staff-pushkar`, `/event-staff-delhi`, etc.): create ONLY for cities where Evenza has actually worked, each with unique local content (venues, events done, travel/logistics notes). Do NOT create thin copy-paste doorway pages with only the city name swapped, because Google penalises them.

### 3B. Hinglish and local-intent terms (weave in naturally, esp. FAQs/blog)
"Jaipur me event staff", "event staff kaha se milega Jaipur", "event ke liye manpower", "wedding hostess Jaipur", "part time job Jaipur events", "volunteer Jaipur certificate", "promoters for exhibition Jaipur", "event helpers on daily wages Jaipur". Use sparingly in headings/FAQ wording; core copy stays in clear English.

### 3C. On-page rules for EVERY page
- **Title** ≤ 60 chars: `<Primary keyword> | <Benefit> | Evenza`. Example: `Event Manpower in Jaipur – Trained Staff on Hire | Evenza`.
- **Meta description** 140–155 chars: keyword + proof + CTA ("Get a quote in 24 hours").
- **One H1**, includes primary keyword + location. H2s cover secondary keywords and questions. No skipped levels.
- Primary keyword appears in: title, H1, first 100 words, one H2, URL slug, one image alt, meta description.
- First paragraph = 40–60-word direct answer ("Evenza provides trained event manpower in Jaipur, including hospitality staff, hostesses, volunteers and backstage crew for weddings, corporate events and concerts. We deploy teams from 5 to 5,000 people…" using only true numbers).
- Add real proof near the top: number of events, years, cities, sample clients (only if true and permitted).
- Each page has a visible CTA block (Get Quote + WhatsApp + Call) above the fold and after every major section.
- Internal links: every page links to 3–6 related pages with descriptive anchor text (e.g., "wedding hospitality staff in Jaipur", not "click here"). Service pages link to relevant case studies and vice versa.
- Unique content per page. No duplicate paragraphs across pages.

---

## 4. PHASE 3 – TRUST AND ENTITY (E-E-A-T)

- `/about`: who we are, Shree Ji Company Pvt. Ltd., founders (Shlok Aggarwal, Stuti Shukla) with photo, role, bio, LinkedIn/Instagram links (Person schema + `sameAs`), year founded, registered business details (CIN/GST only if the owner wants it public), office address, process of how staff are trained/vetted/uniformed.
- `/contact`: full NAP (Name, Address, Phone) identical everywhere, Google Map embed, tel link, WhatsApp link, email, working hours, enquiry form, `ContactPage` schema.
- Footer on every page: NAP, key service links, About, Contact, Privacy, Terms, social icons.
- Show real client logos, testimonials (real, attributable), event photos, safety/training practices, ID verification and background-check policy for staff.
- Author bylines + dates on blog articles; link author to `/about`.
- **NAP consistency:** exact same business name, address and phone on the site, Google Business Profile, social pages and directories.

---

## 5. PHASE 4 – AEO (ANSWER ENGINE OPTIMISATION)

Current Answer Targeting 0–6/100, Citability 29–36/100, Voice 26–31/100.

1. **Question headings:** convert H2s to real questions customers ask, each followed by a 40–60-word direct answer, then optional detail:
   - What is event manpower?
   - How much does event staff cost in Jaipur?
   - How many staff do I need for a 500-guest wedding?
   - How do I hire hospitality staff for a corporate event in Jaipur?
   - Can I volunteer at events in Jaipur?
   - How can I get part-time event work in Jaipur?
   - What does an event crew / backstage crew do?
   - What does a tour manager do?
   - How early should I book event manpower?
   - Do you provide staff outside Jaipur (Udaipur, Jodhpur, Delhi…)?
   - What uniforms, training and supervision do your staff have?
   - Which payment/contract terms apply?
2. **Direct definitions:** start key paragraphs with "X is…" / "X refers to…" ("Event manpower refers to trained temporary staff supplied to run an event, including…").
3. **FAQ section** (visible on page, 6–10 Q&As on each service page + central `/faq` page) with matching `FAQPage` JSON-LD. Answers must be identical to visible text. (Google now shows FAQ rich results only for certain sites, but FAQ content remains heavily used by AI answer engines and voice assistants.)
4. **Tables:** add comparison/spec tables with `<th>` headers: staff role vs typical duties vs suitable events; or event size vs recommended team size (only real numbers). Add `<dl>` definition lists for roles.
5. **How-to blocks with ordered lists:** "How to hire event staff in Jaipur in 5 steps" using `<ol>` + `HowTo` content (HowTo rich results are deprecated in Google, but structured steps still help AI extraction).
6. **Voice readiness:** average sentence ≤ 15–18 words, prefer words under 2 syllables where possible, 20–50-word paragraphs, active voice. Portfolio page reading ease is 28 (Flesch −10 on complexity) → rewrite copy in plain English.
7. **Freshness:** `datePublished` + `dateModified` visible and in schema; update key pages quarterly.
8. **Blog/content engine** (2–4 articles/month; each 800–1,500 words, targeting a question):
   - Event manpower cost in Jaipur: complete guide
   - How many hospitality staff for a wedding (by guest count)
   - Event volunteer vs paid event staff: which to choose
   - How to become an event volunteer in Jaipur
   - Part-time event jobs in Jaipur for students
   - Event crew roles explained (stage, backstage, logistics, guest handling)
   - Tour manager vs tour guide
   - Checklist: hiring an event staffing agency
   - Managing a 10,000-person rally: crowd and volunteer planning
   - Best venues/seasons for destination weddings in Rajasthan (with staff planning tips)

---

## 6. PHASE 5 – STRUCTURED DATA (JSON-LD) SPECIFICATION

Output **one `<script type="application/ld+json">` with a `@graph`** in the server HTML of each page. Define entities once with `@id`; reference by `@id` elsewhere (this removes the 17 "missing url" errors on `/portfolio`). Remove RDFa duplicates and any conflicting duplicate blocks (SAGE found RDFa; keep JSON-LD only).

Required nodes (fill from `siteConfig`, no invented data):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "SITE_URL/#website",
      "url": "SITE_URL/",
      "name": "Evenza Hospitality Services",
      "inLanguage": "en-IN",
      "publisher": { "@id": "SITE_URL/#organization" }
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "SITE_URL/#organization",
      "name": "Evenza Hospitality Services",
      "legalName": "Shree Ji Company Pvt. Ltd.",
      "url": "SITE_URL/",
      "logo": { "@type": "ImageObject", "url": "SITE_URL/logo.png", "width": 512, "height": 512 },
      "image": "SITE_URL/og-image.jpg",
      "description": "Trained event manpower, hospitality staff, volunteers and event crew in Jaipur, Rajasthan and across India.",
      "telephone": "TODO_OWNER",
      "email": "TODO_OWNER",
      "priceRange": "TODO_OWNER",
      "address": { "@type": "PostalAddress", "streetAddress": "TODO_OWNER", "addressLocality": "Jaipur", "addressRegion": "Rajasthan", "postalCode": "TODO_OWNER", "addressCountry": "IN" },
      "geo": { "@type": "GeoCoordinates", "latitude": "TODO_OWNER", "longitude": "TODO_OWNER" },
      "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "19:00" }],
      "areaServed": [{ "@type": "City", "name": "Jaipur" }, { "@type": "State", "name": "Rajasthan" }, { "@type": "Country", "name": "India" }],
      "founder": [{ "@id": "SITE_URL/about#shlok" }, { "@id": "SITE_URL/about#stuti" }],
      "contactPoint": [{ "@type": "ContactPoint", "contactType": "sales", "telephone": "TODO_OWNER", "areaServed": "IN", "availableLanguage": ["English", "Hindi"] }],
      "sameAs": ["Instagram URL", "LinkedIn URL", "Facebook URL", "YouTube URL", "Google Business Profile URL"],
      "knowsAbout": ["event manpower", "hospitality staffing", "event volunteers", "wedding event staff", "event crew", "tour management"]
    },
    { "@type": "Person", "@id": "SITE_URL/about#shlok", "name": "Shlok Aggarwal", "jobTitle": "Co-Founder", "url": "SITE_URL/about", "image": "TODO_OWNER", "sameAs": ["LinkedIn URL"], "worksFor": { "@id": "SITE_URL/#organization" } },
    { "@type": "Person", "@id": "SITE_URL/about#stuti", "name": "Stuti Shukla", "jobTitle": "Co-Founder", "url": "SITE_URL/about", "image": "TODO_OWNER", "sameAs": ["LinkedIn URL"], "worksFor": { "@id": "SITE_URL/#organization" } },
    { "@type": "WebPage", "@id": "PAGE_URL#webpage", "url": "PAGE_URL", "name": "PAGE TITLE", "isPartOf": { "@id": "SITE_URL/#website" }, "about": { "@id": "SITE_URL/#organization" }, "datePublished": "YYYY-MM-DD", "dateModified": "YYYY-MM-DD", "breadcrumb": { "@id": "PAGE_URL#breadcrumb" }, "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".answer-lead", "h1"] } },
    { "@type": "BreadcrumbList", "@id": "PAGE_URL#breadcrumb", "itemListElement": [] }
  ]
}
```

Per page add:
- Service pages: `Service` (`provider` = organization `@id`, `areaServed`, `serviceType`, `description`, `offers` only with real pricing) + `FAQPage` + `BreadcrumbList`.
- Portfolio: `CollectionPage` + `ItemList`; case-study pages: `Article` or `WebPage` with `ImageObject`s, real dates.
- About: `AboutPage`. Contact: `ContactPage`.
- Blog posts: `Article` / `BlogPosting` with `author` (Person @id), `publisher`, `datePublished`, `dateModified`, `image`, `mainEntityOfPage`.
- Keep the existing `SearchAction` only if the site has a working search; otherwise remove it (a potentialAction that doesn't work is a negative signal).
- Validate every page in Google Rich Results Test and validator.schema.org; zero errors, zero warnings where possible. Note: `speakable` is officially only used by Google for news publishers; include it anyway for SAGE/voice/LLM readiness but don't expect a Google rich result.

---

## 7. PHASE 6 – GEO (GENERATIVE ENGINE OPTIMISATION: BEING CITED BY AI)

1. **`/robots.txt`** (generated, not hand-written, from config):
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /links

# AI crawlers: allow so Evenza can be cited
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /

Sitemap: SITE_URL/sitemap.xml
```
2. **`/llms.txt`** (and optional `/llms-full.txt`): plain Markdown summary of the business: one-paragraph description, services with URLs, service areas, contact, founders, key facts (founded year, events handled, cities), links to the main pages and FAQ. Keep facts identical to on-page text and schema.
3. **Entity clarity:** the first paragraph of the home, about, and every service page must state in plain sentences: *Who* (Evenza Hospitality Services, by Shree Ji Company Pvt. Ltd.), *What* (event manpower, hospitality staff, volunteers, crew), *Where* (Jaipur, Rajasthan, pan-India), *For whom* (event planners, wedding planners, corporates, organisers).
4. **Citable facts:** include specific, verifiable numbers (team sizes deployed, events completed, years in operation, cities covered, response time, staff-to-guest ratios) in short quotable sentences, and cite their basis where possible. LLMs quote concrete, consistent facts.
5. **Consistency across the web:** same description, name, NAP, founders on site, schema, Google Business Profile, LinkedIn, Instagram, Facebook, directories.
6. **`sameAs`** must link to every real profile and the Google Business Profile.
7. Optional WebMCP (low priority, after everything else): add `toolname`/`tooldescription` attributes to the enquiry form so agents can submit quote requests; register `requestQuote`, `getContactDetails` tools via `navigator.modelContext` behind a feature check. Skip `bookAppointment`/`checkHours` unless real.

---

## 8. PHASE 7 – TECHNICAL SEO AND PERFORMANCE

- **`sitemap.xml`** (dynamic): all indexable URLs with accurate `lastmod`; exclude `/links`, thank-you pages, API routes. Submit to Search Console and Bing.
- **Canonicals:** self-referencing absolute canonical on every page, same host/protocol as final domain, no trailing-slash duplicates (pick one style and 301 the other).
- **Redirects:** `http→https`, `www↔non-www`, `vercel.app→domain`. Single hop only.
- **404:** real 404 status with helpful links; no soft 404s.
- **Open Graph/Twitter:** unique `og:title`, `og:description`, 1200×630 `og:image` per key page; use `og:locale="en_IN"`. SAGE showed duplicate OG tags on `/portfolio` (og:title/description/url/type repeated): output each exactly once.
- **Core Web Vitals targets:** LCP < 2.5 s, CLS < 0.1, INP < 200 ms on mobile (most Indian searchers are on mobile 4G). Actions: AVIF/WebP + `srcset`/`sizes`; explicit `width`/`height`; preload hero image and main font; `font-display: swap`; self-host fonts or use `next/font`; remove unused JS/CSS; code-split; defer third-party scripts (analytics, chat); lazy-load below-the-fold images/iframes (Google Maps iframe `loading="lazy"`).
- **Images:** descriptive file names (`wedding-hospitality-team-jaipur.webp`), unique alt text, no text-in-image for important content, consistent dimensions.
- **Semantic HTML:** `<header>`, `<nav aria-label>`, `<main id="main">`, `<section aria-labelledby>`, `<article>`, `<footer>`, `<time>`, `<address>` for contact, `<figure>/<figcaption>`.
- **Security/headers (Vercel `vercel.json` or `next.config`):** HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, compression, long-cache for static assets (`immutable`), no cache for HTML.
- **Mobile:** tap targets ≥ 44 px, sticky mobile CTA bar (Call / WhatsApp / Get Quote).
- **Pagination/portfolio:** if "load more" uses JS only, provide crawlable `<a href>` pagination or render all items server-side.
- Remove console errors, broken links, mixed content.

---

## 9. PHASE 8 – LEAD CAPTURE AND BACKEND (SEO IS USELESS WITHOUT CONVERSION)

1. **Quote request form** on every service page + `/contact`: fields = name, phone, email, event type (dropdown), city, date, expected guests, staff required (roles + numbers), message. Required fields marked, mobile-friendly, `autocomplete` attributes, clear success message, redirect to `/thank-you` (noindex).
2. **Backend:** validate + sanitise server-side, rate-limit, honeypot or Cloudflare Turnstile/hCaptcha for spam, store enquiry in DB/Google Sheet, email notification + WhatsApp notification to the owner, auto-reply to the client. Log failures and never lose a lead (retry queue).
3. **Click-to-call and WhatsApp:** `tel:` and `https://wa.me/91XXXXXXXXXX?text=...` prefilled with the page topic (e.g., "Hi, I need event staff in Jaipur for…"). Floating WhatsApp button + sticky call button on mobile.
4. **Separate talent flow:** `/join-our-team` form (role, city, experience, availability, age, ID proof upload, photo, WhatsApp) writing to a separate table/sheet so buyer leads and talent registrations never mix. Only show `JobPosting` schema for genuine open positions with real salary/description (it's against Google's guidelines otherwise).
5. **Analytics and tracking:** GA4 + Google Search Console + Bing Webmaster verification. Track events: `form_submit`, `click_whatsapp`, `click_call`, `click_email`, `view_service_page`, with page/service/city as parameters. Mark `form_submit` and `click_whatsapp` as key events (conversions). Add UTM handling and store source/medium in the enquiry record so we can see which keyword/page produces leads.
6. **Social proof near forms:** client logos, number of events, response-time promise ("We reply within 2 hours").

---

## 10. PHASE 9 – OFF-PAGE: BACKLINKS AND LOCAL SEO (OWNER TASKS; THE AI EDITOR CANNOT DO THESE, BUT MUST PREPARE THE PAGES FOR THEM)

Code alone will not rank a new site. Prepare `/press`, `/partners`, shareable assets and embed badges, and give me this checklist as a `docs/OFFPAGE_CHECKLIST.md`:

1. **Google Business Profile** (highest local impact): category "Event Management Company"/"Staffing Agency", add services, photos, service areas (Jaipur + Rajasthan cities), posts weekly, collect real Google reviews (ask each client after every event, send direct review link by WhatsApp).
2. **Search Console + Bing Webmaster**: verify domain, submit sitemap, monitor queries weekly.
3. **Directories & citations (consistent NAP):** JustDial, Sulekha, IndiaMART, TradeIndia, Yellow Pages India, WedMeGood, WeddingWire India, Weddingz, Eventbrite/Insider vendor lists, LinkedIn Company Page, Facebook, Instagram, YouTube, Clutch/GoodFirms (if eligible), local Jaipur business directories.
4. **Quality backlinks:** partner with wedding planners, venues, decorators, caterers, DJs, colleges, NGOs, chambers of commerce (Jaipur) → ask for "event staffing partner" links; guest posts on event/wedding/HR blogs; local news features of big events; press releases for large deployments; sponsor/volunteer partner pages of events you've staffed; college societies and volunteer groups (for talent-side authority). Avoid paid link farms/PBNs (penalty risk).
5. **Content distribution:** repurpose case studies as Instagram reels, LinkedIn posts, YouTube shorts linking to the case-study page.
6. **Reviews/testimonials:** real ones only, displayed with permission.
7. **Monitor:** rank tracking for the keyword list (Section 3A) in Jaipur-localised results; review Search Console "Queries" and "Pages" monthly; improve pages sitting at positions 8–20.

---

## 11. MAJOR vs MINOR RULES CHECKLIST (APPLY TO EVERY FUTURE CODE CHANGE)

**MAJOR (can make or break ranking/leads):**
1. Content must be in server-rendered HTML, not JS-only.
2. One page = one search intent; one H1; unique title and meta per page.
3. Keyword in title/H1/first paragraph/slug, but natural (< 3% density).
4. Real `@id`-linked JSON-LD graph with no validation errors.
5. Correct canonicals, sitemap, robots, single domain, HTTPS.
6. Mobile speed (LCP < 2.5 s); images in WebP/AVIF, resized.
7. Real E-E-A-T: About, Contact, founders, address, phone, policies, real reviews.
8. Internal links with descriptive anchors; no orphan pages.
9. Working lead forms + WhatsApp + call tracking (conversions measured).
10. Google Business Profile + consistent NAP + real backlinks.
11. Never publish templated/duplicate/thin content or fake data.

**MINOR (do them, they add up):**
- `lang="en-IN"`, skip link, breadcrumbs, `<time>`, heading IDs, alt text, `loading="lazy"`, `width/height`, `font-display: swap`, `rel="noopener"` on external links, `og:image` per page, favicon set (ico, 192, 512, apple-touch), `theme-color`, descriptive file names, speakable, question headings, FAQ, tables, definition lists, security headers, clean URLs (lowercase, hyphens, no query strings), 301 for any renamed URL, `hreflang` only if multi-language.

**NEVER:** hidden text, keyword-stuffed alt/captions, repeated boilerplate paragraphs, fake reviews/schema, cloaking, doorway pages, buying links, copying competitor text, auto-generated spun content, blocking CSS/JS in robots, `noindex` on money pages.

---

## 12. KEYWORD SET TO COVER (distribute naturally across the page map; do NOT stuff every term onto one page)

event manpower Jaipur · manpower for events · event staffing agency Jaipur · event staff on hire Jaipur · hospitality team Jaipur · hospitality staff Rajasthan · hospitality manpower supplier · wedding event staff Jaipur · wedding hospitality team · destination wedding manpower Rajasthan · wedding event work · event crew Jaipur · concert crew · backstage crew · stage crew · event volunteers Jaipur · volunteer management company · volunteering in Jaipur · volunteering in events · volunteer opportunities Rajasthan · part time event jobs Jaipur · part time work for students Jaipur · freelancing in events · freelance event staff · event work Jaipur · tour managers Rajasthan · tour manager jobs · hostess and promoters Jaipur · exhibition staff · corporate event staff · event security and crowd management Jaipur · rally and sports event manpower · event planners Jaipur partner · event staff cost Jaipur.

---

## 13. DELIVERABLES THE AI EDITOR MUST PRODUCE

1. Stack audit + step plan.
2. `siteConfig` and refactor of meta/schema/canonical to use it.
3. SSR/prerender fix if needed, plus raw-HTML verification output.
4. All new pages from Section 3A (real copy, FAQ, CTAs, internal links, schema), plus About/Contact/FAQ/Privacy/Terms/Blog scaffold with first 3 articles.
5. Fixed home and portfolio pages per Section 2 (with the repeated-caption bug removed and unique captions/alt text).
6. JSON-LD `@graph` on every page, validated.
7. `robots.txt`, `sitemap.xml`, `llms.txt`, redirects, headers, 404.
8. Image pipeline (WebP/AVIF, responsive, dimensions, lazy loading).
9. Lead forms, backend handling, WhatsApp/tel links, GA4 events.
10. `docs/OFFPAGE_CHECKLIST.md` and a list of every `TODO_OWNER:` item.
11. A change log (file → reason) and a verification checklist.

---

## 14. ACCEPTANCE TESTS (RUN BEFORE SAYING "DONE")

- `curl` of every URL shows H1, body text, JSON-LD, canonical, and OG tags in raw HTML.
- Google Rich Results Test and validator.schema.org: 0 errors.
- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO = 100, Best Practices ≥ 95.
- PageSpeed Insights: Core Web Vitals pass on mobile.
- No duplicate titles/meta/H1 across pages; no page with keyword density > 3%; no broken links.
- SAGE re-run on `/`, `/portfolio`, and each new service page. **Targets:** Schema ≥ 95, Semantic HTML ≥ 95, Accessibility ≥ 95, Meta 100, Machine Readability ≥ 95, Entity & Authority ≥ 80, Citability ≥ 80, Performance ≥ 95, Answer Targeting ≥ 80, Voice ≥ 80, Keyword Density ≥ 90, AI View 100. Items that cannot reach 100 for legitimate reasons: robots.txt/llms.txt checks (SAGE needs host permission, verify manually), hreflang (single language), WebMCP (optional), `speakable` (not used by Google for non-news). Report them honestly instead of forcing fake markup.
- After deployment: submit sitemap in Search Console, request indexing for the new pages, set up GA4 conversions.

**Final instruction:** Be precise, don't truncate, don't skip sections, and don't "fix" things only cosmetically. If you must choose between visual polish and ranking/lead impact, choose ranking/lead impact.
