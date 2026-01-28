const toggleButton = document.querySelector('.nav_toggle');
const navMenu = document.querySelector('.nav_menu');
const body = document.body; // Usaremos el body para alternar la clase

// Al hacer clic en el botón de las tres barras
//toggleButton.addEventListener('click', () => {
   // navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
   // body.classList.toggle('menu-hidden'); // Alternar clase para ajustar el margen
//});

// Verificar el tamaño de la pantalla al cargar y al cambiar tamaño
function checkScreenWidth() {
    if (window.innerWidth <= 1000) {
        navMenu.style.display = 'none'; // Ocultar menú si la pantalla es pequeña
        body.classList.add('menu-hidden'); // Ajustar márgenes
    } else {
        navMenu.style.display = 'block'; // Mostrar menú si la pantalla es grande
        body.classList.remove('menu-hidden'); // Restaurar márgenes
    }
}

function checkScreenWidthAndChangeClass() {
    const title_thelaststronghold = document.getElementById('title_thelaststronghold');
    const image_thelaststronghold = document.getElementById('image_thelaststronghold');
    const text_thelaststronghold = document.getElementById('text_thelaststronghold');
    const languajes_thelaststronghold = document.getElementById('languajes_thelaststronghold');
    const links_thelaststronghold = document.getElementById('links_thelaststronghold');

    const title_coolvac = document.getElementById('title_coolvac');
    const image_coolvac = document.getElementById('image_coolvac');
    const text_coolvac = document.getElementById('text_coolvac');
    const languajes_coolvac = document.getElementById('languaje_coolvac');
    const links_coolvac = document.getElementById('links_coolvac');
    
    const title_drink = document.getElementById('title_drink');
    const image_drink = document.getElementById('image_drink');
    const text_drink = document.getElementById('text_drink');
    const languajes_drink = document.getElementById('languaje_drink');
    const links_drink = document.getElementById('links_drink');

    const title_sky = document.getElementById('title_sky');
    const image_sky = document.getElementById('image_sky');
    const text_sky = document.getElementById('text_sky');
    const languajes_sky = document.getElementById('languaje_sky');
    const links_sky = document.getElementById('links_sky');

    const title_zombie = document.getElementById('title_zombie');
    const image_zombie = document.getElementById('image_zombie');
    const text_zombie = document.getElementById('text_zombie');
    const languajes_zombie = document.getElementById('languaje_zombie');
    const links_zombie = document.getElementById('links_zombie');
    
    const title_novadolce = document.getElementById('title_novadolce');
    const image_novadolce = document.getElementById('image_novadolce');
    const text_novadolce = document.getElementById('text_novadolce');
    const languajes_novadolce = document.getElementById('languaje_novadolce');
    const links_novadolce = document.getElementById('links_novadolce');
    
    const title_pagephotos = document.getElementById('title_pagephotos');
    const image_pagephotos = document.getElementById('image_pagephotos');
    const text_pagephotos = document.getElementById('text_pagephotos');
    const languajes_pagephotos = document.getElementById('languaje_pagephotos');
    const links_pagephotos = document.getElementById('links_pagephotos');

    if (window.innerWidth <= 750) {
        title_thelaststronghold.className = 'game_title_redimensional'; 
        image_thelaststronghold.className = 'image_redimensional';
        text_thelaststronghold.className = 'game_text_redimensional';
        languajes_thelaststronghold.className = 'language_boxes_redimensional';
        links_thelaststronghold.className = 'image_links_redimensional';

        title_coolvac.className = 'game_title_redimensional'; 
        image_coolvac.className = 'image_redimensional';
        text_coolvac.className = 'game_text_redimensional';
        languajes_coolvac.className = 'language_boxes_redimensional';
        links_coolvac.className = 'image_links_redimensional';
        
        title_drink.className = 'game_title_redimensional'; 
        image_drink.className = 'image_redimensional';
        text_drink.className = 'game_text_redimensional';
        languajes_drink.className = 'language_boxes_redimensional';
        links_drink.className = 'image_links_redimensional';
        
        title_sky.className = 'game_title_redimensional'; 
        image_sky.className = 'image_redimensional';
        text_sky.className = 'game_text_redimensional';
        languajes_sky.className = 'language_boxes_redimensional';
        links_sky.className = 'image_links_redimensional';
        
        title_zombie.className = 'game_title_redimensional'; 
        image_zombie.className = 'image_redimensional';
        text_zombie.className = 'game_text_redimensional';
        languajes_zombie.className = 'language_boxes_redimensional';
        links_zombie.className = 'image_links_redimensional';

        title_novadolce.className = 'game_title_redimensional'; 
        image_novadolce.className = 'image_redimensional';
        text_novadolce.className = 'game_text_redimensional';
        languajes_novadolce.className = 'language_boxes_redimensional';
        links_novadolce.className = 'image_links_redimensional';

        title_pagephotos.className = 'game_title_redimensional'; 
        image_pagephotos.className = 'image_redimensional';
        text_pagephotos.className = 'game_text_redimensional';
        languajes_pagephotos.className = 'language_boxes_redimensional';
        links_pagephotos.className = 'image_links_redimensional';
    } else {
        title_thelaststronghold.className = 'game-title title_left';
        image_thelaststronghold.className = 'image_side img_left';
        text_thelaststronghold.className = 'game_text text_left';
        languajes_thelaststronghold.className = 'language-boxes tools_left';
        links_thelaststronghold.className = 'image-links left_links';

        title_coolvac.className = 'game-title title_right';
        image_coolvac.className = 'image_side img_right';
        text_coolvac.className = 'game_text text_right';
        languajes_coolvac.className = 'language-boxes tools_right';
        links_coolvac.className = 'image-links right_links';
        
        title_drink.className = 'game-title title_left';
        image_drink.className = 'image_side img_left';
        text_drink.className = 'game_text text_left';
        languajes_drink.className = 'language-boxes tools_left';
        links_drink.className = 'image-links left_links';
        
        title_sky.className = 'game-title title_right';
        image_sky.className = 'image_side img_right';
        text_sky.className = 'game_text text_right';
        languajes_sky.className = 'language-boxes tools_right';
        links_sky.className = 'image-links right_links';
        
        title_zombie.className = 'game-title title_left';
        image_zombie.className = 'image_side img_left';
        text_zombie.className = 'game_text text_left';
        languajes_zombie.className = 'language-boxes tools_left';
        links_zombie.className = 'image-links left_links';
        
        title_novadolce.className = 'game-title title_left';
        image_novadolce.className = 'image_side img_left';
        text_novadolce.className = 'game_text text_left';
        languajes_novadolce.className = 'language-boxes tools_left';
        links_novadolce.className = 'image-links left_links';

        title_novadolce.className = 'game-title title_left';
        image_novadolce.className = 'image_side img_left';
        text_novadolce.className = 'game_text text_left';
        languajes_novadolce.className = 'language-boxes tools_left';
        links_novadolce.className = 'image-links left_links';
    }
}

