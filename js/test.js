const searchInput = document.querySelector("#search");
const boxError = document.getElementById("box-error");
const btnMore = document.getElementById("btnMore");
const searchBtn = document.getElementById("searchBtn");
const boxCards = document.getElementById("box-cards");
const requestApi = "https://pokeapi.co/api/v2/";
const btnFilterGen = document.querySelectorAll('.G-btn button')


// Générations de pokemon
const filtersGen = {
  "first": 0,
  "second": 151,
  "third": 251,
  "fourth": 386,
  "fifth": 493,
  "sixth": 649,
  "seventh": 721,
  "eight": 809,
  "ninth": 905,
  "ten": 1017
}

let indexNextGen;
let pokemonsArray;
let compteur = 20;
let pokemonId = 1;


// Récupération des noms de chaque pokemons
fetch(`${requestApi}pokemon?limit=1017&offset=0`)
  .then((res) => res.json())
  .then((pokemons) => {
    pokemonsArray = pokemons.results;

    createCards(pokemonsArray);
  }
);

async function createCards(array) { 

  btnFilterGen.forEach((gen, index) => {
    if (gen.classList.contains('active-btn')) {
      indexNextGen = btnFilterGen[index+1] ? btnFilterGen[index+1].dataset.gen  : "ten"
      console.log(indexNextGen);
    }
  });
  
  const base = filtersGen[document.querySelector(".active-btn").dataset.gen];
  
  if (base+compteur-20 < filtersGen[indexNextGen]) {
    console.log("Lancé");
    for (let index = base+compteur-20; index < base+compteur && index < filtersGen[indexNextGen]; index++) { 
      // console.log(index);
      const pokemonSoloData = await fetch(`${requestApi}pokemon/${array[index].name}`);
      const pokemonSolo = await pokemonSoloData.json()
  
      const pokeCard = document.createElement("a");
      pokeCard.setAttribute("class", `card card-${pokemonSolo.types[0].type.name} visible`);
  
      pokeCard.id = `${pokemonSolo.name}`;
  
      pokeCard.href = `pokemon/pokestats.html?id=${pokemonSolo.id}&name=${pokemonSolo.name}`;
  
      // Fonction qui crée un span pour chaque type
      let spanType = "";
      for (let i = 0; i < pokemonSolo.types.length; i++) {
        spanType += `<span>${pokemonSolo.types[i].type.name}</span>\n`;
      }
  
      pokeCard.innerHTML = `
      <div>
          <div class="box-name-number">
              <span class="pokemon-name">${pokemonSolo.name}</span>
              <span class="pokemon-number">#${pokemonSolo.id}</span>
          </div>
  
          <div class="box-infos">
              <div class="box-type">
                  ${spanType}
              </div>
  
              <div class="box-img">
                  <img src="${pokemonSolo.sprites.other["official-artwork"].front_default}" width="193" alt="Image Pokemon : ${pokemonSolo.name}">
              </div>
          </div>
      </div> `;
  
      boxCards.appendChild(pokeCard);
    };
  
    compteur = compteur + 20
  }
  console.log(compteur);
  
}


searchBtn.addEventListener('click', async () => {
  boxCards.innerHTML = '';
  compteur = 20;

  if (searchInput.value) {

    const searchEntry = pokemonsArray.filter(pokemon => pokemon.name.toLowerCase().startsWith(searchInput.value.toLowerCase()))
    // console.log(searchEntry);
    if (searchEntry.length > 0) {
      searchEntry.forEach(async pokemonSearched => {
        const pokemonSoloData = await fetch(`${requestApi}pokemon/${pokemonSearched.name}`);
        const pokemonSolo = await pokemonSoloData.json()
    
        const pokeCard = document.createElement("a");
        pokeCard.setAttribute("class", `card card-${pokemonSolo.types[0].type.name} visible`);
    
        pokeCard.id = `${pokemonSolo.name}`;
    
        pokeCard.href = `pokemon/pokestats.html?id=${pokemonSolo.id}&name=${pokemonSolo.name}`;
    
        // Fonction qui crée un span pour chaque type
        let spanType = "";
        for (let i = 0; i < pokemonSolo.types.length; i++) {
          spanType += `<span>${pokemonSolo.types[i].type.name}</span>\n`;
        }
    
        pokeCard.innerHTML = `
        <div>
            <div class="box-name-number">
                <span class="pokemon-name">${pokemonSolo.name}</span>
                <span class="pokemon-number">#${pokemonSolo.id}</span>
            </div>
    
            <div class="box-infos">
                <div class="box-type">
                    ${spanType}
                </div>
    
                <div class="box-img">
                    <img src="${pokemonSolo.sprites.other["official-artwork"].front_default}" width="193" alt="Image Pokemon : ${pokemonSolo.name}">
                </div>
            </div>
        </div> `;
    
        boxCards.appendChild(pokeCard);
      })

      btnMore.style.display = "none"
  
    } else {
        boxError.innerHTML = '<h2>No pokemon found</h2>';
    }

  } else {
    createCards(pokemonsArray)
  }

  
})


btnMore.addEventListener('click', () => {
  createCards(pokemonsArray) 
})
