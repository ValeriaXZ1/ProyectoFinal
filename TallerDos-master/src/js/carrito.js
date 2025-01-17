/*Obtener el carrito desde localStorage o crear un carrito vacío*/ 
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

/*Función para agregar productos al carrito*/ 
function agregarAlCarrito(nombre, precio) {
    /*Buscar si el producto ya está en el carrito*/
    let productoExistente = carrito.find(producto => producto.nombre === nombre);

    if (productoExistente) {
        /* Si el producto ya existe, aumentar la cantidad*/
        productoExistente.cantidad++;
    } else {
        /* Si el producto no existe, agregarlo al carrito*/
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    /*Guardar el carrito*/ 
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el icono del carrito (opcional)
    actualizarCarritoFlotante();
}

/*Función para mostrar los productos del carrito*/ 
function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('productos-carrito');
    contenedorCarrito.innerHTML = '';

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        carrito.forEach(producto => {
            const productoElemento = document.createElement('div');
            productoElemento.classList.add('producto');
            productoElemento.innerHTML = `
                <p>${producto.nombre} - $${producto.precio} x ${producto.cantidad}</p>
                <button onclick="eliminarDelCarrito('${producto.nombre}')">Eliminar</button>
            `;
            contenedorCarrito.appendChild(productoElemento);
        });
    }
}

/*Función para eliminar productos del carrito*/ 
function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(producto => producto.nombre !== nombre);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    actualizarCarritoFlotante();
}

/*Función para actualizar el carrito flotante (el ícono en la navbar)*/
function actualizarCarritoFlotante() {
    const carritoFlotante = document.querySelector('.carrito-flotante');
    const cantidadProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    carritoFlotante.innerHTML = `<img src="/TallerDos-master/src/assets/Imagenes/anadir-al-carrito.png" alt="Carrito de compras"><span>${cantidadProductos}</span>`;
}

/*Función para vaciar el carrito*/
function vaciarCarrito() {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    actualizarCarritoFlotante();
}

/*Mostrar el carrito cuando la página se carga*/
window.onload = function() {
    mostrarCarrito();
    actualizarCarritoFlotante();
};
function realizarCompra() {
    alert('¡Compra realizada con éxito!');
    vaciarCarrito();
}
/*boton salir*/
document.getElementById('salirBtn').addEventListener('click', function() {
    window.location.href = 'index.html';  // Redirige al usuario a la página de inicio
});
