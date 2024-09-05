/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Khassan Suleimanov
 *      Student ID: 137515235
 *      Date:       22 June, 2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
//console.log({ artists, songs }, "App Data");

function displayArtist(artist) {
  const artistHeader = document.querySelector("#selected-artist");
  artistHeader.innerHTML = `${artist.name} (`;
  artist.urls.forEach((url, index) => {
    artistHeader.innerHTML += `<a href="${url.url}">${url.name}</a>${
      index < artist.urls.length - 1 ? ", " : ""
    }`;
  });
  artistHeader.innerHTML += ")";
}
function displaySongs(artistId) {
  const cardsContainer = document.querySelector("#cards-container");
  cardsContainer.innerHTML = "";
  const filterSongs = songs.filter((song) => song.artistId === artistId);

  filterSongs.forEach((song) => {
    cardsContainer.appendChild(createCard(song));
  });
}
function createCard(song) {
  const card = document.createElement("div");
  card.classList.add("card");

  const songImg = document.createElement("img");
  songImg.src = song.imageUrl;
  songImg.classList.add("card-image");
  card.appendChild(songImg);

  const title = document.createElement("h2");
  title.textContent = song.title;
  title.classList.add("card-title");
  card.appendChild(title);

  const year = document.createElement("time");
  year.textContent = `Year: ${song.year}`;
  year.classList.add("card-year");
  card.appendChild(year);

  const duration = document.createElement("span");
  const minutes = Math.floor(song.duration / 60);
  const seconds = song.duration % 60;
  duration.textContent = `Duration: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  duration.classList.add("card-duration");
  card.appendChild(duration);

  card.addEventListener("click", () => {
    window.open(song.url, "_blank");
  });

  return card;
}

window.addEventListener("load", () => {
  const menu = document.querySelector("#menu");
  artists.forEach((artist) => {
    const artistButton = document.createElement("button");
    artistButton.textContent = artist.name;
    artistButton.addEventListener("click", () => {
      displayArtist(artist);
      displaySongs(artist.artistId);
    });
    menu.appendChild(artistButton);
  });
});
function addSongField() {
  const container = document.getElementById('songs-container');
  const input = document.createElement('input');
  input.type = 'url';
  input.name = 'songs_videos_urls[]';
  input.placeholder = 'Enter song/video URL';
  input.required = true;
  container.appendChild(input);
}