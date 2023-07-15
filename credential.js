const API_KEY = "api_key=bbbd73855feaf05c7cb6ee543c9a3f54";
export {API_KEY};

/*
import { API_KEY } from './credential.js';
const base_url = "https://api.themoviedb.org/3";
const img_url = "https://image.tmdb.org/t/p/original";

const navBarLeftList = document.querySelector(".navbar__left__list");
navBarLeftList.classList.add("hide");

const searchNav = document.querySelector(".search__nav");
searchNav.classList.add("hide");

const hamBurgerNavbar = document.querySelector(".ham-burger");
hamBurgerNavbar.classList.add("none");

const requests = {
    fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${API_KEY}`,
    fetchTrending: `${base_url}/trending/all/week?${API_KEY}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${API_KEY}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${API_KEY}&with_genres=99`,
    fetchAdventure: `${base_url}/discover/movie?${API_KEY}&with_genres=12`,
};

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);
        const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
        console.log(setMovie);
        var banner = document.querySelector(".hero-banner");
        var banner_Title = document.querySelector(".banner_Title");
        var banner_desc = document.querySelector(".banner_Description");
        banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
        banner_desc.innerText = truncate(setMovie.overview, 190);
        banner_Title.innerText = setMovie.name;
    })

const fetchdata = (url, genre) => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const mainbanner = document.querySelector(".main-banner");
            const row = document.createElement("div");
            row.className = "row netflixrow";
            mainbanner.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            title.innerText = genre;
            row.appendChild(title);
            const genreDiv = document.createElement("div");
            genreDiv.className = "swiper mySwiper";
            mainbanner.appendChild(genreDiv);
            const row_posters = document.createElement("div");
            row_posters.className = "swiper-wrapper row__posters";
            genreDiv.appendChild(row_posters);
            data.results.forEach(movie => {
                const poster = document.createElement("img");
                poster.className = "swiper-slide row__posterLarge";
                var id = movie.id;
                poster.id = id;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);
            });
            const next = document.createElement("div");
            next.className = "swiper-button-next";
            genreDiv.appendChild(next);
            const prev = document.createElement("div");
            prev.className = "swiper-button-prev";
            genreDiv.appendChild(prev);
        });
}

fetchdata(requests.fetchNetflixOrignals, "NETFLIX ORIGINAL");
fetchdata(requests.fetchTrending, "TRENDING NOW");
fetchdata(requests.fetchActionMovies, "ACTION MOVIES");
fetchdata(requests.fetchRomanceMovies, "ROMANCE MOVIES");
fetchdata(requests.fetchHorrorMovies, "HORROR MOVIES");
fetchdata(requests.fetchDocumentaries, "DOCUMENTARIES");
fetchdata(requests.fetchComedyMovies, "COMEDY MOVIES");
fetchdata(requests.fetchAdventure, "ADVENTURE MOVIES");

const swiper = new Swiper(".swiper", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.addEventListener(
    'scroll',
    (event) => {
        scroll = window.scrollY;
        if (scroll >= 120) {
            const navBar = document.querySelector(".nav");
            navBar.classList.add("bg")
        }
        else if (scroll < 120) {
            const navBar = document.querySelector(".nav");
            navBar.classList.remove("bg")
        }
    }
);


var temp = 0;
const browse = document.querySelector(".submenu");
browse.addEventListener("mouseover", () => visible())

const visible = () => {
    temp = temp + 1;
    const listData = document.querySelector(".ham-burger__navbar");
    listData.classList.remove("hide");

}

browse.addEventListener("mouseout", () => hidedata())

const hidedata = () => {
    temp = temp + 1;
    const listData = document.querySelector(".ham-burger__navbar");
    listData.classList.add("hide");

}



*/