const accesskey = "p66W0qMQ6e59b1IpRpboT75B8yy3S6PLR0dPLFhq2y8";

const searchFrom = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresults = document.getElementById("search-results");
const showmore = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    if(page == 1){
        searchresults.innerHTML = "";
    }
    if(data.total == 0)
    {
        alert("enter correct text");
    }
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        searchresults.appendChild(imagelink);

    });
    showmore.style.display = "block";
}

searchFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showmore.addEventListener("click", ()=>{
    page++;
    searchImages();
});