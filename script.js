document.addEventListener("DOMContentLoaded", () => {
    // Obtén todos los elementos del menú
    const menuLinks = document.querySelectorAll("nav ul.menu li a");

    // Agrega el evento click a cada enlace del menú
    menuLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();  // Evita el comportamiento predeterminado de desplazamiento
            const targetId = link.getAttribute("href").substring(1); // Obtén el id del destino
            showSection(targetId);  // Llama a la función para mostrar la sección
        });
    });

    // Función para mostrar la sección y ocultar las demás
    function showSection(targetId) {
        // Oculta todas las secciones
        document.querySelectorAll(".main-content section").forEach(section => {
            section.style.display = "none";
        });
        
        // Muestra la sección seleccionada
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = "block";
        }
    }

    // Muestra solo la sección de inicio al cargar la página
    showSection("inicio");
});

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}
