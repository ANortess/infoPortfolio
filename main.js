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
    } else {
        title_thelaststronghold.className = 'game-title title_right';
        image_thelaststronghold.className = 'image_side img_right';
        text_thelaststronghold.className = 'game_text text_right';
        languajes_thelaststronghold.className = 'language-boxes tools_right';
        links_thelaststronghold.className = 'image-links right_links';

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
    const carouselItems = document.querySelectorAll('.carousel-item');
    const showMoreButton = document.getElementById('show-more');
    const showLessButton = document.getElementById('show-less');

    // Mostrar los primeros dos elementos
    for (let i = 0; i < 2; i++) {
        if (carouselItems[i]) {
            carouselItems[i].classList.add('visible');
        }
    }

    showMoreButton.addEventListener('click', function () {
        carouselItems.forEach(item => item.classList.add('visible'));
        showMoreButton.style.display = 'none';
        showLessButton.style.display = 'inline-block';
    });

    showLessButton.addEventListener('click', function () {
        carouselItems.forEach((item, index) => {
            if (index >= 2) {
                item.classList.remove('visible');
            }
        });
        showMoreButton.style.display = 'inline-block';
        showLessButton.style.display = 'none';
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