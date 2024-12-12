let images = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let currentImageIndex = 0;

document.getElementById("nextImage").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector("img").src = images[currentImageIndex];
});

document.getElementById("prevImage").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.querySelector("img").src = images[currentImageIndex];
});
