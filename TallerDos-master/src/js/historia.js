const images = [
    {
        element: document.getElementById("image1"),
        urls: [
            "https://ekosnegocios.com/image/posts/header/1806.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9Oy0cTrgykxL76-n9uXstKNtzVpY21j-A7RUGP7dJgEVbipUkDHavNlTKjvzase1NxM&usqp=CAU",
        ],
        index: 0,
    },
    {
        element: document.getElementById("image2"),
        urls: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB529Z521nnn1OBhUxWDeZfLPs_rPXQy4cWKxzqpqcSqCUtHv9J0vcG7uAKPx1ZfuXWqs&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_LDLgnBPN795Yxg1nDrMnY3xbGEt6WEHCpNsZVQiMb0LozsknMBeacbvEoQpebEAd-U&usqp=CAU",
        ],
        index: 0,
    },
    {
        element: document.getElementById("image3"),
        urls: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbEicFiFvqF92V9PhKH119_Rzr7vve08DbecjCi6PSt1zHt4bvaan8s2IMYxPwfVq1vg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEzzdPBKYvERtbhuMbIWsjHPes2eiYEOGWw&s",
        ],
        index:0,
    },
];

// Agrega un evento "click" a cada imagen
images.forEach((imgObj) => {
    imgObj.element.addEventListener("click", () => {
        // Cambia a la siguiente imagen en el array de URLs
        imgObj.index = (imgObj.index + 1) % imgObj.urls.length;
        imgObj.element.src = imgObj.urls[imgObj.index];
    });
});
/* boton flotante*/
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Hace el desplazamiento suave
    });
}
