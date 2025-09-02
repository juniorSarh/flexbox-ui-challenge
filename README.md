

Here’s a polished README you can drop into the repo. If you want a downloadable file, say the word and I’ll save it as `README.md` for you.

---

# Flexbox UI Challenge (React + Vite + TypeScript)

This project implements a small **Flexbox layout challenge** in React. The UI matches the provided mockup while **keeping the original colors** and **structure**, with a tall orange rectangle on the left and two stacked rows of shapes on the right.

The layout is built with **pure Flexbox** (no CSS grid, no arrays) and is **responsive** so it fits inside its container on different screen sizes.

---

## ✨ Final Layout

* **Column 1 (left):** a tall **orange** rectangle that visually spans two rows.
* **Columns 2–4 (right):**

  * **Top row:** red circle, red square, blue rectangle.
  * **Bottom row (inside a bordered box):** sky-blue rectangle, red circle, sky-blue circle.
* Items align to **flex-start** and use `clamp(...)` so they **shrink to fit** smaller containers.

---

## 🧱 Tech Stack

* **React** (TypeScript)
* **Vite** (build/dev server)
* **Inline styles** with CSS sizing helpers (e.g., `clamp`)
* No CSS libraries, no grid systems.

---

## 📁 Project Structure

```
src/
  App.tsx               # main app wrapper (board container)
  App.css               # base layout styles (board/columns/tiles)
  index.css             # global styles from Vite template
  main.tsx              # React root
  components/
    Firstrow.tsx        # left tall orange + right 2 stacked rows
    Middlerow.tsx       # second (bottom) row inside right panel
    Rectangle.tsx       # simple shape components (optional use)
    Square.tsx
    Circle.tsx
```

> In the final layout, we compose **`Firstrow`** and **`Middlerow`** so the bottom row sits **inside** the right panel starting at column 2, right next to the orange rectangle.

---

## ▶️ Getting Started

### Prerequisites

* **Node.js** 18+ recommended
* **npm** (or **pnpm** / **yarn**)

### Install & Run

```bash
npm install
npm run dev
```

The dev server URL will be printed (typically `http://localhost:5173`).

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔧 Key Files

### `src/components/Firstrow.tsx`

* Acts as the **single container** holding:

  * The **orange** rectangle (left column) with `minHeight` ≈ two base rows.
  * The **right panel** (columns 2–4) containing:

    * The **top row** (red circle, red square, blue rectangle).
    * The **`Middlerow`** component (bottom row) **inside** the same right panel.
* Uses `flex`, `gap`, and `minWidth: 0` to avoid overflow and keep everything aligned to **flex-start**.

### `src/components/Middlerow.tsx`

* Renders the **bottom row** inside the right panel (sky-blue rectangle, red circle, sky-blue circle).
* Uses `justifyContent: "flex-start"` and `clamp(...)` widths so items **fit inside the container**.

### `src/App.css` (if using the provided version)

* Provides a simple `.board` container and utility styles for column sizing/spacing.
* You can keep inline styles or migrate to CSS classes as needed.

---

## ⚙️ Customization

You can tweak these constants inside the components:

* **Gaps/spacing**: change the `GAP` number (pixels).
* **Base row height**: currently **150px** for most shapes.
* **Orange column width**: adjust the `clamp(...)` used for the left column in `Firstrow.tsx`.
* **Shape sizes**: adjust the `clamp(...)` sizes to make UI tighter or looser on mobile.

Example (from `Firstrow.tsx`):

```ts
const GAP = 16;                   // space between items
// Orange column:
flex: '0 0 clamp(140px, 22%, 240px)';
// Tile size examples:
width: 'clamp(90px, 12vw, 150px)';
```

---

## ❗ Notes & Constraints

* The project intentionally uses **pure Flexbox** with inline styles for clarity.
* No CSS Grid; no 3rd-party layout libraries.
* The orange rectangle uses height math to **visually span two rows**.
* The right panel contains a **stacked** layout (top/bottom rows) so everything sits in the **same overall row** next to orange.

