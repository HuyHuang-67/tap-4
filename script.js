let images = [
  "images/iii.png",
  "images/21.jpg",
  "images/21b.png",
  "images/22.jpg",
  "images/23.jpg",
  "images/24.jpg",
  "images/25.jpg",
  "images/trang kết.jpg"
  
];

const container = document.getElementById("comic-container");

function renderImages() {
  container.innerHTML = "";

  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "comic-img";

    // ❌ bỏ dòng này
    // img.draggable = true;

    container.appendChild(img);
  });
}

renderImages();
