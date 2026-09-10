
// ========================================
// MAIN
// ========================================


// ========================================
// LOAD COMPONENT
// ========================================

async function loadComponent(
    elementId,
    componentPath
) {

    const element =
        document.getElementById(elementId);


    if (!element) {

        console.error(
            `Element #${elementId} not found.`
        );

        return false;

    }


    try {

        const response =
            await fetch(componentPath);


        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }


        const html =
            await response.text();


        element.innerHTML = html;


        return true;

    }

    catch (error) {

        console.error(
            `Error loading ${componentPath}:`,
            error
        );

        return false;

    }

}


// ========================================
// LOAD ALL COMPONENTS
// ========================================

async function loadPortfolio() {
    await loadComponent(
        'navbar',
        'components/navbar.html'
    );


    await loadComponent(
        'home',
        'components/home.html'
    );


    await loadComponent(
        'about',
        'components/about.html'
    );


    await loadComponent(
        'career',
        'components/career.html'
    );


    await loadComponent(
        'skills',
        'components/skills.html'
    );

    const loaded = await loadComponent(
        'projects',
        'components/projects.html'
    );

    await loadComponent(
        'contact',
        'components/contact.html'
    );


    // ========================================
    // INITIALIZE JAVASCRIPT
    // ========================================

    initNavigation();
    initProjects();

}


// ========================================
// START APPLICATION
// ========================================

document.addEventListener(
    'DOMContentLoaded',
    loadPortfolio
);
