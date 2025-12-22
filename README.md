# React + TypeScript + Vite
--DESTROY AND REBUILD WITH MINIMAL AI Help

Current problems:
I want to add a set timer length feature.
  I've added the text in the timer html component but i want to make functional

questions?
  why vite?
  -vite is very fast for web applications to display themselves and the rate at which it updates is much faster. its also compatible with quite a few frameworks so it can work smoothly.

  typescript benefits versus javascript?
  In this example that is a small project, I would say that there no benefits except for maybe access to newer libraries but the goal here is to learn typescript to a good degree. 
  However, the main differences are that it is staticly typed, when excecuted it needs to be transpiled into js code, it checks errors at compile time not at runtime.

  what other alternatives are available to program this app, language wise?
  there are other choices but the ones that stand out for me a relatively inexperienced coder. is using vanilla js because it help you get a great handle on making the components needed. 
  react is good because itll be easier to make it quickly because those components are already integrated in the framework.
  I found mention of svelte to learn more about writing clean code so we'll see. 






This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


I dont really unders

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
