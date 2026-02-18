import { useParams, Link } from "react-router-dom";
import useRecipeStore from './recipeStore.js';
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  if (!recipe) {
    return <p className="text-red-500">Recipe not found.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>

      <h3 className="font-semibold">Ingredients:</h3>
      <p className="mb-4">{recipe.ingredients}</p>

      <h3 className="font-semibold">Instructions:</h3>
      <p className="mb-4">{recipe.instructions}</p>

      <div className="flex gap-4">
        <Link
          to={`/edit/${recipe.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Edit
        </Link>

        <DeleteRecipeButton id={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;
