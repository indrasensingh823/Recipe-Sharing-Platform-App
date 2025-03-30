// RecipeDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Home.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };
    fetchRecipeDetail();
  }, [id]);

  const copyIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
      }
    }
    navigator.clipboard.writeText(ingredients.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-detail-container">
      {/* Recipe Image and Share Button */}
      <div className="recipe-image">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <button className="save-btn">Save Recipe</button>
      </div>

      {/* Recipe Content */}
      <div className="recipe-content">
        <h1>{recipe.strMeal}</h1>
        
        {/* Ingredients */}
        <h2>Ingredients</h2>
        <button onClick={copyIngredients} className="copy-btn">
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
        <ul>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
            recipe[`strIngredient${i}`] && (
              <li key={i}>
                {recipe[`strIngredient${i}`]} - {recipe[`strMeasure${i}`]}
              </li>
            )
          ))}
        </ul>

        {/* Instructions */}
        <h2>Instructions</h2>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;