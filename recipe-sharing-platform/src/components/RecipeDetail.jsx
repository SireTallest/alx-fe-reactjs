import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import recipeData from '../data.json';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <p className="text-gray-400 text-xl font-medium">Recipe not found.</p>
    </div>
  );

  const difficultyColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">

        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-orange-500">🍽️ RecipeShare</h1>
            <nav className="text-sm text-gray-500 font-medium space-x-6">
                <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
                <a href="/explore" className="hover:text-orange-500 transition-colors">Explore</a>
            </nav>
            </div>
        </header>

      
        <main className="max-w-5xl mx-auto px-6 py-10">
            {/* Back Button */}
                <Link
                to="/"
                className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:underline mb-8"
                >
                ← Back to All Recipes
                </Link>

                {/* Hero Image + Title Card */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8">
                <div className="relative">
                    <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-72 object-cover"
                    />
                    {/* Overlay gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <h2 className="text-4xl font-extrabold text-white drop-shadow mb-2">
                                {recipe.title}
                            </h2>
                            <p className="text-orange-200 text-sm font-medium">
                                {recipe.summary}
                            </p>
                        </div>
                    </div>

          {/* Quick Info Bar */}
          <div className="flex flex-wrap items-center gap-4 px-6 py-4 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-xl">⏱️</span>
                <span><span className="font-semibold">Time:</span> {recipe.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-xl">🍽️</span>
                <span><span className="font-semibold">Servings:</span> {recipe.servings}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                <span className="text-xl">📊</span>
                <span
                    className={`font-semibold px-3 py-1 rounded-full text-xs ${difficultyColor[recipe.difficulty] || "bg-gray-100 text-gray-600"}`}
                >
                    {recipe.difficulty}
                </span>
                </div>
            </div>
        </div>

        {/* Two Column Layout on Desktop, Single on Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Ingredients — takes up 1 of 3 columns */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
                                🛒 Ingredients
                            </h3>
                            <ul className="space-y-3">
                                {recipe.ingredients.map((ingredient, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-sm text-gray-600 border-b border-gray-100 pb-3 last:border-none last:pb-0"
                                >
                                    <span className="mt-0.5 w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xs font-bold shrink-0">
                                    {index + 1}
                                    </span>
                                    {ingredient}
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                {/* Cooking Steps — takes up 2 of 3 columns */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
                                👨‍🍳 Cooking Steps
                            </h3>
                            <ol className="space-y-5">
                                {recipe.steps.map((step, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    {/* Step Number */}
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
                                    {index + 1}
                                    </span>
                                    {/* Step Text */}
                                    <div className="bg-orange-50 rounded-xl px-5 py-3 text-sm text-gray-700 leading-relaxed flex-grow">
                                    {step}
                                    </div>
                                </li>
                                ))}
                            </ol>
                        </div>
                    </div>

            </div>
        </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-8 mt-10 border-t border-gray-200">
        © 2026 RecipeShare. Made with ❤️ and Tailwind CSS by Oladepo Abdulbaki Opeyemi <a href="mailto:abdoladepo@gmail.com" className="text-orange-500 hover:underline">abdoladepo@gmail.com</a>.
      </footer>
    </div>
  );
}