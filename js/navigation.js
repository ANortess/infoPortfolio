
// ========================================
// NAVIGATION
// ========================================

function initNavigation() {

    const navMenu = document.querySelector('.nav_menu');
    const body = document.body;

    if (!navMenu) {
        console.warn('Navigation menu not found.');
        return;
    }


    // ========================================
    // CHECK SCREEN WIDTH
    // ========================================

    function checkScreenWidth() {

        if (window.innerWidth <= 1000) {

            navMenu.style.display = 'none';

            body.classList.add('menu-hidden');

        } else {

            navMenu.style.display = 'block';

            body.classList.remove('menu-hidden');

        }

    }


    // ========================================
    // MOBILE OVERLAY MENU
    // ========================================

    function toggleMenu() {

        const overlayMenu =
            document.getElementById('overlayMenu');

        if (!overlayMenu) {
            return;
        }

        overlayMenu.classList.toggle('show');

    }


    // Hacemos la función accesible desde el HTML
    window.toggleMenu = toggleMenu;


    // ========================================
    // CLOSE MENU ON DESKTOP
    // ========================================

    function handleResize() {

        checkScreenWidth();

        const overlayMenu =
            document.getElementById('overlayMenu');

        if (!overlayMenu) {
            return;
        }

        if (
            window.innerWidth >= 1000 &&
            overlayMenu.classList.contains('show')
        ) {

            overlayMenu.classList.remove('show');

        }

    }


    // ========================================
    // EVENTS
    // ========================================

    window.addEventListener(
        'resize',
        handleResize
    );


    // ========================================
    // INITIALIZE
    // ========================================

    checkScreenWidth();

}

