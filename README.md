# I Hari Teja — Portfolio Website (Fixed configs)

This project includes React + Vite + Tailwind + Framer Motion.

## Quick start

1. Node: use Node 18+ (recommended). Check with `node -v`.
2. From project root (folder with package.json):
   ```bash
   npm install
   npm run dev
   ```

## If you hit errors

- If you see syntax errors like `Unexpected token 'export'` or `Cannot use import statement outside a module` for `tailwind.config.js` or `postcss.config.js`:
  - These files are already converted to CommonJS (`module.exports = ...`). If you still see that error, try removing any `type: "module"` from `package.json` or run Node >= 18.
- If Tailwind classes appear not to apply:
  - Ensure `src/index.css` has `@tailwind base; @tailwind components; @tailwind utilities;`.
  - Confirm `tailwind.config.js` `content` paths include `./index.html` and `./src/**/*.{js,jsx}`.
- Clean install if deps are messy:
  ```bash
  rm -rf node_modules package-lock.json
  npm cache clean --force
  npm install
  ```
- If a specific terminal error appears, paste the full error here and I'll fix it for you quickly.
