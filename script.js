const videos = [
  {
    title: "Ma première vidéo",
    thumbnail: "https://via.placeholder.com/300x180?text=Video+1",
    file: "videos/video1.mp4"
  },
  {
    title: "Deuxième vidéo",
    thumbnail: "https://via.placeholder.com/300x180?text=Video+2",
    file: "videos/video2.mp4"
  }
];

// Page d'accueil : afficher les vidéos
if (document.getElementById("video-list")) {
  const container = document.getElementById("video-list");
  videos.forEach((v, i) => {
    container.innerHTML += `
      <div class="video" onclick="openVideo(${i})">
        <img src="${v.thumbnail}">
        <h3>${v.title}</h3>
      </div>`;
  });
}

// Ouvrir une vidéo dans watch.html
function openVideo(i) {
  localStorage.setItem("videoIndex", i);
  window.location = "watch.html";
}

// Sur la page watch.html
if (document.getElementById("player")) {
  const index = localStorage.getItem("videoIndex");
  const v = videos[index];
  document.getElementById("player").src = v.file;
  document.getElementById("title").innerText = v.title;
}
