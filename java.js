document.getElementById("botonDescargar").addEventListener("click", function() {
    var urls = [
        "Carta_1.png",
        "Carta_2.png",
        "Carta_3.png",
        "Carta_4.png",
        "Carta_5.png",
        "Carta_6.png"
    ];

    urls.forEach(function(url) {
        var link = document.createElement("a");
        link.href = url;
        link.download = url.substring(url.lastIndexOf("/") + 1); // Nombre de archivo para la descarga
        document.body.appendChild(link); // Agregar el enlace al cuerpo del documento
        link.click(); // Simular clic en el enlace
        document.body.removeChild(link); // Eliminar el enlace del cuerpo del documento después de la descarga
    });
});
