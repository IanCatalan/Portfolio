//función para cambiar de modo oscuro a claro y viceversa 

function cambiarTema(tema){
    // Cambia el atributo dell body
    document.body.setAttribute('data-bs-theme', tema);
    // Aqui se guarda la variable de manera local para que el user mantenga su preferencia
    localStorage.setItem('theme', tema);
    // Cambio de icono

    var cambiarBotonTema = document.getElementById('cambiarTema');
    if (cambiarBotonTema) {
        cambiarBotonTema.innerHTML = tema === 'dark' ?  '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
    }
    //usar console.log(`cambiado a ${tema}`); para saber si funciona el cambio
}
// Aqui se ve la preferencia del usuario y se usa || para poner por defecto dark si es que no hay preferencia 
var temaActual = localStorage.getItem('theme') || 'dark';
cambiarTema(temaActual);
// Aqui se está reaccionando al evento click para cambiar entre light y dark
var cambiarBotonTema = document.getElementById('cambiarTema');
if (cambiarBotonTema) {
    cambiarBotonTema.addEventListener('click', () => {
        temaActual = temaActual === 'dark' ? 'light' : 'dark';
        cambiarTema(temaActual);
    });
}

//Inicializar los tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

cambiarTema