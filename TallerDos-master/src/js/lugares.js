
document.addEventListener("Contenedor", () => {
    const galeria = document.getElementById("Galeria");

    const lugares = [
      {
        src: "/src/assets/Imagenes/heladeria.jpg",
        alt: "Lugar 1",
        title: "Heladeria",
        description: "Una playa tranquila y escondida ideal para relajarse con un helado."
      },
      {
        src: "/src/assets/Imagenes/distribuidor.jpeg",
        alt: "Lugar 2",
        title: "distribuidor de casero",
        description: "Aqui encuetras sabores exquisitos."
      },
      {
        src: "/src/assets/Imagenes/casaHelados.jpeg",
        alt: "Lugar 3",
        title: "Casa de helados Pinguino",
        description: "Un lugar perfecto para compartir en familia"
      }
    ];
  
    lugares.forEach(lugar => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4"; 
      col.innerHTML = `
        <div class="card">
          <img src="${lugares.src}" class="card-img-top" alt="${lugar.alt}">
          <div class="card-body">
            <h5 class="card-title">${lugares.title}</h5>
            <p class="card-text">${lugar.description}</p>
            <a href="#" class="btn btn-primary">Ver más</a>
          </div>
        </div>
      `;
      galeria.appendChild(col);
    });
  });
  
  