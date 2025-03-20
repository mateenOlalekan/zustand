import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Recipe Context
const RecipeContext = createContext();

// Recipe Provider Component
export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  // Load data from localStorage on initial render
  useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    const storedFavorites = localStorage.getItem('favorites');
    
    if (storedRecipes) setRecipes(JSON.parse(storedRecipes));
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
  }, []);
  
  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [recipes, favorites]);
  
  // Add a new recipe
  const addRecipe = (recipe) => {
    const newRecipe = {
      ...recipe,
      id: Date.now().toString(),
    };
    setRecipes([...recipes, newRecipe]);
  };
  
  // Toggle favorite status
  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      setFavorites(favorites.filter(id => id !== recipeId));
    } else {
      setFavorites([...favorites, recipeId]);
    }
  };
  
  // Check if a recipe is favorited
  const isFavorite = (recipeId) => {
    return favorites.includes(recipeId);
  };
  
  return (
    <RecipeContext.Provider value={{ 
      recipes, 
      favorites, 
      addRecipe, 
      toggleFavorite, 
      isFavorite 
    }}>
      {children}
    </RecipeContext.Provider>
  );
};

// Custom hook to use the recipe context
export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
};

// Recipe List Component
const RecipeList = () => {
  const { recipes, toggleFavorite, isFavorite } = useRecipes();
  const [filter, setFilter] = useState('all');
  
  const displayedRecipes = filter === 'favorites' 
    ? recipes.filter(recipe => isFavorite(recipe.id))
    : recipes;
  
  return (
    <div className="p-4">
      <div className="flex mb-4 gap-2">
        <button 
          className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('all')}
        >
          All Recipes
        </button>
        <button 
          className={`px-4 py-2 rounded ${filter === 'favorites' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('favorites')}
        >
          Favorites
        </button>
      </div>
      
      {displayedRecipes.length === 0 ? (
        <p className="text-gray-500">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedRecipes.map(recipe => (
            <div key={recipe.id} className="border rounded p-4 shadow">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
                <button 
                  onClick={() => toggleFavorite(recipe.id)}
                  className="text-yellow-500 focus:outline-none"
                >
                  {isFavorite(recipe.id) ? '★' : '☆'}
                </button>
              </div>
              <p className="text-gray-700 mb-2">{recipe.description}</p>
              <p className="text-sm text-gray-500">Cooking time: {recipe.cookingTime} minutes</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Recipe Form Component
const RecipeForm = () => {
  const { addRecipe } = useRecipes();
  const [form, setForm] = useState({
    name: '',
    description: '',
    cookingTime: '',
    ingredients: [],
    instructions: ''
  });
  const [ingredient, setIngredient] = useState('');
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  
  const addIngredient = () => {
    if (ingredient.trim()) {
      setForm({
        ...form,
        ingredients: [...form.ingredients, ingredient.trim()]
      });
      setIngredient('');
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(form);
    // Reset form
    setForm({
      name: '',
      description: '',
      cookingTime: '',
      ingredients: [],
      instructions: ''
    });
  };
  
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Recipe Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Cooking Time (minutes)</label>
          <input
            type="number"
            name="cookingTime"
            value={form.cookingTime}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Ingredients</label>
          <div className="flex">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              className="flex-1 p-2 border rounded-l"
            />
            <button
              type="button"
              onClick={addIngredient}
              className="bg-blue-500 text-white px-4 py-2 rounded-r"
            >
              Add
            </button>
          </div>
          
          <ul className="mt-2">
            {form.ingredients.map((ing, index) => (
              <li key={index} className="mb-1">
                {ing}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Instructions</label>
          <textarea
            name="instructions"
            value={form.instructions}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

// Main App Component
const RecipeApp = () => {
  return (
    <RecipeProvider>
      <div className="max-w-6xl mx-auto">
        <header className="bg-blue-600 text-white p-4 mb-4">
          <h1 className="text-2xl font-bold">Recipe App</h1>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
          <div className="lg:col-span-1">
            <RecipeForm />
          </div>
          <div className="lg:col-span-2">
            <RecipeList />
          </div>
        </div>
      </div>
    </RecipeProvider>
  );
};

export default RecipeApp;