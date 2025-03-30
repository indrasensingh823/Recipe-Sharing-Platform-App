import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import Footer from "../component/Footer";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [manualRecipes, setManualRecipes] = useState([
    {
      id: "manual1",
      title: "Spaghetti Carbonara",
      image: "https://assets.unileversolutions.com/recipes-v2/109396.jpg",
      instructions:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      category: "Dinner",
    },
    {
      id: "manual2",
      title: "Vegan Buddha Bowl",
      image: "https://simplyceecee.co/wp-content/uploads/2018/07/veganbuddhabowl-2.jpg",
      instructions:
        "A nourishing bowl packed with fresh vegetables, grains, and a creamy dressing.",
      category: "Vegan",
    },

    {
      "id": "breakfast1",
      "title": "Pancakes",
      "image": "https://hips.hearstapps.com/hmg-prod/images/best-homemade-pancakes-index-640775a2dbad8.jpg?crop=0.8890503582601677xw:1xh;center,top&resize=1200:*",
      "instructions": "Fluffy pancakes served with maple syrup and fresh fruits.",
      "category": "Breakfast"
    },
    {
      "id": "breakfast2",
      "title": "Omelette",
      "image": "https://www.craftycookingbyanna.com/wp-content/uploads/2018/01/omelet_Food_Photo-720x720.jpg",
      "instructions": "A classic omelette with cheese, tomatoes, and herbs.",
      "category": "Breakfast"
    },
    {
      "id": "breakfast3",
      "title": "Avocado Toast",
      "image": "https://www.allrecipes.com/thmb/8NccFzsaq0_OZPDKmf7Yee-aG78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AvocadoToastwithEggFranceC4x3-bb87e3bbf1944657b7db35f1383fabdb.jpg",
      "instructions": "Toasted bread topped with avocado, olive oil, and seasonings.",
      "category": "Breakfast"
    },
    {
      "id": "breakfast4",
      "title": "Smoothie Bowl",
      "image": "https://img.taste.com.au/KZJZuz9r/taste/2016/11/fruity-smoothie-bowl-106970-1.jpeg",
      "instructions": "A thick fruit smoothie topped with granola and nuts.",
      "category": "Breakfast"
    },
    {
      "id": "breakfast5",
      "title": "French Toast",
      "image": "https://www.rachelcooks.com/wp-content/uploads/2022/04/french-toast-1500-R-14-square.jpg",
      "instructions": "Bread slices soaked in eggs and milk, then pan-fried.",
      "category": "Breakfast"
    },
    {
      "id": "breakfast6",
      "title": "Breakfast Burrito",
      "image": "https://hips.hearstapps.com/hmg-prod/images/breakfast-burrito-index-66a7e23ca6c89.jpg?crop=0.669xw:1.00xh;0.261xw,0&resize=1200:*",
      "instructions": "A tortilla wrap filled with eggs, cheese, and veggies.",
      "category": "Breakfast"
    },
    {
      "id": "breakfast7",
      "title": "Granola Parfait",
      "image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/3/2/2/FNM_040115-Granola-Parfaits-Recipe_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1425500500897.webp",
      "instructions": "Layers of yogurt, granola, and fresh fruits.",
      "category": "Breakfast"
    },
    {
      "id": "breakfast8",
      "title": "Egg Benedict",
      "image": "https://www.jocooks.com/wp-content/uploads/2020/08/eggs-benedict-1-13.jpg",
      "instructions": "Poached eggs on an English muffin with hollandaise sauce.",
      "category": "Breakfast"
    },
    {
      "id": "breakfast9",
      "title": "Chia Pudding",
      "image": "https://www.eatingbirdfood.com/wp-content/uploads/2023/12/chia-pudding-angled-500x500.jpg",
      "instructions": "Chia seeds soaked in milk with honey and fruits.",
      "category": "Breakfast"
    },
    {
      "id": "breakfast10",
      "title": "Banana Pancakes",
      "image": "https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Fortisip-Banana-Pancakes-1-scaled.jpeg",
      "instructions": "Healthy pancakes made with bananas and oats.",
      "category": "Breakfast"
    },
  
    {
      "id": "vegan1",
      "title": "Vegan Buddha Bowl",
      "image": "https://simplyceecee.co/wp-content/uploads/2018/07/veganbuddhabowl-2.jpg",
      "instructions": "A nourishing bowl packed with fresh vegetables, grains, and a creamy dressing.",
      "category": "Vegan"
    },
    {
      "id": "vegan2",
      "title": "Lentil Soup",
      "image": "https://www.noracooks.com/wp-content/uploads/2018/11/square-1-500x500.jpg",
      "instructions": "A hearty soup made with lentils, tomatoes, and spices.",
      "category": "Vegan"
    },
    {
      "id": "vegan3",
      "title": "Quinoa Salad",
      "image": "https://www.eatingbirdfood.com/wp-content/uploads/2024/04/easy-quinoa-salad-hero-cropped.jpg",
      "instructions": "A fresh salad with quinoa, veggies, and a lemon dressing.",
      "category": "Vegan"
    },
    {
      "id": "vegan4",
      "title": "Vegan Stir-Fry",
      "image": "https://www.noracooks.com/wp-content/uploads/2021/08/sq-3.jpg",
      "instructions": "A mix of colorful vegetables stir-fried with soy sauce.",
      "category": "Vegan"
    },
    {
      "id": "vegan5",
      "title": "Vegan Tacos",
      "image": "https://www.acouplecooks.com/wp-content/uploads/2022/01/Vegan-Tacos-013.jpg",
      "instructions": "Tacos filled with seasoned beans and fresh toppings.",
      "category": "Vegan"
    },
  
    {
      "id": "desserts1",
      "title": "Chocolate Cake",
      "image": "https://assets.winni.in/product/primary/2023/4/84499.jpeg?dpr=2&w=220",
      "instructions": "A rich and moist chocolate cake topped with ganache.",
      "category": "Desserts"
    },
    {
      "id": "desserts2",
      "title": "Apple Pie",
      "image": "https://www.simplyrecipes.com/thmb/SeOrwAcn5dAuazvh-AhlrDbAd24=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Apple-Pie-LEAD-04-11db861782aa4ebdb5ef9948125ef0ef.jpg",
      "instructions": "A classic apple pie with a buttery crust.",
      "category": "Desserts"
    },
    {
      "id": "desserts3",
      "title": "Cheesecake",
      "image": "https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg",
      "instructions": "A creamy cheesecake with a biscuit base.",
      "category": "Desserts"
    },
    {
      "id": "desserts4",
      "title": "Brownies",
      "image": "https://www.allrecipes.com/thmb/GSiVp8ogaeOvWDua-AJ_S9QaN_s=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-9599-Quick-Easy-Brownies-ddmfs-4x3-697df57aa40a45f8a7bdb3a089eee2e5.jpg",
      "instructions": "Fudgy chocolate brownies with a crispy top.",
      "category": "Desserts"
    },
    {
      "id": "desserts5",
      "title": "Mango Ice Cream",
      "image": "https://icecreamfromscratch.com/wp-content/uploads/2021/12/Mango-Ice-Cream-1.2-720x720.jpg",
      "instructions": "Homemade mango ice cream with fresh fruit puree.",
      "category": "Desserts"
    },
  
    {
      "id": "quickbites1",
      "title": "Garlic Bread",
      "image": "https://thekittchen.com/wp-content/uploads/2017/01/The-Best-Garlic-Bread-5.jpg",
      "instructions": "Crispy garlic butter bread slices.",
      "category": "Quick Bites"
    },
 
    {
      "id": "quickbites3",
      "title": "Bruschetta",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg",
      "instructions": "Toasted bread with tomatoes and basil.",
      "category": "Quick Bites"
    },
    {
      "id": "quickbites4",
      "title": "French Fries",
      "image": "https://www.awesomecuisine.com/wp-content/uploads/2009/05/french-fries.jpg",
      "instructions": "Crispy deep-fried potato fries.",
      "category": "Quick Bites"
    },
    {
      "id": "quickbites5",
      "title": "Spring Rolls",
      "image": "https://saltedmint.com/wp-content/uploads/2024/01/Vegetable-Spring-Rolls-4-500x375.jpg",
      "instructions": "Crispy rolls filled with veggies.",
      "category": "Quick Bites"
    },
  
    {
      "id": "dinner1",
      "title": "Spaghetti Carbonara",
      "image": "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-mediumSquareAt3X-v2.jpg",
      "instructions": "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      "category": "Dinner"
    },
    {
      "id": "dinner2",
      "title": "Grilled Salmon",
      "image": "https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg",
      "instructions": "Salmon fillet grilled with lemon and herbs.",
      "category": "Dinner"
    },
    {
      "id": "dinner3",
      "title": "Chicken Curry",
      "image": "https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg",
      "instructions": "A spicy and flavorful chicken curry.",
      "category": "Dinner"
    },
    {
      "id": "dinner4",
      "title": "Vegetable Stir Fry",
      "image": "https://s.lightorangebean.com/media/20240914144639/Thai-Vegetable-Stir-Fry-with-Lime-and-Ginger_done.png",
      "instructions": "A mix of fresh vegetables stir-fried in soy sauce.",
      "category": "Dinner"
    },

    {
      "id": "indianbreakfast1",
      "title": "Aloo Paratha",
      "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/aloo-paratha-recipe-500x500.jpg",
      "instructions": "A stuffed Indian flatbread filled with spiced mashed potatoes, served with butter and curd.",
      "category": "Breakfast"
    },
    {
      "id": "indianbreakfast2",
      "title": "Idli Sambar",
      "image": "https://maharajaroyaldining.com/wp-content/uploads/2024/03/Idli-Sambar-3.webp",
      "instructions": "Steamed rice cakes served with lentil soup and coconut chutney.",
      "category": "Breakfast"
    },
    {
      "id": "indianbreakfast3",
      "title": "Poha",
      "image": "https://www.spiceupthecurry.com/wp-content/uploads/2014/04/batata-poha-recipe-1-500x500.jpg",
      "instructions": "Flattened rice cooked with onions, peanuts, and mild spices.",
      "category": "Breakfast"
    },
    {
      "id": "indianbreakfast4",
      "title": "Dosa with Chutney",
      "image": "https://pipingpotcurry.com/wp-content/uploads/2020/11/Dosa-recipe-plain-sada-dosa-Piping-Pot-Curry-500x500.jpg",
      "instructions": "A crispy South Indian crepe made from fermented rice and lentil batter, served with coconut chutney and sambar.",
      "category": "Breakfast"
    },
    {
      "id": "indianbreakfast5",
      "title": "Upma",
      "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/07/upma-recipe.jpg",
      "instructions": "A savory dish made with roasted semolina, vegetables, and tempered with mustard seeds and curry leaves.",
      "category": "Breakfast"
    }
  
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  const filteredRecipes = [...recipes, ...manualRecipes].filter(
    (recipe) =>
      selectedCategory === "All" ||
      recipe.strCategory === selectedCategory ||
      recipe.category === selectedCategory
  );

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Share & Discover Delicious Recipes</h1>
        <input type="text" placeholder="Search for recipes..." className="search-bar" />
        <Link to="/submit" className="submit-link">
          Submit a Recipe
        </Link>
      </section>

      {/* Popular Categories */}
      <section className="categories-section">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          {["All", "Breakfast", "Vegan", "Desserts", "Quick Bites", "Dinner"].map((category) => (
            <div key={category} className="category-card" onClick={() => setSelectedCategory(category)}>
              <h3>{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Latest & Trending Recipes */}
      <section className="recipes-section">
        <h2>Latest & Trending Recipes</h2><br />
        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.idMeal || recipe.id} className="recipe-card">
              <img src={recipe.strMealThumb || recipe.image} alt={recipe.strMeal || recipe.title} />
              <h3>{recipe.strMeal || recipe.title}</h3>
              <p>{(recipe.strInstructions || recipe.instructions).substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      </section>

     {/* Bootstrap Carousel */}
      <div id="carouselExampleAutoplaying" className="carousel slide pt-2" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[
            'img2.png',
            '-banner/944e3912-5973-4b05-a2ce-8654fbdc7f43.png',
            '-banner/171079_PeppermintIceCreamSandwich_Recipe_WebBanner_363x260.png',
            '-banner/230327-Iron-Vegan-Espresso-Banana-Smoothie-Recipe-Blog-Banner.png',
            '-banner/Blog-Banner-_-Food-4-1.png',
            '-banner/Blue-Banner-Spring-Garden-Salad.png',
            '-banner/DD-Page-Banner.png',
            '-banner/Global2025 kent banner blog.png',
            '-banner/Hero-Food-services-Category-page-banner.png',
            '-banner/Nene-Banner.png',
            '-banner/pngtree-recipe-card-vector-png-image_12161945.png',
            '-banner/Recipe-Banner-Img.png',
            '-banner/recipe-banner.png',
            '-banner/recipe-mi-hero-banner-min.png',
          ].map((imgSrc, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={imgSrc} className="d-block w-100" height="400px" alt="carousel" />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* User Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"This platform has completely transformed my cooking game!"</p>
          <span>- Happy Chef</span>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
