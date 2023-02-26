import './keys';
import './App.css';
// import logo from '.logo/svg';
// <img src={logo} alt="animEats_baby.svg" />
import Axios from "axios";
import RecipeTile from './RecipeTile';
import { useState } from "react";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);


  const YOUR_APP_ID = "8d941e23";
  const YOUR_APP_KEY = "6ba4ea10183b47bb358513d52b0ac743";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1 onClick={getRecipes}>Anime-Inspired Food Recipes</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input type="text" className="app_input" placeholder="Enter Ingredient"
        value={query} onChange={(e) => setquery(e.target.value)}/>
        <input className="app_submit" type="submit" value="Search"/>
      </form>

      <div className="app_recipes">
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe}/>;
        })}

      </div>
    </div>
    
  );
}

export default App;
