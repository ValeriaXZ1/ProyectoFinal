<?php
include("conexion.php");
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Comprobar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $direccion = $_POST['direccion'];
    $sabor = $_POST['sabor'];
    $promocion = $_POST['promocion'];
    $comentarios = $_POST['comentarios'];

    // Preparar la consulta SQL para insertar los datos
    $sql = "INSERT INTO registros (nombre, email, telefono, fecha_nacimiento, direccion, sabor, promocion, comentarios)
            VALUES ('$nombre', '$email', '$telefono', '$fecha_nacimiento', '$direccion', '$sabor', '$promocion', '$comentarios')";

    // Ejecutar la consulta y verificar si se insertó correctamente
    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso. ¡Gracias por registrarte!";
    } else {
        echo "Error al registrar: " . $conn->error;
    }
}

// Cerrar la conexión a la base de datos
$conn->close();
?>