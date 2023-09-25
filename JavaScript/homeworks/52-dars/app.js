// /* app.js <o>=<o> 52 lesson */
// /*          +-+   */
"use strict";

// Kamroncik => Elements

const container = document.querySelector(".container");
const usersContainer = document.querySelector(".users");
const albumsContainer = document.querySelector(".albums");
const photosContainer = document.querySelector(".photos");

// // Kamroncik => Functions

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



// // Kamroncik => Event Listener

// container.addEventListener("click", function (e) {
//   const userId = e.target.dataset.userId;
//   const albumId = e.target.dataset.albumId;

//   console.log(userId);

//   if (!userId && !albumId) return;

//   if (userId) getAlbums(userId);

//   if (albumId) getPhotos(albumId);
// });

// getUsers();

const getUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      renderUsers(users);
    } catch (error) {
      console.log(error);
    }
  };
  
  const getAlbums = async (userId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
      const albums = await response.json();
      renderAlbums(albums);
    } catch (error) {
      console.log(error);
    }
  };
  
  const getPhotos = async (albumId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
      const photos = await response.json();
      renderPhotos(photos);
    } catch (error) {
      console.log(error);
    }
  };
  
  container.addEventListener("click", async function (e) {
    const userId = e.target.dataset.userId;
    const albumId = e.target.dataset.albumId;
  
    console.log(userId);
  
    if (!userId && !albumId) return;
  
    if (userId) {
      await getAlbums(userId);
    }
  
    if (albumId) {
      await getPhotos(albumId);
    }
  });
  
  getUsers();