# 🍽️ Recipe Sharing Platform

**RecipeShare: Your Culinary Community Platform**

## Overview
RecipeShare is a modern, responsive frontend application built with React and Vite, designed to serve as the user interface for a collaborative recipe-sharing platform. It leverages Tailwind CSS for rapid and consistent styling, providing a sleek and intuitive experience for users to discover and share culinary creations.


🔗 **Live Demo:** [recipe-sharing-platform-orpin.vercel.app](https://recipe-sharing-platform-orpin.vercel.app)

---

## 📸 Features

- 🏠 **Home Page** — Browse all recipes in a responsive card grid
- 🔍 **Recipe Detail Page** — View ingredients and step-by-step cooking instructions
- ➕ **Add Recipe Form** — Submit new recipes with front-end form validation
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- ⚡ **Fast Builds** — Powered by Vite for instant hot module reloading
- **Intuitive User Interface**: Built with React for a dynamic and engaging user experience.
- **Responsive Design**: Utilizes Tailwind CSS to ensure a seamless experience across all devices and screen sizes.
- **Fast Development Workflow**: Powered by Vite for incredibly fast hot module replacement (HMR) and development server startup.
- **Modular Component Architecture**: Organizes UI into reusable React components for maintainability and scalability.
- **Modern Styling**: Incorporates utility-first CSS with Tailwind CSS for highly customizable and efficient styling.

---

## 🛠️ Technologies Used

| Technology | Description | Link |
| :--------- | :---------- | :--- |
| **React** | A JavaScript library for building user interfaces. | [React](https://react.dev/) |
| **Vite** | A next-generation frontend tooling that provides an extremely fast development experience. | [Vite](https://vitejs.dev/) |
| **Tailwind CSS** | A utility-first CSS framework for rapidly building custom designs. | [Tailwind CSS](https://tailwindcss.com/) |
| **ESLint** | A pluggable linting utility for JavaScript and JSX. | [ESLint](https://eslint.org/) |
| **PostCSS** | A tool for transforming CSS with JavaScript plugins. | [PostCSS](https://postcss.org/) |
| **Autoprefixer** | A PostCSS plugin to parse CSS and add vendor prefixes. | [Autoprefixer](https://github.com/postcss/autoprefixer) |

---

## 📁 Project Structure

```
recipe-sharing-platform/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── HomePage.jsx          # Recipe card grid + hero section
│   │   ├── RecipeDetail.jsx      # Ingredients + cooking instructions
│   │   └── AddRecipeForm.jsx     # Validated recipe submission form
│   ├── data.json                 # Mock recipe data
│   ├── App.jsx                   # Route definitions
│   ├── main.jsx                  # React app entry point
│   └── index.css                 # Global styles + Tailwind directives
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json                   # Vercel routing config for React Router
└── vite.config.js
```

---

## Contributing
I welcome contributions to the RecipeShare project! If you'd like to contribute, please follow these guidelines:

-   ✨ **Fork the repository**: Start by creating your own fork of the project.
-   🌿 **Create a new branch**: Name your branch descriptively (e.g., `feature/add-recipe-card`, `fix/login-bug`).
-   ✍️ **Make your changes**: Implement your features or bug fixes.
-   🧪 **Test your changes**: Ensure your code works as expected and doesn't introduce new issues.
-   ⬆️ **Commit your changes**: Write clear and concise commit messages.
-   📬 **Open a Pull Request**: Submit your changes for review.

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/recipe-sharing-platform.git
cd recipe-sharing-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in your browser**
```
http://localhost:5173
```

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for errors |

---

## 🗺️ Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `HomePage` | Displays all recipe cards |
| `/recipe/:id` | `RecipeDetail` | Shows full recipe details |
| `/add-recipe` | `AddRecipeForm` | Form to submit a new recipe |

---

## 📋 Recipe Data Structure

Each recipe in `data.json` follows this structure:

```json
{
  "id": 1,
  "title": "Spaghetti Carbonara",
  "summary": "A classic Italian pasta dish.",
  "image": "https://images.unsplash.com/...",
  "time": "30 mins",
  "servings": 4,
  "difficulty": "Medium",
  "ingredients": [
    "400g spaghetti",
    "200g pancetta"
  ],
  "steps": [
    "Boil a large pot of salted water.",
    "Fry the pancetta until crispy."
  ]
}
```

---

## ✅ Form Validation Rules

The Add Recipe form validates the following before submission:

- Recipe title cannot be empty
- Summary cannot be empty
- At least **2 ingredients** required (one per line)
- At least **1 cooking step** required
- Cooking time cannot be empty
- Servings must be a number greater than 0

---

## 🌍 Deployment

The app is deployed on **Vercel**. The `vercel.json` file handles client-side routing so page refreshes work correctly on all routes:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

To deploy your own version:
```bash
npm install -g vercel
vercel --prod
```

---

## 🙌 Acknowledgements

- [Open Trivia Database](https://opentdb.com/) — free quiz API
- [Unsplash](https://unsplash.com/) — free recipe images
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
- [React Router](https://reactrouter.com/) — client-side routing

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## Author Info
**Oladepo Abdulbaki Opeyemi**
(https://github.com/SireTallest)
- **LinkedIn** - (https://www.linkedin.com/in/abdulbaki-oladepo-4998b6213/)
- **Twitter** - (https://x.com/sire_tallest)


---
[![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white&style=flat-square)](https://eslint.org/)
[![Project Status](https://img.shields.io/badge/Status-Under%20Development-yellow?style=flat-square)](https://github.com/SireTallest/Social-links-froontend.io.git)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
