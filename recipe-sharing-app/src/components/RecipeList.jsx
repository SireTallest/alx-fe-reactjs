import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  if (recipes.length === 0) {
    return <p className="text-gray-500 p-4">No recipes available.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Recipes</h2>

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border p-4 rounded mb-4 shadow-sm"
        >
          <Link to={`/recipe/${recipe.id}`}>
            <h3 className="text-lg font-semibold">
              {recipe.title}
            </h3>
          </Link>

          <p className="text-gray-600">{recipe.description}</p>

          <button
            onClick={() => toggleFavorite(recipe.id)}
            className="mt-2 px-3 py-1 rounded bg-blue-500 text-white"
          >
            {favorites.includes(recipe.id)
              ? "❤️ Remove Favorite"
              : "🤍 Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
