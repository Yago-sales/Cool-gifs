const apiKey = "CgV6dbW2RHOP0msRS5tmRdg3z0XP6L5I";
const trendingEndPoint = "https://api.giphy.com/v1/gifs/trending?";
const searchEndPoint = "https://api.giphy.com/v1/gifs/search?"
const shelf = document.getElementById('shelf');

const searchTrendingGifs = (limit) => {
    const url = `${trendingEndPoint}&api_key=${apiKey}&limit=${limit}`;
    requestGifApi(url);
}

const searchGifs = (value, limit) => {
    if (value) {
        const url = `${searchEndPoint}q=${value}&rating=g&api_key=${apiKey}&limit=${limit}`;
        requestGifApi(url);
    }
    else {
        shelf.textContent = '';
        searchTrendingGifs();
    }
}

const requestGifApi = (url) => {
    axios.get(url)
    .then(res => {
        shelf.textContent = '';
        buildGifs(res);
    })
    .catch(err =>  { 
        console.error(err);
      })
}

const buildGifs =  (res) => {
    const gifs = res.data.data.map(gif => gif.images.fixed_height.url);
    gifs.forEach(url => {
        let img = document.createElement("img");
        img.setAttribute("src", url);
        img.setAttribute("class", "gif");
        shelf.appendChild(img);
    });
}
