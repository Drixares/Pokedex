// const searchInput = document.querySelector("#search");
// const boxError = document.getElementById('box-error');
// const filterBtn = document.querySelector(".filter");
// const allFilters = document.querySelectorAll(".G-btn button");
// const boxFilters = document.querySelector(".G-btn");

// const requestApi = 'https://pokeapi.co/api/v2/';

// // Générations de pokemon
// const firstGen = 151;
// const secondGen = 251;
// const thirdGen = 386;
// const fourthGen = 493;
// const fifthGen = 649;
// const sixthGen = 721;
// const seventhGen = 809;
// const eightGen = 905;
// const ninthGen = 1017;

// let pokemonId = 1;
// // Variable du container qui contient les cartes
// const boxCard = document.getElementById("box-cards");
// let dataArray;


// async function getPokemon() {
//     let dataAll = await fetch(`${requestApi}pokemon?limit=${ninthGen}&offset=0`);
//     let pokemonAll = await dataAll.json();
//     dataArray = pokemonAll.results;

//     createPokeCard(pokemonId, 0, ninthGen)
// };

// async function createPokeCard(base, precedent, maxGen) {


//     let debut = new Date();
//     boxCard.innerHTML = "";
//     let firstGenShow = 0;
//     for (base += precedent; base <= maxGen; base++){
    
//         let data = await fetch(`${requestApi}pokemon/${base}`);
//         let pokemon = await data.json();

//         const pokeCard = document.createElement("a");
//         if (firstGenShow < firstGen){
//             pokeCard.setAttribute("class", `card card-${pokemon.types[0].type.name} visible`);
//         } else {
//             pokeCard.setAttribute("class", `card card-${pokemon.types[0].type.name} invisible`);

//         }
//         pokeCard.id = `${pokemon.name}`;

        
//         pokeCard.href = `pokepages/${pokemon.name}.html`

//         // Fonction qui crée un span pour chaque type
//         let spanType = "";
//         for (let i = 0; i < pokemon.types.length; i++) {
//             spanType += `<span>${pokemon.types[i].type.name}</span>\n`
//         }

//         pokeCard.innerHTML = `
//         <div>
//             <div class="box-name-number">
//                 <span class="pokemon-name">${pokemon.name}</span>
//                 <span class="pokemon-number">#${pokemon.id}</span>
//             </div>

//             <div class="box-infos">
//                 <div class="box-type">
//                     ${spanType}
//                 </div>

//                 <div class="box-img">
//                     <img src="${pokemon.sprites.other['official-artwork'].front_default}" width="193">
//                 </div>
//             </div>
//         </div> `

//         firstGenShow++
//         boxCard.appendChild(pokeCard)
//     }

//     filterShow(pokemonId, 0, firstGen)
    
//     let fin = new Date()
//     console.log(`Temps de chargement de la page : ${fin - debut}ms (${(fin-debut)/1000}s)`);

// }

// searchInput.addEventListener("input", filterTarget)


// function filterTarget(e) {
//     boxError.innerHTML = "";

//     let cards = boxCard.getElementsByTagName("a");
//     // console.log("Cards :", cards);

//     for (let k = 0; k < cards.length; k++) {
//         cards[k].classList.remove('visible');
//         cards[k].classList.add('invisible');
//     }

//     const searchString = e.target.value.toLowerCase().replace(/\s/g, "");

//     if (searchString) {
//         const filteredList = dataArray.filter(el => el.name.toLowerCase().startsWith(searchString.toLowerCase()));
//         // console.log("Liste filtrée :", filteredList);

//         if (filteredList.length <= 0) {
//             boxError.innerHTML = '<h2>No pokemon found</h2>';

//         } else {
//             for (let l = 0; l < filteredList.length; l++) {
//                 const cardFiltered = document.getElementById(`${filteredList[l].name}`);
//                 // console.log(cardFiltered.classList);
//                 cardFiltered.classList.remove('invisible');
//                 cardFiltered.classList.add('visible');
//             }
//         }
     
//     } else {

//         for (let k = 0; k < cards.length; k++) {
//             cards[k].classList.remove('invisible');
//             cards[k].classList.add('visible');
//         }
        
//         verificationFilter()
//     }
 
// }


// async function filterShow(base, precedent, maxGen) {

//     let cards = boxCard.querySelectorAll("a.card");
//     // console.log("Cards :", cards);

//     for (let k = 0; k < cards.length; k++) {
//         cards[k].classList.remove('visible');
//         cards[k].classList.add('invisible');
//     }

//     for (base += precedent; base <= maxGen; base++) {
//         let data = await fetch(`${requestApi}pokemon/${base}`);
//         let pokemon = await data.json();

//         const card = document.getElementById(`${pokemon.name}`)
//         card.classList.remove("invisible");
//         card.classList.add("visible");

//     }
// }


// getPokemon()




// if (filterBtn.className.includes("filter-off")) {
//     boxFilters.classList.remove("showfilters");
//     boxFilters.classList.add("hidefilters");
// }

// const showFilter = e => {

//     if (e.target.className.includes("filter-off")) {
//         e.target.classList.remove("filter-off");
//         e.target.classList.add("filter-on");
//         boxFilters.classList.remove("hidefilters");
//         boxFilters.classList.add("showfilters");
//     } else {
//         e.target.classList.remove("filter-on");
//         e.target.classList.add("filter-off");
//         boxFilters.classList.remove("showfilters");
//         boxFilters.classList.add("hidefilters");
//     }
// }


// const switchFilter = e => {
//     document.querySelector(".active-btn").classList.remove("active-btn");
//     e.target.classList.add("active-btn");
//     console.log(e.target.dataset.gen);
//     verificationFilter()
// }

// const verificationFilter = () => {
//     const activeFilter = document.querySelector(".active-btn");
    
//     if (activeFilter.dataset.gen === "first") {
//         filterShow(pokemonId, 0, firstGen)
//     } else if (activeFilter.dataset.gen === "second") {
//         filterShow(pokemonId, firstGen, secondGen)
//     } else if (activeFilter.dataset.gen === "third") {
//         filterShow(pokemonId, secondGen, thirdGen)
//     } else if (activeFilter.dataset.gen === "fourth") {
//         filterShow(pokemonId, thirdGen, fourthGen)
//     } else if (activeFilter.dataset.gen === "fifth") {
//         filterShow(pokemonId, fourthGen, fifthGen)
//     } else if (activeFilter.dataset.gen === "sixth") {
//         filterShow(pokemonId, fifthGen, sixthGen)
//     } else if (activeFilter.dataset.gen === "seventh") {
//         filterShow(pokemonId, sixthGen, seventhGen)
//     } else if (activeFilter.dataset.gen === "eight") {
//         filterShow(pokemonId, seventhGen, eightGen)
//     } else if (activeFilter.dataset.gen === "ninth") {
//         filterShow(pokemonId, eightGen, ninthGen)
//     }
// }

// filterBtn.addEventListener("click", showFilter);
// allFilters.forEach(button => button.addEventListener("click", switchFilter));
