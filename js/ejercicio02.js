function muestraOculta(id) {
    var contenidos = document.getElementById("contenidos_"+id);
    var enlaces = document.getElementById("enlace_"+id);
if (contenidos.style.display=="" || contenidos.style.display=="block"){
            contenidos.style.display = "none";
            enlaces.innerHTML = "Mostrar contenidos";
}else{
            contenidos.style.display = "block";
            enlaces.innerHTML = "Ocultar contenidos";
};
}