// Ejecutar cuando la ventana cambia de tamaño
window.addEventListener('resize', checkScreenWidthAndChangeClass);

// Ejecutar al cargar la página para aplicar el estilo correcto inicialmente
checkScreenWidthAndChangeClass();

// Ejecutar cuando la ventana cambia de tamaño
window.addEventListener('resize', checkScreenWidth);

// Ejecutar al cargar la página
checkScreenWidth();


document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const carouselItems = document.querySelectorAll('.carousel-item');
    const showMoreButton = document.getElementById('show-more');
    const showLessButton = document.getElementById('show-less');
    
    let currentFilter = 'all';

    function updateVisibility(showAll = false) {
        // 1. Obtenemos solo los que coinciden con el filtro actual
        const filtered = Array.from(carouselItems).filter(item => {
            if (currentFilter === 'all') return true;
            return item.classList.contains(currentFilter);
        });

        // 2. Primero ocultamos ABSOLUTAMENTE todo
        carouselItems.forEach(item => {
            item.classList.add('hide-filter');
            item.classList.remove('visible');
        });

        // 3. A los que pasan el filtro, les quitamos el 'hide-filter'
        filtered.forEach((item, index) => {
            item.classList.remove('hide-filter');
            
            // 4. Aplicamos la lógica de "Show More" solo a estos
            if (showAll || index < 2) {
                item.classList.add('visible');
            }
        });

        // 5. Gestionar visibilidad de los botones
        if (filtered.length <= 2) {
            showMoreButton.style.display = 'none';
            showLessButton.style.display = 'none';
        } else {
            showMoreButton.style.display = showAll ? 'none' : 'inline-block';
            showLessButton.style.display = showAll ? 'inline-block' : 'none';
        }
    }

    // Eventos de los botones de FILTRO
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            currentFilter = button.getAttribute("data-filter");
            updateVisibility(false); // Resetear a ver solo 2 al cambiar filtro
        });
    });

    // Eventos de los botones VER MÁS / MENOS
    showMoreButton.addEventListener('click', () => updateVisibility(true));
    showLessButton.addEventListener('click', () => updateVisibility(false));

    // Inicializar la página
    updateVisibility(false);
});

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".carousel-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Cambiar estado activo del botón
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            projectItems.forEach(item => {
                // Si el filtro es "all", mostramos todos
                if (filterValue === "all") {
                    item.classList.remove("hidden");
                } else {
                    // Si el item tiene la clase que coincide con el filtro, lo mostramos
                    if (item.classList.contains(filterValue)) {
                        item.classList.remove("hidden");
                    } else {
                        item.classList.add("hidden");
                    }
                }
            });
            
            // Si usas el botón de "Show More", quizás quieras resetear su lógica aquí
        });
    });
});


function toggleMenu() {
    const overlayMenu = document.getElementById('overlayMenu');
    overlayMenu.classList.toggle('show'); // Agrega o quita la clase "show"
}

// Escucha los cambios en el tamaño de la ventana
window.addEventListener('resize', function() {
    const overlayMenu = document.getElementById('overlayMenu');
    if (1000 <= window.innerWidth && overlayMenu.classList.contains('show')) {
        overlayMenu.classList.remove('show'); // Oculta el menú si la pantalla es pequeña
    }
});