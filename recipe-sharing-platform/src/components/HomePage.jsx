import { useState, useEffect } from "react";
import recipeData from "../data.json";
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-500">🍽️ RecipeShare</h1>
          <nav className="text-sm text-gray-500 font-medium space-x-6">
            <a href="/" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="/explore" className="hover:text-orange-500 transition-colors">Explore</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          Discover Delicious Recipes
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Browse community-shared recipes from around the world. Find your next favourite meal.
        </p>
      </section>

      {/* Recipe Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-700">
              All Recipes ({recipes.length})
            </h3>
            <Link
              to="/add-recipe"
              className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-orange-600 transition-colors"
            >
              + Add Recipe
            </Link>
          </div>
       

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8
        ">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="
                bg-white
                rounded-2xl
                shadow-md
                overflow-hidden
                flex flex-col
                transform transition-all duration-300
                hover:scale-105
                hover:shadow-xl
              "
            >
              {/* Card Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    hover:scale-110
                  "
                />
                {/* Badge */}
                <span className="
                  absolute top-3 left-3
                  bg-orange-500 text-white
                  text-xs font-semibold
                  px-2 py-1 rounded-full
                ">
                  Recipe #{recipe.id}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-2 leading-snug">
                  {recipe.title}
                </h2>
                <p className="text-gray-500 text-sm flex-grow leading-relaxed">
                  {recipe.summary}
                </p>

                {/* Card Footer */}
                <div className="mt-5">
                  <a
                    href={`/recipe/${recipe.id}`}
                    className="
                      block text-center
                      bg-orange-500 text-white
                      text-sm font-semibold
                      py-2 rounded-xl
                      hover:bg-orange-600
                      transition-colors duration-200
                    "
                  >
                    View Recipe →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-8 border-t border-gray-200">
        © 2026 RecipeShare. Made with ❤️ and Tailwind CSS by Oladepo Abdulbaki Opeyemi <a href="mailto:abdoladepo@gmail.com" className="text-orange-500 hover:underline">abdoladepo@gmail.com</a>.
      </footer>
    </div>
  );
}