# AppLab Landing Page

A React implementation of a product landing page created as a frontend coding challenge. The project focuses on component composition, client-side routing, reusable data-driven UI, and translating a visual design into a working interface.

## Highlights

- React 17 single-page application
- React Router v6 navigation
- Reusable, data-driven feature and partner components
- Accessible route-level content pages
- Testing Library coverage for the application shell and legacy routes
- GitHub Actions checks for tests and production builds
- Web Vitals integration

## Tech Stack

- React 17
- React Router DOM 6
- Create React App / React Scripts
- Testing Library
- CSS
- Font Awesome

## Project Structure

```text
public/
  index.html
  manifest.json
src/
  components/       Reusable UI components and navigation data
  pages/            Route-level pages and page assets
  App.jsx           Application shell and route configuration
  App.test.js       Application-level UI tests
  index.js          React entry point
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm

### Installation

```bash
git clone https://github.com/Ai7mn/challange.git
cd challange
npm ci
```

### Development

```bash
npm start
```

The development server runs on `http://localhost:3000` by default.

### Tests

```bash
npm test -- --watchAll=false
```

### Production Build

```bash
npm run build
```

## Engineering Notes

The repository is intentionally small, but the implementation follows a few maintainability principles:

- route configuration lives in the application shell;
- repeated UI is rendered from structured data instead of duplicated markup;
- internal navigation uses React Router links;
- stable IDs are used for React list keys;
- legacy misspelled URLs redirect to their corrected routes;
- semantic labels and descriptive alternative text improve accessibility;
- automated checks validate both tests and the production build.

## Design Credit

This project implements the AppLab landing-page design exercise. Visual assets and original design credit remain with their respective creator(s).

## License

This repository is provided for portfolio and educational purposes. Third-party design assets may be subject to their original licenses.
