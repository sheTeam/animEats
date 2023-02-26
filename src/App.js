import './App.css';
import logo from "./animEats_1.png"
import naruto from "./naruto.jpeg"
import yuri from "./yuri.png"
import tanjiro from "./tanjiro.jpeg"
import erza from "./erza.jpeg"
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
                  <img id="naruto" src={narutomore} alt="Naruto"onclick="myfunction()"/>
                  //<a href="https://pen-online.com/food/recipe-for-ichiraku-ramen-from-naruto-by-danielle-baghernejad/"> <button onClick={naruto}>Favorite Food Recipe: Ramen</button></a>
              </div>
              <div class="column">
                <div class = "content">
                <img src={yuri} alt="Yuri" /></div>
                <a href="yuri.html" class="button">Favorite Food Recipe: Katsudon</a>
              </div>
              <div class="column">
                <div class = "content">
                <img src={tanjiro} alt="Tanjiro" /></div>
                <a href="tanjiro.html" class="button">Favorite Food Recipe: Onigiri</a>
              </div>
              <div class="column">
                <div class = "content">
                <img src={erza} alt="Erza" /></div>
                <a href="erza.html" class="button">Favorite Food Recipe: Cake</a>
              </div>
            </div>
          </body>
      </main> 
  );
}

export default App;