# 🌻 Shubha Kapoor — Creator Hub & Interactive Link-in-Bio Portfolio

>"Every journey begins with a single spark of courage."

— Shubha Kapoor

A vibrant, modern, and responsive single-page creator portfolio and link-in-bio web application. Built from scratch with **React.js** and **modular CSS3**, this platform unifies digital content creation, published books, UGC campaigns, and technical software development achievements into an eye-catching, high-performance web experience.

---

## 🚀 Live Demo & Connect

- 🌐 **Live Website:** [shubha-kapoor.github.io/shubha-ContentCreator-portfolio](https://github.com/Shubha-Kapoor/shubha-ContentCreator-portfolio)
- ▶️ **YouTube:** [@shinewithshubha](https://www.youtube.com/@shinewithshubha)
- 📸 **Instagram (Niche):** [@shinewithshubha](https://instagram.com/shinewithshubha)
- 💖 **Instagram (Main):** [@shubhakapoor10](https://instagram.com/shubhakapoor10)
- 🎨 **UGC Portfolio:** [Canva Portfolio Link](https://www.canva.com/design/DAGuuizvrNI/ZtuuKgvsgz974-J-YthKQw/edit)
- 💼 **LinkedIn:** [linkedin.com/in/shubha-kapoor-a3963a308](https://www.linkedin.com/in/shubha-kapoor-a3963a308)
- 🐙 **GitHub:** [@Shubha-Kapoor](https://github.com/Shubha-Kapoor)

---

## ✨ Features

- ⚡ **Single-Page Application (SPA):** Seamless scrolling and instant navigation across all creative and technical sections without page reloads.
- 📱 **Fully Responsive Design:** Tailored layouts for mobile devices, tablets, and desktops using custom Flexbox and CSS Grid.
- 🧩 **Modular Component Architecture:** Clean separation of concerns with dedicated component directories containing isolated JSX and CSS files.
- 🎨 **Custom Handwritten Styling:** Built without bulky CSS frameworks—leveraging native CSS variables (`:root`), glassmorphic cards, smooth hover states, and micro-interactions.
- 📖 **Published Author Showcase:** Interactive cards highlighting published books and digital editions on Amazon and Google Play with direct buy links.
- 💻 **Tech & BCA Credibility:** Dedicated spotlight for frontend engineering, open-source work, and prompt engineering skills alongside digital creator metrics.
- 🤝 **Collaboration & CTA Section:** Streamlined brand outreach panel complete with focus tags, direct Instagram DM links, and email integration.

---

## 🛠️ Tech Stack & Architecture

- **Core Library:** [React.js](https://react.dev/) (Hooks & Functional Components)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS3 (Custom Properties, Glassmorphism, Keyframe Animations, Media Queries)
- **Deployment Target:** GitHub Pages / Vercel / Netlify

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/              # Profile headshot, channel banner, book covers
│   │   └── icons/               # Custom social media & UI SVG icons
│   ├── components/
│   │   ├── Banner/              # YouTube-style hero banner top section
│   │   │   ├── Banner.jsx
│   │   │   └── Banner.css
│   │   ├── ProfileHeader/       # Glowing avatar, Sunbeam tagline & creator intro
│   │   │   ├── ProfileHeader.jsx
│   │   │   └── ProfileHeader.css
│   │   ├── QuickLinks/          # Link-in-bio style action buttons
│   │   │   ├── QuickLinks.jsx
│   │   │   └── QuickLinks.css
│   │   ├── BooksSection/        # Amazon & Google Play books showcase cards
│   │   │   ├── BooksSection.jsx
│   │   │   └── BooksSection.css
│   │   ├── TechPortfolio/       # BCA student, Frontend, Prompt Eng & GitHub links
│   │   │   ├── TechPortfolio.jsx
│   │   │   └── TechPortfolio.css
│   │   ├── ContentGallery/      # YT channel stats & UGC preview cards
│   │   │   ├── ContentGallery.jsx
│   │   │   └── ContentGallery.css
│   │   └── CollaborateCTA/      # Collaboration inquiries, tags & contact actions
│   │       ├── CollaborateCTA.jsx
│   │       └── CollaborateCTA.css
│   ├── styles/
│   │   ├── variables.css        # Sky blue, sunbeam gold, magenta gradients & fonts
│   │   └── global.css           # CSS reset, box-sizing, and typography defaults
│   ├── App.jsx                  # Root layout orchestration
│   ├── App.css                  # Wrapper layout styling
│   └── main.jsx
