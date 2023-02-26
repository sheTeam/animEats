import React from 'react';
import "./RecipeTile.css";

export default function RecipeTile({ recipe }) {
  return (
    recipe["recipe"]["url"].match() != null && (
    <div className="recipeTile" onClick={() => {
        window.open(recipe["recipe"]["url"]);
    }}
    >
        <img className="recipeTile_img" src={recipe["recipe"]["image"]} alt=""/>
        <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
    </div>
     )
  );
}
