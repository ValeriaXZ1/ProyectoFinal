function validarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let fechaNacimiento = document.getElementById("fecha_nacimiento").value.trim();


    // Validar que todos los campos requeridos estén llenos
    if (!nombre || !email || !telefono || !fechaNacimiento || !promocion) {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    // Validar formato del correo electrónico
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Validar formato del teléfono (sólo números y mínimo 10 dígitos)
    let telefonoRegex = /^[0-9]{10,15}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, ingrese un número de teléfono válido (mínimo 10 dígitos).");
        return false;
    }

    // Si todas las validaciones pasan
    alert("Formulario enviado correctamente.");
    return true;
}