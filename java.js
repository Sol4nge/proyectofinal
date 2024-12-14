function toggle() {
    var trailer = document.querySelector(".trailer"); // Selecciona el contenedor del video
    trailer.classList.toggle("active"); // Activa o desactiva la visibilidad
}

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="img/sun.png"
    } else{
        icon.src="img/moon.png"
    }
}