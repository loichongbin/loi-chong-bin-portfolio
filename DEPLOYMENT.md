# Deployment Guide — Loi Chong Bin Portfolio

## Prerequisites
- Node.js 18+ installed
- npm or yarn

---

## 1. Install Dependencies

```bash
cd "C:\Users\loich\Desktop\New Folder\Portfolio\Website"
npm install
```

---

## 2. Add Your Assets

Before running, add these files to the `/public` folder:

| File | Description |
|------|-------------|
| `public/profile.jpg` | Your professional headshot (square, min 400×400px) |
| `public/resume.pdf` | Your current resume/CV |

Then update `Hero.tsx` to replace the placeholder with a real `<Image>` component:

```tsx
import Image from 'next/image'

// Replace the placeholder div with:
<Image
  src="/profile.jpg"
  alt="Loi Chong Bin"
  width={256}
  height={256}
  className="rounded-full w-full h-full object-cover"
  priority
/>
```

---

## 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. Deploy to Vercel (Recommended — Free)

### Option A: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be live at `https://your-project.vercel.app`.

### Option B: GitHub + Vercel UI

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! Your site is live.

---

## 5. Custom Domain (Optional)

In Vercel Dashboard → Domains → Add `loichongbin.com` or similar.

---

## 6. Connect Contact Form (Optional)

The contact form currently simulates submission. To make it real, use one of:

### Formspree (simplest)
1. Create account at [formspree.io](https://formspree.io)
2. Create a form → get your form ID (e.g. `xabcdefg`)
3. In `Contact.tsx`, replace the `handleSubmit` function:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setStatus('sending')
  
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  
  if (res.ok) {
    setStatus('sent')
  } else {
    setStatus('error')
  }
}
```

### EmailJS (no backend needed)
See [emailjs.com](https://emailjs.com) for React integration.

---

## 7. SEO — Update Metadata

In `src/app/layout.tsx`, update the OpenGraph URL once you have a domain:

```typescript
openGraph: {
  url: 'https://loichongbin.com',  // ← your actual domain
  ...
}
```

---

## 8. LinkedIn Link

In `src/components/layout/Footer.tsx` and `src/components/sections/Contact.tsx`, replace:

```
href="https://linkedin.com"
```

with your actual LinkedIn URL:

```
href="https://www.linkedin.com/in/YOUR_LINKEDIN_HANDLE"
```

---

## Build for Production

```bash
npm run build
npm start
```

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 14.x | React framework, routing, SSR |
| React | 18.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Utility-first styling |
| Framer Motion | 11.x | Animations |
| next-themes | 0.3.x | Dark/light mode |
| Lucide React | 0.424.x | Icons |
| clsx + tailwind-merge | latest | Class utilities |
