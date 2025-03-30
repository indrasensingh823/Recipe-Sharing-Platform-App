// Imporiting all required exterl modules

const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('./models/User')
const bcrypt=require('bcryptjs')
const Recipe = require('./models/Recipe'); 

const app=express()
const PORT=3000
app.use(express.json());

//Connecting to DB Atlas
mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("DB connected successfully...")
).catch(
    (err)=>console.log(err)
)

//API landing page http://localhost:3000/
app.get('/',async(req,res)=>{
    try{
        res.send("<h2 style='color:red;text-align:center'>Welcome to the MERN Stack | Week 2 | Backend</h2>")
    }
    catch(err)
    {
        console.log(err)
    }
})

//API Registration Page http://localhost:3000/register
app.post('/register',async(req,res)=>{
    const {username,email,password}=req.body
    try{
        const hashPassword=await bcrypt.hash(password,10)
        const newUser=new User({username,email,password:hashPassword})
        await newUser.save()
        console.log("New user is created....")
        res.json({message: "User Registred.."})
    }
    catch(err)
    {
        console.log(err)
    }
})

//API login 
app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) 
            {
             return res.status(400).json({ message: "Invalid Credentials" });
            }
          res.json({ message: "Login Successful", username: user.username });

    }
    catch(err)
    {
        console.log(err)
    }
})


// Share a Recipe           http://localhost:3000/submit
app.post('/submit', async (req, res) => {
    const { title, ingredients, instructions, image } = req.body;
    try {
        if (!title || !ingredients || !instructions || !image) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newRecipe = new Recipe({ title, ingredients, instructions, image });
        await newRecipe.save();
        console.log("Recipe Shared Successfully....")
        res.status(201).json({ message: "Recipe Shared Successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error sharing recipe" });
    }
});

// Get All Recipes
app.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching recipes" });
    }
});

//Server connection and testing
app.listen(PORT,(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("Server is running on port :"+PORT)
})