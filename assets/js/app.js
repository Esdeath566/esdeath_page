



// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Tu código JavaScript aquí, que se ejecutará después de que se cargue el DOM







    let navlinks = document.querySelector('menu nav ul li a');

    menuItems.forEach((item) => {
        item.addEventListener('click', function () {
            // Eliminar la clase 'active' de todos los elementos
            menuItems.forEach((item) => {
                item.classList.remove('active');
            });
    
            // Agregar la clase 'active' al elemento clicado
            item.classList.add('active');
        });
    });











    console.log('¡El script se cargó correctamente!');
});