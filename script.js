// Lightbox logic
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxVideo = lightbox.querySelector("video");
const portfolioImages = document.querySelectorAll(".portfolio-item img");
const portfolioVideos = document.querySelectorAll(".portfolio-item video");

// Images
portfolioImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightbox.classList.add("show");
    lightboxImg.src = img.src;
    lightboxImg.style.display = "block";
    lightboxVideo.style.display = "none";
    lightboxVideo.pause();
  });
});

// Videos
portfolioVideos.forEach(video => {
  video.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightbox.classList.add("show");
    lightboxImg.style.display = "none";
    lightboxImg.src = "";
    lightboxVideo.style.display = "block";
    lightboxVideo.src = video.querySelector("source").src;
    lightboxVideo.play();
  });
});

// Close lightbox
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
  setTimeout(() => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    lightboxVideo.pause();
    lightboxVideo.src = "";
    lightboxImg.style.display = "none";
    lightboxVideo.style.display = "none";
  }, 300);
});
