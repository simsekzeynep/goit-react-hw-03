# Phonebook — GoIT React Homework 03

A responsive phonebook built with React, Vite, Formik, Yup, nanoid, react-icons, and CSS Modules.

## Features

- Add contacts with required, 3–50-character validation for both fields.
- Search contacts by name without case sensitivity.
- Delete contacts individually.
- Persist contacts in localStorage, including an intentionally empty list.
- Accessible labels and responsive layout.

## Run locally

Requires a Node.js version supported by Vite (Node 20.19+ or 22.12+).

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run format:check
npm run build
```

If formatting reports differences, use npm run format, then commit the changes.

## Deploy

Import the public GitHub repository into Vercel, select the Vite preset, build with npm run build, and publish the dist directory.

Submit the GitHub repository URL and the live Vercel URL to GoIT.
