# Portfolio — Full Stack Developer

Personal portfolio website designed, built, and deployed end-to-end. Production-ready Next.js application with working contact form, email integration, SEO optimization, and security hardening.

**Live:** [doguhanerbil.com](https://doguhanerbil.com)

---

## About This Project

I built this portfolio from scratch to demonstrate my full-stack capabilities. The project covers the complete development lifecycle: architecture decisions, component design, API development, security implementation, SEO configuration, and production deployment.

This is not a template or boilerplate—every line of code was written with intention, and the site is actively deployed and maintained.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Email | Nodemailer (SMTP) |
| Hosting | Vercel |

---

## What I Built

### Contact Form with Email Delivery
Fully functional contact form with server-side API route:
- Input validation (name, email format, message length)
- HTML sanitization to prevent injection
- Rate limiting (3 requests/minute per IP)
- Honeypot field for bot protection
- SMTP email delivery via Nodemailer

### Security Implementation
Production security headers configured via `next.config.ts`:
- `X-Frame-Options: DENY` — Prevents clickjacking
- `X-Content-Type-Options: nosniff` — Blocks MIME sniffing
- `X-XSS-Protection` — Cross-site scripting protection
- `Referrer-Policy` — Controls referrer information

### SEO Configuration
Complete metadata setup for search engines and social sharing:
- OpenGraph tags for LinkedIn/Facebook
- Twitter Card metadata
- `robots.txt` allowing indexing
- `sitemap.xml` for crawlers
- Canonical URL configuration

### Performance
- Static page generation for fast load times
- Optimized fonts via `next/font`
- Responsive images at correct dimensions
- Minimal JavaScript bundle

---

## Local Setup

```bash
git clone https://github.com/doguhanerbil/portfolio.git
cd portfolio
npm install
cp .env.example .env.local
npm run dev
```

Configure `.env.local` with SMTP credentials for email functionality.

---

## Deployment

Deployed on Vercel with environment variables for SMTP configuration. Push to main branch triggers automatic deployment.

---

## Project Structure

```
app/
├── api/contact/       → Contact form API with validation
├── resume/            → Resume download route
├── layout.tsx         → Root layout with SEO metadata
└── page.tsx           → Homepage

components/            → Reusable React components
data/                  → Content and configuration
public/                → Static assets (OG image, icons, PDF)
```

---

## Contact

**Ahmet Doguhan Erbil**  
Full Stack Developer

- [doguhanerbil@gmail.com](mailto:doguhanerbil@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/ahmet-doguhan-erbil)
- [GitHub](https://github.com/doguhanerbil)
