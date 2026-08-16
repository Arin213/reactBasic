# React Card Exercise

This project is a React card exercise built with Vite. It demonstrates the creation of a card layout with a **Navbar** (header) and a **Main** content section.

## Project Overview

The card exercise involves building a React application with two main components:

1. **Navbar** – The header section of the card
2. **Main** – The main content section containing a list

## Components

### Navbar (`src/Components/Navbar.jsx`)

The Navbar component serves as the **header** of the card. It contains:

- **React Logo** – The `react-logo.png` image file displayed in the header
- **Project Name** – The name written next to the logo with a **dark bluish shape** that is clearly visible and separated from the rest of the header content

The header is designed so that the logo and the name with its dark bluish background stand out distinctly, creating a clear visual separation within the header area.

### Main (`src/Components/Main.jsx`)

The Main component is the **main content section** of the card. It contains:

- A **`<ul>` list** (unordered list) that displays the main content items of the card

## Project Structure

```
learnReactByScrimba/
├── index.html              # HTML entry point with Inter font links
├── index.jsx               # React entry point (renders App)
├── react-logo.png          # React logo image used in the header
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── src/
│   ├── App.jsx             # Root App component (renders Navbar + Main)
│   ├── index.css           # Global styles (Inter font)
│   └── Components/
│       ├── Navbar.jsx      # Header component with React logo and name
│       └── Main.jsx        # Main content component with ul list
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

This will start the Vite development server. Open the provided local URL in your browser to view the card.

## How It Works

1. **`index.jsx`** is the entry point that imports and renders the `App` component.
2. **`App.jsx`** imports and renders both the `Navbar` and `Main` components.
3. **`Navbar.jsx`** renders the header with the React logo (`react-logo.png`) and the project name styled with a dark bluish background shape.
4. **`Main.jsx`** renders the main content area with an unordered list (`<ul>`).

## Styling

The project uses the **Inter** font (weights 400, 600, and 700) loaded from Google Fonts in `index.html`. Global styles are defined in `src/index.css`.

## Key Features

- ✅ React component-based architecture
- ✅ Separate components for Navbar (header) and Main (content)
- ✅ React logo displayed in the header
- ✅ Project name with a dark bluish shape clearly separated in the header
- ✅ Unordered list (`<ul>`) in the main content section
- ✅ Inter font integration from Google Fonts