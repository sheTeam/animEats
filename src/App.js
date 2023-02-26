import './App.css';
import logo from "./animEats_1.png"
import naruto from "./naruto.jpeg"
import yuri from "./yuri.png"
import tanjiro from "./tanjiro.jpeg"
import erza from "./erza.jpeg"
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
                  <a href="./searchfood.js" class="button">Favorite Food Recipe: Ramen</a>
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