let monObjet = {
  titre: "Hello-World",
  images: [
    "./image1.jpg",
    "./image2.jpg",
    "./image3.jpg",
    "./image4.jpg",
    "./image5.jpg",
    "./image6.jpg",
    "./image7.jpg",
    "./image8.jpg",
    "./image9.jpg",
    "./image10.jpg",
    "./image11.jpg",
    "./image12.jpg",
  ],
};

document.querySelector(".titre").innerHTML = monObjet.titre;
let images = document.querySelectorAll(".image");
images.forEach((image, index) => {
  image.src = monObjet.images[index];
});
