import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddRecipeForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    ingredients: '',
    steps: '',
    time: '',
    servings: '',
    difficulty: 'Easy',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Update state as user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear that field's error as soon as user starts fixing it
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }

    if (!formData.summary.trim()) {
      newErrors.summary = 'A short summary is required.';
    }

    const ingredientList = formData.ingredients
      .split('\n')
      .map((i) => i.trim())
      .filter((i) => i !== '');

    if (ingredientList.length < 2) {
      newErrors.ingredients = 'Please enter at least 2 ingredients (one per line).';
    }

    const stepList = formData.steps
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => s !== '');

    if (stepList.length < 1) {
      newErrors.steps = 'Please enter at least one cooking step.';
    }

    if (!formData.time.trim()) {
      newErrors.time = 'Cooking time is required.';
    }

    if (!formData.servings || formData.servings < 1) {
      newErrors.servings = 'Please enter a valid number of servings.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // All good — show success message
    setSubmitted(true);

    // In a real app you would POST to an API here. For this demo, we'll just log the data and redirect home.
    console.log('New Recipe Submitted:', {
      ...formData,
      ingredients: formData.ingredients.split('\n').filter((i) => i.trim()),
      steps: formData.steps.split('\n').filter((s) => s.trim()),
    });

    // Redirect home after 2 seconds
    setTimeout(() => navigate('/'), 2000);
  };

  // Reusable error message component
  const ErrorMsg = ({ field }) =>
    errors[field] ? (
      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
        ⚠️ {errors[field]}
      </p>
    ) : null;

  // Reusable label component
  const Label = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-700 mb-1">
      {children}
    </label>
  );

  // Shared input classes
  const inputClass = (field) =>
    `w-full px-4 py-2.5 rounded-xl border text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-500">🍽️ RecipeShare</h1>
          <nav className="text-sm text-gray-500 font-medium space-x-6">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <a href="/explore" className="hover:text-orange-500 transition-colors">Explore</a>
          </nav>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">

        {/* Success Banner */}
        {submitted && (
          <div className="mb-6 bg-green-100 border border-green-300 text-green-700 rounded-2xl px-6 py-4 text-sm font-medium flex items-center gap-3">
            ✅ Recipe submitted successfully! Redirecting you home...
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* Card Header */}
          <div className="bg-orange-500 px-8 py-6">
            <h2 className="text-2xl font-extrabold text-white">Add a New Recipe</h2>
            <p className="text-orange-100 text-sm mt-1">
              Share your favourite dish with the community.
            </p>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} noValidate className="px-8 py-8 space-y-6">

            {/* Title */}
            <div>
              <Label htmlFor="title">Recipe Title *</Label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="e.g. Spaghetti Carbonara"
                value={formData.title}
                onChange={handleChange}
                className={inputClass('title')}
              />
              <ErrorMsg field="title" />
            </div>

            {/* Summary */}
            <div>
              <Label htmlFor="summary">Short Summary *</Label>
              <input
                id="summary"
                name="summary"
                type="text"
                placeholder="A one-line description of the dish..."
                value={formData.summary}
                onChange={handleChange}
                className={inputClass('summary')}
              />
              <ErrorMsg field="summary" />
            </div>

            {/* Time + Servings side by side on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="time">Cooking Time *</Label>
                <input
                  id="time"
                  name="time"
                  type="text"
                  placeholder="e.g. 30 mins"
                  value={formData.time}
                  onChange={handleChange}
                  className={inputClass('time')}
                />
                <ErrorMsg field="time" />
              </div>
              <div>
                <Label htmlFor="servings">Servings *</Label>
                <input
                  id="servings"
                  name="servings"
                  type="number"
                  min="1"
                  placeholder="e.g. 4"
                  value={formData.servings}
                  onChange={handleChange}
                  className={inputClass('servings')}
                />
                <ErrorMsg field="servings" />
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <Label htmlFor="difficulty">Difficulty</Label>
              <select
                id="difficulty"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className={inputClass('difficulty')}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            {/* Ingredients */}
            <div>
              <Label htmlFor="ingredients">Ingredients * (one per line)</Label>
              <textarea
                id="ingredients"
                name="ingredients"
                rows={6}
                placeholder={`400g spaghetti\n200g pancetta\n4 large eggs\n...`}
                value={formData.ingredients}
                onChange={handleChange}
                className={`${inputClass('ingredients')} resize-none leading-relaxed`}
              />
              <ErrorMsg field="ingredients" />
              <p className="text-xs text-gray-400 mt-1">Minimum 2 ingredients required.</p>
            </div>

            {/* Steps */}
            <div>
              <Label htmlFor="steps">Preparation Steps * (one per line)</Label>
              <textarea
                id="steps"
                name="steps"
                rows={7}
                placeholder={`Boil a large pot of salted water.\nFry the pancetta until crispy.\n...`}
                value={formData.steps}
                onChange={handleChange}
                className={`${inputClass('steps')} resize-none leading-relaxed`}
              />
              <ErrorMsg field="steps" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full py-3 rounded-xl
                bg-orange-500 hover:bg-orange-600
                text-white font-bold text-sm
                transition-colors duration-200
                shadow-md hover:shadow-lg
                active:scale-95
              "
            >
              🍳 Submit Recipe
            </button>

            {/* Back link */}
            <p className="text-center text-sm text-gray-400">
              Changed your mind?{' '}
              <Link to="/" className="text-orange-500 hover:underline font-medium">
                Go back home
              </Link>
            </p>

          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-8 border-t border-gray-200 mt-6">
        © 2026 RecipeShare. Made with ❤️ and Tailwind CSS by Oladepo Abdulbaki Opeyemi <a href="mailto:abdoladepo@gmail.com" className="text-orange-500 hover:underline">abdoladepo@gmail.com</a>.
      </footer>
    </div>
  );
}