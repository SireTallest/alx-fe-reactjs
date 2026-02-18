import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      <h1 className="text-3xl font-bold text-center">
        Recipe Sharing App
      </h1>

      <AddRecipeForm />

      <RecipeList />

      <FavoritesList />

      <RecommendationsList />

    </div>
  );
}

export default App;
