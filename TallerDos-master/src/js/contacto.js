const image = document.getElementById("dynamic-image");

// Cambiar imagen cada 3 segundos
const images = [
    "https://www.insights.la/wp-content/uploads/2014/08/Foto-Pinguino-Manicho-4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_v6ayGImXmyK3pW0hp5Z8UZKyhjrDI6fYw6oFPc7i2YFJjW1B4ezFbatfXqVAr4D3Ol4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmw-OFjVkXmeShpxKouz0eq5VNW2fQ3nlnQ&s",
];

let index = 0;

setInterval(() => {
    index = (index + 1) % images.length;
    image.src = images[index];
}, 3000);
