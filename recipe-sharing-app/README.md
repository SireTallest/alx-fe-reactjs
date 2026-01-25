# Recipe Sharing Application 🍳

## Overview
This is a modern, high-performance web application designed for home cooks and culinary enthusiasts to manage and organize their personal recipes. Built with the latest React 19 features and powered by Zustand for efficient state management, the project focuses on speed, responsiveness, and a clean user interface.

## Features
- **Recipe Management**: Easily add, view, and organize your favorite dishes.
- **Global State Control**: Utilizes Zustand for a lightweight and scalable approach to handling application data.
- **Blazing Fast Development**: Leverages Vite and Rolldown for near-instant builds and Hot Module Replacement (HMR).
- **Modern Architecture**: Implements a component-driven design for better maintainability and code reusability.

## Installation
To get this project running on your local machine, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SireTallest/alx-fe-reactjs.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd recipe-sharing-app
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

## Usage
After starting the development server, open your browser to the local address provided (usually `http://localhost:5173`). 

- **Adding Recipes**: Use the `AddRecipeForm` component to input recipe details.
- **Viewing Recipes**: The `RecipeList` component will automatically update to reflect any new additions or changes to your recipe collection.
- **State Flow**: The application uses a centralized store, meaning your data remains consistent across different components without the need for complex prop drilling.

## Technologies Used

| Technology | Purpose |
| :--- | :--- |
| [React 19](https://react.dev/) | UI library for building the interactive interface |
| [Zustand](https://zustand-demo.pmnd.rs/) | Minimalist state management for handling recipe data |
| [Vite](https://vitejs.dev/) | Modern build tool for high-speed development |
| [ESLint](https://eslint.org/) | Maintaining high code quality and consistency |

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## Author
- **Oladepo Abdulbaki Opeyemi**
