// const searchInput = document.querySelector("#search");
// const boxError = document.getElementById('box-error');
// const filterBtn = document.querySelector(".filter");
// const allFilters = document.querySelectorAll(".G-btn button");
// const boxFilters = document.querySelector(".G-btn");
// const btnMore = document.getElementById('btnMore'); 
// const searchBtn = document.getElementById('searchLabel');

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
// let compteur = 0;

// let pokemonId = 1;
// // Variable du container qui contient les cartes
// const boxCard = document.getElementById("box-cards");
// let dataArray;


// async function getPokemon() {
//     let dataAll = await fetch(`${requestApi}pokemon?limit=${compteur+20}&offset=0`);
//     let pokemonAll = await dataAll.json();
//     dataArray = pokemonAll.results;

//     await createPokeCard(pokemonId, 0, compteur+20)
//     // getPokemonFromCard()
// };

// async function createPokeCard(base, precedent, max) {

//     let debut = new Date();

//     // boxCard.innerHTML = "";
//     let firstGenShow = 0;
//     for (base += precedent; base <= max; base++){
    
//         let data = await fetch(`${requestApi}pokemon/${base}`);
//         let pokemon = await data.json();

//         const pokeCard = document.createElement("a");
//         if (firstGenShow < firstGen){
//             pokeCard.setAttribute("class", `card card-${pokemon.types[0].type.name} visible`);
//         } else {
//             pokeCard.setAttribute("class", `card card-${pokemon.types[0].type.name} invisible`);

//         }
//         pokeCard.id = `${pokemon.name}`;


//         pokeCard.href = `pokemon/pokestats.html?id=${pokemon.id}&name=${pokemon.name}`

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

//     compteur += 20
//     filterShow(pokemonId, compteur, compteur+20)
    
//     let fin = new Date()
//     console.log(`Temps de chargement de la page : ${fin - debut}ms (${(fin-debut)/1000}s)`);

// }





// async function filterShow(base, precedent, maxGen) {

//     let cards = boxCard.querySelectorAll("a.card");

//     for (let k = 0; k < cards.length; k++) {
//         cards[k].classList.remove('visible');
//         cards[k].classList.add('invisible');
//     }
//     console.log(cards);

//     for (base += precedent; base <= maxGen; base++) {
//         // let data = await fetch(`${requestApi}pokemon/${base}`);
//         // let pokemon = await data.json();

//         // const card = document.getElementById(`${pokemon.name}`)
//         // card.classList.remove("invisible");
//         // card.classList.add("visible");

//     }
// }


// if (filterBtn.className.includes("filter-off")) {
//     boxFilters.classList.remove("showfilters");
//     boxFilters.classList.add("hidefilters");
// }

// function showFilter(e) {
    
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

// // Permet de changer de filtre de génération.
// function switchFilter(e) {
//     document.querySelector(".active-btn").classList.remove("active-btn");
//     e.target.classList.add("active-btn");
//     verificationFilter()
// }

// // Vérifie la génération qui est filtrée grâce à l'attribut data-gen du filtre ACTIF
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

// async function createCardWithSearchInput(searchString) {
//     const filteredList = dataArray.filter(el => el.name.toLowerCase().startsWith(searchString.toLowerCase()));
//         // console.log("Liste filtrée :", filteredList);
        
//     if (filteredList.length <= 0) {
//         boxError.innerHTML = '<h2>No pokemon found</h2>';
//         btnMore.style.display = 'none';
        
//     } else {
//         btnMore.style.display = 'block';

//         for (let l = 0; l < filteredList.length; l++) {
//             let data = await fetch(`${requestApi}pokemon/${base}`);
//             let pokemon = await data.json();

//             const pokeCard = document.createElement("a");
//             if (firstGenShow < firstGen){
//                 pokeCard.setAttribute("class", `card card-${pokemon.types[0].type.name} visible`);
//             } else {
//                 pokeCard.setAttribute("class", `card card-${pokemon.types[0].type.name} invisible`);

//             }
//             pokeCard.id = `${pokemon.name}`;


//             pokeCard.href = `pokemon/pokestats.html?id=${pokemon.id}&name=${pokemon.name}`

//             // Fonction qui crée un span pour chaque type
//             let spanType = "";
//             for (let i = 0; i < pokemon.types.length; i++) {
//                 spanType += `<span>${pokemon.types[i].type.name}</span>\n`
//             }

//             pokeCard.innerHTML = `
//             <div>
//                 <div class="box-name-number">
//                     <span class="pokemon-name">${pokemon.name}</span>
//                     <span class="pokemon-number">#${pokemon.id}</span>
//                 </div>

//                 <div class="box-infos">
//                     <div class="box-type">
//                         ${spanType}
//                     </div>

//                     <div class="box-img">
//                         <img src="${pokemon.sprites.other['official-artwork'].front_default}" width="193">
//                     </div>
//                 </div>
//             </div> `
//     $
//             boxCard.appendChild(pokeCard)
//         }
//     }
// }


// function filterWithSearchInput() {
//     boxError.innerHTML = "";
    
//     let cards = boxCard.getElementsByTagName("a");
//     // console.log("Cards :", cards);
    
//     for (let k = 0; k < cards.length; k++) {
//         cards[k].classList.remove('visible');
//         cards[k].classList.add('invisible');
//     }
    
//     const searchString = searchInput.value.toLowerCase().replace(/\s/g, "");
    
//     if (searchString) {
//         createCardWithSearchInput(searchString)
//     } else {
        
//         for (let k = 0; k < cards.length; k++) {
//             cards[k].classList.remove('invisible');
//             cards[k].classList.add('visible');
//         }
        
//         verificationFilter()
//     }
    
// }


// btnMore.addEventListener('click', () => {
//     createPokeCard(pokemonId, compteur, compteur+20)
// })

// searchBtn.addEventListener("click", filterWithSearchInput)
// filterBtn.addEventListener("click", showFilter);
// allFilters.forEach(button => button.addEventListener("click", switchFilter));


// getPokemon()

