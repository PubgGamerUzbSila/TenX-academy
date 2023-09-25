/* app.js <o>=<o> 52 lesson */
/*          +-+   */
"use strict";

// Kamroncik => Elements

const container = document.querySelector(".container");
const usersContainer = document.querySelector(".users");
const albumsContainer = document.querySelector(".albums");
const photosContainer = document.querySelector(".photos");

// Kamroncik => Functions

const renderUsers = (users) => {
  let userHTML = "";

  users.forEach((user) => {
    userHTML += `
    <div  class="user">
    <p>${user.name}</p>
    <p>${user.phone}</p>
    <p>${user.username}</p>
    <p>${user.email}</p>
    <button data-user-id="${user.id}">Get albums</button>
  </div>
    `;
  });

  usersContainer.insertAdjacentHTML("afterbegin", userHTML);
};

const renderAlbums = (albums) => {
  albumsContainer.innerHTML = "";
  let albumsHTML = "";
  albums.forEach((album) => {
    albumsHTML += `
    <div  class="album">
    <p>${album.title}</p>
    <button data-album-id="${album.id}">Get photos</button>
  </div>
    `;
  });

  albumsContainer.insertAdjacentHTML("afterbegin", albumsHTML);
};

const renderPhotos = (photos) => {
  photosContainer.innerHTML = "";
  let photosHTML = "";

  photos.forEach((photo) => {
    photosHTML += `
    <img class="imgg" src="${photo.thumbnailUrl}"/>
    `;
  });

  photosContainer.insertAdjacentHTML("afterbegin", photosHTML);
};

const getUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      renderUsers(users);
    });
};

const getAlbums = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
    .then((response) => response.json())
    .then((albums) => {
      renderAlbums(albums);
    });
};

const getPhotos = (albumId) => {
  fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    .then((response) => response.json())
    .then((photos) => {
      renderPhotos(photos);
    });
};

// Kamroncik => Event Listener

container.addEventListener("click", function (e) {
  const userId = e.target.dataset.userId;
  const albumId = e.target.dataset.albumId;

  console.log(userId);

  if (!userId && !albumId) return;

  if (userId) getAlbums(userId);

  if (albumId) getPhotos(albumId);
});

getUsers();