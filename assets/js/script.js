//función para cambiar de modo oscuro a claro y viceversa 
function cambiarTema(){
    const tema = document.querySelector("body")
    const imagen = document.querySelector("#imagenBoton")
    if (tema.getAttribute("data-bs-theme")==="dark") {
        tema.setAttribute("data-bs-theme","light")
        imagen.src = "assets/img/light_mode.svg"
    } else {
        tema.setAttribute("data-bs-theme","dark")
        imagen.src  = "assets/img/dark_mode.svg"
    }
}
//Inicializar los tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
cambiarTema