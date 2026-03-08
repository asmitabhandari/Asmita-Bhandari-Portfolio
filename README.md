# Asmita Bhandari Developer Portfolio

A VS Code-themed developer portfolio built with React, Vite, and Tailwind CSS v3. Features a built-in AI assistant powered by OpenAI, a serverless API proxy, an interactive terminal, and a contact form.

Live site: https://asmita-bhandari-portfolio.vercel.app

---

## Project Structure

```
portfolio/
Γö£ΓöÇΓöÇ api/
Γöé   ΓööΓöÇΓöÇ chat.js                  # Serverless proxy for OpenAI API (keeps key server-side)
Γö£ΓöÇΓöÇ public/
Γöé   ΓööΓöÇΓöÇ Asmita_Bhandari_Resume.pdf # Resume (served as static asset)
Γö£ΓöÇΓöÇ src/
Γöé   Γö£ΓöÇΓöÇ components/
Γöé   Γöé   Γö£ΓöÇΓöÇ TitleBar.jsx          # MacOS chrome
Γöé   Γöé   Γö£ΓöÇΓöÇ MenuBar.jsx           # File / Edit / View menu
Γöé   Γöé   Γö£ΓöÇΓöÇ ActivityBar.jsx       # Left icon bar with Copilot toggle
Γöé   Γöé   Γö£ΓöÇΓöÇ Sidebar.jsx           # File explorer panel
Γöé   Γöé   Γö£ΓöÇΓöÇ TabBar.jsx            # Open file tabs
Γöé   Γöé   Γö£ΓöÇΓöÇ Breadcrumb.jsx        # Path display
Γöé   Γöé   Γö£ΓöÇΓöÇ Terminal.jsx          # Interactive terminal with real commands
Γöé   Γöé   Γö£ΓöÇΓöÇ StatusBar.jsx         # Bottom status bar
Γöé   Γöé   Γö£ΓöÇΓöÇ CommandPalette.jsx    # Ctrl+P file search
Γöé   Γöé   Γö£ΓöÇΓöÇ Toast.jsx             # Notification toasts
Γöé   Γöé   Γö£ΓöÇΓöÇ MobileSidebar.jsx     # Drawer navigation for mobile
Γöé   Γöé   ΓööΓöÇΓöÇ CopilotChat.jsx       # AI assistant panel
Γöé   Γö£ΓöÇΓöÇ pages/
Γöé   Γöé   Γö£ΓöÇΓöÇ HomePage.jsx          # Landing with typewriter effect
Γöé   Γöé   Γö£ΓöÇΓöÇ AboutPage.jsx         # Bio and links
Γöé   Γöé   Γö£ΓöÇΓöÇ ProjectsPage.jsx      # Project cards
Γöé   Γöé   Γö£ΓöÇΓöÇ SkillsPage.jsx        # Skills with progress bars
Γöé   Γöé   Γö£ΓöÇΓöÇ ExperiencePage.jsx    # Work history timeline
Γöé   Γöé   Γö£ΓöÇΓöÇ ContactPage.jsx       # Contact form and social links
Γöé   Γöé   ΓööΓöÇΓöÇ ReadmePage.jsx        # Markdown-style README page
Γöé   Γö£ΓöÇΓöÇ hooks/
Γöé   Γöé   Γö£ΓöÇΓöÇ useTypewriter.js      # Typewriter animation hook
Γöé   Γöé   Γö£ΓöÇΓöÇ useClock.js           # Live clock hook
Γöé   Γöé   Γö£ΓöÇΓöÇ useReveal.js          # Scroll reveal hook
Γöé   Γöé   ΓööΓöÇΓöÇ useTheme.js           # Theme switching hook
Γöé   Γö£ΓöÇΓöÇ data/
Γöé   Γöé   ΓööΓöÇΓöÇ index.js              # All portfolio data in one place
Γöé   Γö£ΓöÇΓöÇ icons/
Γöé   Γöé   ΓööΓöÇΓöÇ index.jsx             # SVG icons as React components
Γöé   Γö£ΓöÇΓöÇ App.jsx                   # Main layout and routing
Γöé   Γö£ΓöÇΓöÇ main.jsx                  # React entry point
Γöé   ΓööΓöÇΓöÇ index.css                 # Tailwind directives and custom CSS
Γö£ΓöÇΓöÇ .env                          # Environment variables (not committed)
Γö£ΓöÇΓöÇ index.html
Γö£ΓöÇΓöÇ package.json
Γö£ΓöÇΓöÇ tailwind.config.js
ΓööΓöÇΓöÇ vite.config.js
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Runs at http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
OPENAI_API_KEY=sk-proj-your-key-here
```

The OpenAI key is used server-side only via the `/api/chat` serverless function. It is never exposed to the browser.

For deployment on Vercel, add `OPENAI_API_KEY` under Project Settings > Environment Variables, then redeploy.

---

## AI Assistant (Copilot)

The portfolio includes a built-in AI chat panel that answers questions about Asmita's projects, experience, skills, and background.

- Powered by `gpt-4o-mini` via a serverless Vercel function at `/api/chat`
- Free message limit enforced via `localStorage` (per browser, per device)
- After the free limit, a retro dino game modal appears ΓÇö score 50 points to unlock bonus messages, or support via Buy Me a Coffee
- Chat logs are silently sent to email via Formspree after each response (no login required from the visitor)
- Draggable left edge to resize the panel (260px to 520px)
- Fully scroll-isolated ΓÇö the main page does not scroll when using the chat

---

## Terminal Commands

Open the terminal via the Terminal menu or the bottom status bar, then try:

```
help              list all available commands
ls                list files in the explorer
cat projects.js   open a file in the editor
open about.html   same as cat
whoami            show personal info
git log           see recent commits
python --version  Python 3.11.0
clear             clear the terminal
```

---

## Customisation

All portfolio data lives in `src/data/index.js`. Update:

- `ME` ΓÇö name, role, email, social links
- `PROJECTS` ΓÇö project cards
- `EXPERIENCE` ΓÇö work history timeline
- `SKILLS` ΓÇö skill groups and levels
- `EDUCATION` ΓÇö academic background
- `TYPEWRITER_LINES` ΓÇö animated text on the home page

---

## Deployment

Vercel (recommended):

```bash
npm i -g vercel
vercel
```

Add `OPENAI_API_KEY` to Vercel environment variables after deploying. The `/api/chat.js` file is automatically detected as a serverless function by Vercel.

---

## Tech Stack

React, Vite, Tailwind CSS v3, OpenAI API (gpt-4o-mini), Vercel Serverless Functions, Formspree
