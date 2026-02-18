import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  // Get full recipe objects from favorite IDs
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean); // prevents undefined errors

  if (favoriteRecipes.length === 0) {
    return <p className="text-gray-500">No favorite recipes yet.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Favorites</h2>

      {favoriteRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border p-4 rounded mb-3 shadow-sm"
        >
          <h3 className="font-semibold">{recipe.title}</h3>
          <p className="text-gray-600">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
