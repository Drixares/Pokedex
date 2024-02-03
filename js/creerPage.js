
const requestApi = 'https://pokeapi.co/api/v2/';
const urlParams = new URLSearchParams(window.location.search);
const cardID = urlParams.get('id');
const cardName = urlParams.get('name');

getPokemon();

async function getPokemon() {
    const dataPokemon = await fetch(`${requestApi}pokemon/${cardID}`)
    let pokemon = await dataPokemon.json(); 
    
    // Même chose mais avec un autre url pour pouvoir accéder aux descriptions des pokémons.
    let dataDesc = await fetch(`${requestApi}pokemon-species/${cardID}`) 
    let pokemonDesc = await dataDesc.json()
    console.log(pokemonDesc);
    
    let spanType = '';
    for (let i = 0; i < pokemon.types.length; i++) {
        spanType += `<span class="color-${pokemon.types[i].type.name}">${pokemon.types[i].type.name}</span> \n`
    };

    const body = document.querySelector('body');
    body.innerHTML = `
    <div class="container color-${pokemon.types[0].type.name}">
    <nav>
        <a href="../pokemon.html" class="icon arrow"><i class="fa-solid fa-arrow-left"></i></a>
    </nav>

    <main>
        <div class="main-box-left"> 
            <div class="box-title">
                <div class="box-nom-type">
                    <h2 class="title">${pokemon.name}</h2>
                    <div class="box-type" id="box-type">
                        ${spanType}
                    </div>
                </div>
                <span class="number">#${pokemon.id}</span>
                <div class="box-description">
                    <p>${pokemonDesc.flavor_text_entries[0].flavor_text}</p>
                </div>
            </div>

            <div class="box-stats">
                <div class="stats">
                    <span class="stat-nom" >HP</span>
                    <span class="stat-per">${pokemon.stats[0].base_stat}</span>
                    <div class="stat-bar">
                        <div class="bar-per" id="${pokemon.stats[0].stat.name}"></div>
                    </div>
                    <span class="max-stat"></span>
                </div>
                <div class="stats">
                    <span class="stat-nom" >Defense</span>
                    <span class="stat-per">${pokemon.stats[1].base_stat}</span>
                    <div class="stat-bar">
                        <div class="bar-per" id="${pokemon.stats[1].stat.name}"></div>
                    </div>
                    <span class="max-stat"></span>
                </div>
                <div class="stats">
                    <span class="stat-nom" >Attack</span>
                    <span class="stat-per">${pokemon.stats[2].base_stat}</span>
                    <div class="stat-bar">
                        <div class="bar-per" id="${pokemon.stats[2].stat.name}"></div>
                    </div>
                    <span class="max-stat"></span>
                </div>
                <div class="stats">
                    <span class="stat-nom" >Sp. Attack</span>
                    <span class="stat-per">${pokemon.stats[3].base_stat}</span>
                    <div class="stat-bar">
                        <div class="bar-per" id="${pokemon.stats[3].stat.name}"></div>
                    </div>
                    <span class="max-stat"></span>
                </div>
                <div class="stats">
                    <span class="stat-nom" >Sp. Def</span>
                    <span class="stat-per">${pokemon.stats[4].base_stat}</span>
                    <div class="stat-bar">
                        <div class="bar-per" id="${pokemon.stats[4].stat.name}"></div>
                    </div>
                    <span class="max-stat"></span>
                </div>
                <div class="stats">
                    <span class="stat-nom" >Speed</span>
                    <span class="stat-per">${pokemon.stats[5].base_stat}</span>
                    <div class="stat-bar">
                        <div class="bar-per" id="${pokemon.stats[5].stat.name}"></div>
                    </div>
                    <span class="max-stat"></span>
                </div>
            </div>
        </div>
        <div class="main-box-right">
            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="" class="img-pokemon">
        </div>

    </main>
    `

    for (let j = 0; j < pokemon.stats.length; j++) {
        let stat = document.getElementById(`${pokemon.stats[j].stat.name}`);
        if (pokemon.stats[j].base_stat > 100) {
            stat.style.setProperty(`--bar-percent`, `100%`);
        } else {
            stat.style.setProperty(`--bar-percent`,  `${pokemon.stats[j].base_stat}%`);
        }
    }

}

