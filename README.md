# react-ristretto ☕️

React template, set of modules and guidelines to build fast Single Page Apps without the hassle of SSR, Next, slow dev servers and other Vercel bullshit.

## Stack

The following are the base of ristretto, all configured and installed by default:

-   [React](https://reactjs.org/)
-   [React Router](https://reactrouter.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/): dev server and build
-   [Tailwind CSS](https://tailwindcss.com/): styling
-   [Zustand](https://zustand.surge.sh/): global state management

The following are not installed by default but they are recommended for their use case:

-   [Tanstack Query](https://tanstack.com/): async data fetching and caching
-   [Radix UI](https://radix-ui.com/): headless and accessible UI primitives
-   [React Hook Form](https://react-hook-form.com/): form handling

The template comes with **strict linting and formatting** rules by default, enforced by ESLint and Prettier including all the necessary plugins for TypeScript, React, Vite and Tailwind CSS.

## Project structure

```
spec/
    external APIs schemas and specs
src/
    api/
        external api and hooks (Tanstack)
    assets/
        images, fonts, etc.
    components/
        reusable components
    lib/
        utilities, helpers, types
    hooks/
        custom hooks
    pages/
        pages used in the router
    state/
        global state management (Zustand)
    app.tsx
        routing and providers
    main.tsx
        React entry point
```

## Guidelines

-   Components and pages file names: `kebab-case.tsx`
-   Components and pages folder names: `kebab-case`
-   Other files and folder names: `kebab-case`
-   Component exported function: `PascalCase` (e.g. `PrimaryButton`)
-   Page component naming: `PascalCasePage` (e.g. `LoginPage`)
-   Only use page components in the Router routes
-   Always define custom reusable colors or styles in `tailwind.config.js`
-   All providers and wrappers in `app.tsx`
-   Always use absolute imports (default `@/`, e.g. `@/components`)
