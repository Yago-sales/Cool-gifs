let inicialLimit = 20;
const input = document.getElementById('input');

window.onload = (searchTrendingGifs());

document.addEventListener("keyup", event => {
    if (event.key === "Enter") {
        searchGifs(input.value, inicialLimit);
    }
}) 

const callSearchGifs = () => {
    searchGifs(input.value, inicialLimit);
}

const showMoreGifs = () => {
    if (inicialLimit >= 20) {
            inicialLimit += 20;
        if (input.value) {
            searchGifs(input.value, inicialLimit);
        }
        else {
            searchTrendingGifs(inicialLimit);
        }
    }

}
