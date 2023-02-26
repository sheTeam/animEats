import './keys';
import './App.css';
// import logo from '.logo/svg';
// <img src={logo} alt="animEats_baby.svg" />
import Axios from "axios";
import RecipeTile from './RecipeTile';
import { useState } from "react";

function searchfood() {
    const [query, setquery] = useState("");
    const [recipes, setrecipes] = useState([]);
    const [healthLabels, sethealthLabels] = useState("vegan");
  
  
    const YOUR_APP_ID = "8d941e23";
    const YOUR_APP_KEY = "6ba4ea10183b47bb358513d52b0ac743";
  
    var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabels}`;
  
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
          
          <select className="app_healthLabels" >
          <option onClick={() => sethealthLabels("")}>none</option>
            <option onClick={() => sethealthLabels("vegan")}>vegan</option>
            <option onClick={() => sethealthLabels("vegetarian")}>vegetarian</option>
            <option onClick={() => sethealthLabels("vegan")}>vegan</option>
            <option onClick={() => sethealthLabels("gluten-free")}>gluten-free</option>
            <option onClick={() => sethealthLabels("peanut-free")}>peanut-free</option>
            <option onClick={() => sethealthLabels("tree-nut-free")}>tree-nut-free</option>
            <option onClick={() => sethealthLabels("soy-free")}>soy-free</option>
            <option onClick={() => sethealthLabels("dairy-free")}>dairy-free</option>
            <option onClick={() => sethealthLabels("fat-free")}>fat-free</option>
          </select>
        </form>
  
        <div className="app_recipes">
          {recipes.map(recipe => {
            return <RecipeTile recipe={recipe}/>;
          })}
  
        </div>
      </div>
      
    );
}


  export default searchfood;