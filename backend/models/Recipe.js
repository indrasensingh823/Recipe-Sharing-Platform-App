const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    image: { type: String } // Base64 or image URL
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
