# Pappert Bakery Website – Bakery Site Modernization

I independently developed a complete, responsive redesign of the **Pappert** bakery website from scratch, using modern technologies: **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, and **next-intl**.

The project was focused on high performance, accessibility (ARIA), internationalization (i18n), and a clean, intuitive mobile-first UX design.

---

## 🔑 Key Features:

* 🎯 **Dynamic UI** with an animated category slider and role-based content (Customer / Employee / All Categories)
* ⚙️ **Optimized architecture**: code splitting, lazy loading, image compression
* 🌗 **Light/Dark mode** and a structure ready for internationalization
* ♿️ **Accessible and SEO-friendly markup** following WCAG and Core Web Vitals standards
* 🧩 **Modular architecture** with planned integration of CMS and admin panel (MVP → v1 → CMS → Backend)

> Although the redesign was not adopted (the company was already working with an external team on a new platform), this project showcases my ability to write production-ready code, design UX interfaces, and create scalable architecture entirely from scratch.

---

## 🧪 Course Project

This project also serves as a practical assignment in my web development education. It includes not only technical implementation but also architectural analysis, UX design, and adaptation for real business use cases.

---

## 🚀 How to Run the Project Locally

1. **Clone the repository:**

```bash
git clone https://github.com/devnazarchuk/papperts.git
cd papperts
```

Install dependencies:

```bash
pnpm install
```

You can also use `npm install` or `yarn install`.

Create a `.env` file:

Copy `.env.example` and rename it to `.env`. Fill in the environment variables:

```env
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
SUPABASE_URL=
SUPABASE_ANON_KEY=
DATABASE_URL=
```

Run the project in development mode:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

🛠️ **Technologies Used**

* **Next.js 15 (App Router)** – React-based framework with SSR/SSG
* **Tailwind CSS** – Utility-first CSS framework
* **TypeScript** – Static typing for safety and readability
* **Framer Motion** – Smooth animations and interactions
* **Shadcn UI** – Modern UI components
* **Clerk** – Authentication and user management
* **Supabase + Drizzle ORM** – Database and typed queries
* **next-intl** – Internationalization and translation

---

📁 **Project Structure (Simplified)**

```bash
app/
  layout.tsx
  page.tsx
  (auth)/...
  (routes)/...

components/
  ui/
  shared/
  cards/
  slider/

lib/
  utils/
  db/
  auth/

public/
  assets/
  images/

i18n/
  en.json
  de.json

.env
tailwind.config.ts
tsconfig.json
```

---


* Practice with modern architecture and performance optimization
* Implement responsive design and accessibility
* Develop a scalable structure for future expansion (CMS, Backend, Admin Panel)
* Integrate animations and interactive elements

---

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License (CC BY-NC-ND 4.0)**.

You are not allowed to copy, modify, or use this project for commercial purposes.

[View full license →](https://creativecommons.org/licenses/by-nc-nd/4.0/)

