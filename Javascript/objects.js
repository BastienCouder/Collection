let monObjet = {
  titre: "Hello-World",
  images: [
    "..img/image-1.jpg",
    "..img/image-2.jpg",
    "..img/image-3.jpg",
    "..img/image-4.jpg",
    "..img/image-5.jpg",
    "..img/image-6.jpg",
    "..img/image-7.jpg",
    "..img/image-8.jpg",
    "..img/image-9.jpg",
    "..img/image-10.jpg",
    "..img/image-11.jpg",
    "..img/image-12.jpg",
  ],
};

document.querySelector(".titre").innerHTML = monObjet.titre;
let images = document.querySelectorAll(".image");
images.forEach((image, index) => {
  image.src = monObjet.images[index];
});
