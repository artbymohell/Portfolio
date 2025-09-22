// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxVideo = lightbox.querySelector("video");

document.querySelectorAll(".portfolio-item img, .portfolio-item video").forEach(item => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightbox.classList.add("show");

    if (item.tagName === "IMG") {
      lightboxImg.src = item.src;
      lightboxImg.style.display = "block";
      lightboxVideo.style.display = "none";
    } else if (item.tagName === "VIDEO") {
      lightboxVideo.src = item.querySelector("source").src;
      lightboxVideo.style.display = "block";
      lightboxImg.style.display = "none";
    }
  });
});

// Close lightbox when clicking outside
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg && e.target !== lightboxVideo) {
    lightbox.style.display = "none";
    lightbox.classList.remove("show");
    lightboxVideo.pause();
  }
});

// Scroll-spy functionality
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("text-white");
    link.classList.add("text-gray-300");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-white");
      link.classList.remove("text-gray-300");
    }
  });
});
