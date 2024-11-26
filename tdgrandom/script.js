const image = document.getElementById("image");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const image2Src = "shirtI.png";
const image3Src = "shirtII.png";
const image4Src = "shirtIII.png";

button1.addEventListener("click", () => {
  image.src = image2Src;
});

button2.addEventListener("click", () => {
  image.src = image3Src;
});

button3.addEventListener("click", () => {
  image.src = image4Src;
});