// Función para ajustar la fecha mínima de entrega
window.onload = function() {
    // Verifica si ya se ha configurado la fecha mínima
    if (!localStorage.getItem("fecha_entrega_configurada")) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        document.getElementById("fecha_entrega").setAttribute("min", today);
        
        // Marca que la fecha mínima ha sido configurada
        localStorage.setItem("fecha_entrega_configurada", true);
    }
};

// Función para guardar la selección del tipo de hilo en localStorage
function guardarSeleccionTipoHilo() {
    var tipoHilo = document.getElementById("tipo_hilo").value;
    localStorage.setItem("tipo_hilo_amigurumi", tipoHilo);
}

// Ejemplo de función para guardar la selección del tamaño en localStorage
function guardarSeleccionTamaño() {
    var radios = document.getElementsByName("tamano");
    var tamanoSeleccionado = "";

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            tamanoSeleccionado = radios[i].value;
            break;
        }
    }

    localStorage.setItem("tamano_amigurumi", tamanoSeleccionado);
}

// Ejemplo de función para guardar la selección de colores en localStorage
function guardarSeleccionColores() {
    var numColores = document.getElementById("num_colores").value;
    localStorage.setItem("num_colores_amigurumi", numColores);
}

// Función para enviar los detalles por WhatsApp
function enviarDetallesPorWhatsApp() {
    // Obtén los datos necesarios de tu página
    var nombre = document.getElementById('nombre').innerText; // Ejemplo de obtener el nombre
    var precio = document.getElementById('precio').innerText; // Ejemplo de obtener el precio

    // Formatea el mensaje
    var mensaje = `¡Hola! Mi cotización:\nNombre: ${nombre}\nPrecio: ${precio}`;

    // Codifica el mensaje para incluirlo en el enlace de WhatsApp
    var mensajeCodificado = encodeURIComponent(mensaje);

    // Crea el enlace de WhatsApp
    var enlaceWhatsApp = `whatsapp://send?text=${mensajeCodificado}`;

    // Redirige al enlace de WhatsApp
    window.location.href = enlaceWhatsApp;
}
