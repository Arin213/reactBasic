# Learn React by Scrimba

A hands-on, code-along learning repository following the **Scrimba "Learn React"** course. The repo is organized as a 6-part learning path — each part is a self-contained Vite app that lives side-by-side under its own folder, so you can run, break, and compare each stage independently.

> **TL;DR:** A single Vite workspace boots 6 mini React projects, one per part of the course. Open any `part*/index.html` during dev to work on that part in isolation.

---

## 🎯 Learning Path Overview

| # | Part | Folder | Topic | What you'll learn |
|---|---|---|---|---|
| 1 | **Static Pages** | `part1-static-pages/` | JSX, components, props (intro) | Build a static card layout (Navbar + Main) — your first taste of composing React components |
| 2 | **Data-Driven React** | `part2-dataDrivenReact/` | Props, arrays, `.map()`, destructuring | Render a **Travel Journal** from a `data.js` array — pass data through components |
| 3 | **React State** | `part3-react-state/` *(planned)* | `useState`, event handlers, controlled inputs | Build an **Airbnb experiences clone** with clickable counters and image gallery state |
| 4 | **Side Effects** | `part4-side-effects/` *(planned)* | `useEffect`, data fetching, lifecycle | Build a **Movie Watchlist** that fetches from an API and persists to `localStorage` |
| 5 | **Capstone Project — Part 1** | `part5-capstone-1/` *(planned)* | Full integration of parts 1–4 | A larger multi-page app (TBD — e.g. **Quizzical** or **Tenzies**) |
| 6 | **Capstone Project — Part 2** | `part6-capstone-2/` *(planned)* | Polish, deployment, refactoring | Take the capstone to a shippable state — accessibility, responsive CSS, GitHub Pages deploy |

> Parts 5 & 6 are **capstones** — they pull together everything from the earlier parts into a single, portfolio-worthy project.

---

## 📁 Repository Structure

```
learnReactByScrimba/
├── README.md                          # ← you are here
├── package.json                       # single dependency tree for ALL parts
├── vite.config.js                     # auto-discovers every "part*" folder
├── eslint.config.js                   # shared lint rules
├── public/                            # static assets shared across parts
│
├── part1-static-pages/                # Part 1 — static card layout
│   ├── index.html
│   ├── index.jsx                      # React entry; mounts <App />
│   └── src/
│       ├── App.jsx                    # root: <Navbar /> + <Main />
│       ├── index.css                  # global styles (Inter font)
│       └── Components/
│           ├── Navbar.jsx
│           └── Main.jsx
│
├── part2-dataDrivenReact/             # Part 2 — Travel Journal (data-driven)
│   ├── index.html
│   ├── index.jsx
│   └── src/
│       ├── App.jsx                    # maps over data → renders <Entry />
│       ├── data.js                    # array of travel destinations
│       ├── index.css
│       └── components/
│           ├── Header.jsx
│           └── Entry.jsx              # uses {...img} spread for props
│
├── part3-react-state/                 # Part 3 — useState (planned)
├── part4-side-effects/                # Part 4 — useEffect + fetch (planned)
├── part5-capstone-1/                  # Capstone phase 1 (planned)
└── part6-capstone-2/                  # Capstone phase 2 (planned)
```

---

## ⚙️ How the multi-part Vite setup works

The `vite.config.js` uses Node's `fs.readdirSync` to **auto-discover** every folder starting with `part` and registers each as a separate Vite **build input**:

```javascript
const parts = readdirSync(root, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name.startsWith('part'))
  .map((d) => d.name)
```

This means:
- ✅ **Add a new part** by simply creating a `partN-something/` folder with an `index.html` — no config change needed
- ✅ Each part has its own `index.html` and entry point, but they share a single `node_modules` and one dev server
- ✅ During dev, navigate to `/part1-static-pages/`, `/part2-dataDrivenReact/`, etc. (Vite serves them all on the same port)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (Vite 8 requires it)
- **npm** (or pnpm/yarn — examples below use npm)

### Install

```bash
npm install
```

> One install covers all parts — they share the same `package.json` at the root.

### Run the dev server

```bash
npm run dev
```

Vite will print a local URL like `http://localhost:5173`. Open one of these paths to work on a specific part:

```
http://localhost:5173/part1-static-pages/
http://localhost:5173/part2-dataDrivenReact/
http://localhost:5173/part3-react-state/         # once it exists
...
```

### Build for production

```bash
npm run build
```

This builds **all parts** into their respective `dist/part*/` folders in a single pass.

### Lint

```bash
npm run lint
```

---

## 🧠 Concepts by Part

### Part 1 — Static Pages
- What React is and why we use it
- JSX syntax
- Component composition (`App` → `Navbar` + `Main`)
- Importing CSS and assets
- **Project:** A static card with a React logo navbar and a `<ul>`-based list

### Part 2 — Data-Driven React
- Props as a way to pass data down
- Rendering lists with `.map()`
- The `key` prop (and why React needs it)
- Destructuring props (both in the parent and the child)
- Object spread (`{...img}`) to forward props cleanly
- **Project:** **Travel Journal** — header + a list of destinations loaded from `data.js`

### Part 3 — React State *(planned)*
- The `useState` hook
- Event handling (`onClick`, `onChange`)
- Lifting state up
- Conditional rendering
- **Project:** An interactive counter/gallery component

### Part 4 — Side Effects *(planned)*
- The `useEffect` hook
- Dependency arrays
- Data fetching with `fetch` / `axios`
- `localStorage` for persistence
- Cleanup functions
- **Project:** Movie/TV watchlist with API data

### Part 5 — Capstone Phase 1 *(planned)*
- Combining state, props, and effects
- Multi-component architecture
- **Project:** A full app (TBD)

### Part 6 — Capstone Phase 2 *(planned)*
- Accessibility (a11y)
- Responsive design polish
- Build & deploy to GitHub Pages / Netlify
- **Project:** Ship the capstone from Part 5

---

## 🛠️ Tech Stack

| Layer | Choice | Why |
|---|---|---|
| **Framework** | React 19 | Latest stable, covers all hooks used in the course |
| **Build tool** | Vite 8 | Fast HMR, zero-config React, multi-entry builds |
| **Linting** | ESLint 10 + `eslint-plugin-react-hooks` | Catch hook misuse early |
| **Styling** | Plain CSS per part | Keeps focus on React fundamentals, not tooling |
| **Language** | JavaScript (JSX) | Course uses JS — no TS yet |

---

## 📝 Notes & Conventions

- **Folder naming:** `partN-kebab-case-name/` — the `part` prefix is what `vite.config.js` keys off of
- **Component files:** PascalCase (`Entry.jsx`, `Header.jsx`)
- **One part at a time:** Don't try to share components across parts — each part is intentionally isolated
- **Data files:** Live next to components in the same `src/` (e.g. `part2-dataDrivenReact/src/data.js`)
- **No global state library yet:** State is local (`useState`) until Part 4+ where we touch effects

---

## 📚 Course Reference

This repo follows the [**Scrimba Learn React**](https://scrimba.com/learn/learnreact) course by Bob Ziroll. Each `part*` folder maps roughly to one or more course sections.

---

## 📄 License

Personal learning project — feel free to fork and adapt for your own study.