import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import useRecipeStore from "./recipeStore.js";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { recipes, updateRecipe } = useRecipeStore();

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  const [title, setTitle] = useState(recipe?.title || "");
  const [ingredients, setIngredients] = useState(recipe?.ingredients || "");
  const [instructions, setInstructions] = useState(recipe?.instructions || "");

  if (!recipe) {
    return <p className="text-red-500">Recipe not found.</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();   // ✅ now matches exactly

    updateRecipe({
      id: recipe.id,
      title,
      ingredients,
      instructions,
    });

    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Edit Recipe</h2>

      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="border p-2 w-full"
        placeholder="Title"
      />

      <textarea
        value={ingredients}
        onChange={(event) => setIngredients(event.target.value)}
        className="border p-2 w-full"
        placeholder="Ingredients"
      />

      <textarea
        value={instructions}
        onChange={(event) => setInstructions(event.target.value)}
        className="border p-2 w-full"
        placeholder="Instructions"
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Update Recipe
      </button>
    </form>
  );
};

export default EditRecipeForm;