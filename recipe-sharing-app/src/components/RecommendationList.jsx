import { useEffect } from "react";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return <p className="text-gray-500">No recommendations yet.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Recommended For You
      </h2>

      {recommendations.map((recipe) => (
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

export default RecommendationsList;
