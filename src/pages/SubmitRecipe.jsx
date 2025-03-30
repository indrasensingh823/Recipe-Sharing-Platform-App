import React, { useState } from 'react';
import './Home.css';

const SubmitRecipe = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    ingredients: [''],
    instructions: '',
    image: null,
  });

  const commonIngredients = ['Salt', 'Sugar', 'Flour', 'Eggs', 'Milk', 'Butter'];

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const updatedIngredients = [...formData.ingredients];
      updatedIngredients[index] = value;
      setFormData({ ...formData, ingredients: updatedIngredients });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setFormData({ ...formData, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const addIngredient = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ''] });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recipe Submitted:', formData);
    alert('Recipe submitted successfully!');
    setFormData({ title: '', ingredients: [''], instructions: '', image: null });
    setStep(1);
  };

  return (
    <div className="submit-recipe-container">
      <h1>Submit Your Recipe</h1>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div style={{ width: `${(step / 3) * 100}%` }}></div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <label>Recipe Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter recipe title"
            />
            <label>Upload Image:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {formData.image && (
              <div className="image-preview">
                <img src={formData.image} alt="Recipe Preview" />
              </div>
            )}
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Ingredients</h2>
            {formData.ingredients.map((ingredient, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Enter ingredient"
                  list="ingredient-suggestions"
                  required
                />
              </div>
            ))}
            <datalist id="ingredient-suggestions">
              {commonIngredients.map((item, idx) => (
                <option key={idx} value={item} />
              ))}
            </datalist>
            <button type="button" onClick={addIngredient}>+ Add Ingredient</button>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <label>Instructions:</label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              required
              placeholder="Write detailed cooking steps..."
            />
            <button type="button" onClick={prevStep}>Back</button>
            <button type="submit">Submit Recipe</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SubmitRecipe;
