const filterBtn = document.querySelector(".filter");
const allFilters = document.querySelectorAll(".G-btn button");
const boxFilters = document.querySelector(".G-btn");

if (filterBtn.className.includes("filter-off")) {
    boxFilters.classList.remove("showfilters");
    boxFilters.classList.add("hidefilters");
}

// Show or hide the generation filters
function showFilter(e) {

    if (e.target.className.includes("filter-off")) {
        e.target.classList.remove("filter-off");
        e.target.classList.add("filter-on");
        boxFilters.classList.remove("hidefilters");
        boxFilters.classList.add("showfilters");
    } else {
        e.target.classList.remove("filter-on");
        e.target.classList.add("filter-off");
        boxFilters.classList.remove("showfilters");
        boxFilters.classList.add("hidefilters");
    }
}

// Switch active filter
async function switchFilter(e) {
  document.querySelector(".active-btn").classList.remove("active-btn");
  e.target.classList.add("active-btn");
  boxCards.innerHTML = '';
  searchInput.value = '';
  compteur = 20;
  createCards(pokemonsArray);

}

allFilters.forEach(button => button.addEventListener("click", switchFilter));
filterBtn.addEventListener("click", showFilter);
