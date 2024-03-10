const AccessKey = "4UjQZjsxbBoP-jSsAvjo9t5rayNeK6eLt2GiXsGx6Uw";

const searchForm = document.getElementById("search-from");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
let keyword = "";
let page = 1;

async function searchImages() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${AccessKey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();

  // console.log(data);

  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  keyword = searchBox.value;
  page = 1;
  searchImages();
  searchBox.value = "";
});


showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
})