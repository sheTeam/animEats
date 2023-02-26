import './App.css';
import logo from "./animEats_1.png"
import naruto from "./naruto.jpeg"
import yuri from "./yuri.png"
import tanjiro from "./tanjiro.jpeg"
import erza from "./erza.jpeg"
import morefood from "./morefood.png"
import React from 'react';


function App() {
  return (
    <main>
          <header>
            <img class="logo" src={logo} alt="logo img" />
            <p>
              Pick a character to see how to cook their favorite meal!
            </p>
          </header>
          <body>
            <div class="row">
              <div class="column">
                  <div class = "content">
                  <img src={naruto} alt="Naruto" /></div>
                <a href="https://pen-online.com/food/recipe-for-ichiraku-ramen-from-naruto-by-danielle-baghernejad/" class="button">Favorite Food Recipe: Ramen</a>
              </div>
              <div class="column">
                <div class = "content">
                <img src={yuri} alt="Yuri" /></div>
                <a href="https://thewoksoflife.com/katsudon/" class="button">Favorite Food Recipe: Katsudon</a>
              </div>
              <div class="column">
                <div class = "content">
                <img src={tanjiro} alt="Tanjiro" /></div>
                <a href="https://www.justonecookbook.com/onigiri-rice-balls/" class="button">Favorite Food Recipe: Onigiri</a>
              </div>
              <div class="column">
                <div class = "content">
                <img src={erza} alt="Erza" /></div>
                <a href="https://sugarspunrun.com/vanilla-cake-recipe/" class="button">Favorite Food Recipe: Cake</a>
              </div>
              <div class="column">
                <div class = "content">
                <img src={morefood} alt="morefood" /></div>
                <a href="TBA" class="button">Still looking? Search for a food item here!</a>
              </div>
            </div>
          </body>
      </main> 
  );
}

export default App;