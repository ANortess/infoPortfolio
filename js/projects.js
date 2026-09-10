// ========================================
// PROJECTS
// ========================================


// ========================================
// PROJECT DATA
// ========================================

const projects = [

    // ========================================
    // FEATURED
    // ========================================
    
    {
        id: 'fraud-analytics-dashboard',
        title: 'Fraud Analytics Dashboard',
        category: 'data',
        type: 'featured',

        image: 'assets/projects/fraud_powerbi.png',

        shortDescription:
            'Interactive Power BI dashboard for exploring fraudulent banking transactions through multiple analytical views.',

        description: `
            An interactive Power BI dashboard focused on the analysis
            of fraudulent banking transactions.
            The report is structured across multiple pages and includes
            interactive navigation, bookmarks, dynamic views, and
            different analytical sections to explore transaction
            behaviour and fraud patterns.
        `,

        technologies: [
            'powerbi',
            'python',
            'mysql'
            
        ],

        links: [
            {
                text: 'GitHub',
                url: 'https://github.com/ANortess/Fraud-Analysis-Dashboard'
            }
        ]
    },

    {
        id: 'the-last-stronghold',
        title: 'The Last Stronghold',
        category: 'game',
        type: 'featured',

        image: 'assets/projects/the_last_stronghold.png',

        shortDescription:
            'Exploration and survival game combining strategic base management, dungeon exploration and AI-driven combat.',

        description: `
            The Last Stronghold is an exploration and survival game
            that combines strategic base management with adventure
            inside a dangerous dungeon. Players must gather resources,
            upgrade their gear and fortress, and face enemies with
            decision tree-based AI for dynamic combat.
        `,

        technologies: [
            'unity',
            'vc',
            'csharp'
        ],

        links: [
            {
                text: 'GitHub',
                url: 'https://github.com/ANortess/thelaststronghold'
            },
            {
                text: 'Link',
                url: 'https://imthenorth.itch.io/the-last-stronghold'
            },
            {
                text: 'Youtube',
                url: 'https://www.youtube.com/watch?v=c1x2V6KRabs'
            }
        ]
    },

    {
        id: 'la-nova-dolce',
        title: 'La Nova Dolce',
        category: 'web',
        type: 'featured',

        image: 'assets/projects/la_nova_dolce.png',

        shortDescription:
            'Professional gastronomic platform built with React and designed with a Mobile-First architecture.',

        description: `
            A professional gastronomic platform built with React
            featuring an interactive multilingual menu.
            Fully optimized for all devices through a robust
            Mobile-First architecture.
        `,

        technologies: [
            'react',
            'html',
            'css',
            'js'
        ],

        links: [
            {
                text: 'GitHub',
                url: 'https://github.com/ANortess/LaNovaDolce'
            },
            {
                text: 'Link',
                url: 'https://la-nova-dolce.vercel.app'
            }
        ]
    },

    // ========================================
    // HIGHLIGHTS
    // ========================================
    
    {
        id: 'statistical-analysis',
        title: 'Statistical Analysis & Time Series',
        category: 'data',
        type: 'highlight',

        image: 'assets/projects/statistics.png',

        shortDescription:
            'Statistical analysis project covering regression, prediction, diagnostics and ARIMA time-series modelling.',

        description: `
            Statistical analysis project developed in Python,
            covering regression, predictions, diagnostics and
            time-series modelling using the Box-Jenkins methodology.
        `,

        technologies: [
            'python',
            'numpy',
            'pandas',
            'matplotlib',
            'seaborn',
            'statsmodels'
        ],

        links: [
            {
                text: 'Link',
                url: 'assets/pdfs/statistics-Nortes_Alejandro.pdf'
            }
        ]
    },

    {
        id: 'personal-cloud-gallery',
        title: 'Personal Cloud Gallery',
        category: 'web',
        type: 'highlight',

        image: 'assets/projects/page_photos.jpeg',

        shortDescription:
            'Full-Stack media management system built with React and Node.js.',

        description: `
            Full-Stack media management system built with React
            and Node.js, featuring authentication, database
            persistence and production deployment.
        `,

        technologies: [
            'html',
            'css',
            'js',
            'mysql',
            'react',
            'node'
        ],

        links: [
            {
                text: 'GitHub',
                url: 'https://github.com/ANortess/pagePhotos'
            },
            {
                text: 'Link',
                url: 'https://photos-page-coral.vercel.app'
            }
        ]
    },
    // ========================================
    // GRID PROJECTS
    // ========================================

    
    {
        id: 'netflix-data-warehouse',
        title: 'Netflix Data Warehouse',
        category: 'data',
        type: 'grid',

        image: 'assets/projects/netflix_sql.png',

        shortDescription:
            'SQL data warehouse project based on Netflix data using a nine-table star schema and advanced analytical queries.',

        description: `
            Netflix data warehouse built with Python and SQL,
            including nine related tables, a star schema,
            data validation and analytical queries with joins.
        `,

        technologies: [
            'sql',
            'python',
            'pandas',
            'mysql'
        ],

        links: [
            {
                text: 'GitHub',
                url: 'https://github.com/ANortess/MySQL-Netflix_Titles'
            }
        ]
    },

    {
        id: 'fraud-detection-pipeline',
        title: 'Fraud Detection Data Pipeline',
        category: 'data',
        type: 'grid',

        image: 'assets/projects/fraud_python.png',

        shortDescription:
            'End-to-end Python data pipeline for cleaning, transforming and analyzing more than 1 million banking transactions.',

       description: `
            Data analysis pipeline developed in Python and Jupyter,
            following a Raw → Clean → Features → Visualization workflow
            to process and analyze over 1 million banking transactions.
        `,

        technologies: [
            'python',
            'numpy',
            'pandas',
            'matplotlib',
            'seaborn',
        ],

        links: [
            {
                text: 'GitHub',
                url: 'https://github.com/ANortess/Fraud-Detection-Transactions'
            }
        ]
    },

    {
        id: 'drink-or-challenge',
        title: 'Drinks or Challenge',
        category: 'game',
        type: 'grid',

        image: 'assets/projects/drinks_or_challenges.png',

        shortDescription:
            'Party game using a database to manage cards and player names.',

        description: `
            A party game that uses a database to store cards
            and player names, designed to be played with friends.
        `,

        technologies: [
            'android',
            'kotlin'
        ],

        links: [
            {
                text: 'GitHub',
                url: 'https://github.com/ANortess/DrinkOrChallenge'
            }
        ]
    },

    {
        id: 'cool-vac',
        title: 'Cool Vac',
        category: 'game',
        type: 'grid',

        image: 'assets/projects/coolvac.png',

        shortDescription:
            'Interactive game focused on healthcare, exploration, dialogues and mini-games.',

        description: `
            A game where you have to figure out how to heal people
            through assistance, dialogues, events, and mini-games,
            while also being able to explore the map.
        `,

        technologies: [
            'unity',
            'vc',
            'csharp'
        ],

        links: [
            {
                text: 'GitHub',
                url: 'https://github.com/ANortess/CoolVac'
            },
            {
                text: 'Link',
                url: 'https://imthenorth.itch.io/cool-vac'
            }
        ]
    },

    {
        id: 'zombie-running',
        title: 'Zombie Running',
        category: 'game',
        type: 'grid',

        image: 'assets/projects/zombie_running.png',

        shortDescription:
            'Web survival game focused on combat, exploration and resource management.',

        description: `
            Web survival game where players leave the safe zone,
            fight zombies, collect resources and upgrade weapons
            and the map.
        `,

        technologies: [
            'html',
            'css',
            'js'
        ],

        links: [
            {
                text: 'GitHub',
                url: 'https://github.com/ANortess/ZombieRunning'
            }
        ]
    },


    {
        id: 'living-sky',
        title: 'Living Sky',
        category: 'game',
        type: 'grid',

        image: 'assets/projects/living_sky.png',

        shortDescription:
            'Turn-based game where players face artificial intelligence across a strategic map.',

        description: `
            Turn-based game where you face artificial intelligence
            with obstacles and upgrades scattered across the map.
        `,

        technologies: [
            'unity',
            'vc',
            'csharp'
        ],

        links: [
            {
                text: 'GitHub',
                url: 'https://github.com/ANortess/LivingSky'
            },

            {
                text: 'Link',
                url: 'https://la-nova-dolce.vercel.app'
            }
        ]
    }


];


// ========================================
// INITIALIZATION
// ========================================

function initProjects() {
    const container = document.getElementById('projects-container');

    if (!container) {
        console.warn('Projects container not found.');
        return;
    }

    renderProjects(container);

    initProjectFilters();
    initShowMoreLess();

    equalizeProjectHeights();
}
// ========================================
// EQUALIZE PROJECT HEIGHTS
// ========================================

function equalizeProjectHeights() {

    const isMobile = window.innerWidth <= 750;

    const featuredProjects =
        document.querySelectorAll('.project-featured');

    const highlightProjects =
        document.querySelectorAll('.project-highlight');


    // ========================================
    // MOBILE
    // ========================================

    if (isMobile) {

        featuredProjects.forEach(project => {
            project.style.height = 'auto';
        });

        highlightProjects.forEach(project => {
            project.style.height = 'auto';
        });

        return;
    }


    // ========================================
    // FEATURED
    // ========================================

    equalizeProjectTypeHeight(
        featuredProjects,
        '.project-featured-content'
    );


    // ========================================
    // HIGHLIGHTS
    // ========================================

    equalizeProjectTypeHeight(
        highlightProjects,
        '.project-highlight-content'
    );
}


// ========================================
// EQUALIZE ONE PROJECT TYPE
// ========================================

function equalizeProjectTypeHeight(projects, contentSelector) {

    if (projects.length === 0) {
        return;
    }

    let maxHeight = 0;


    // ========================================
    // RESET
    // ========================================

    projects.forEach(project => {

        project.style.height = 'auto';

        const image = project.querySelector(
            ':scope > div:first-child'
        );

        if (image) {
            image.style.height = 'auto';
        }
    });


    // ========================================
    // MEASURE CONTENT
    // ========================================

    projects.forEach(project => {

        const content =
            project.querySelector(contentSelector);

        if (!content) {
            return;
        }

        maxHeight = Math.max(
            maxHeight,
            content.scrollHeight
        );
    });


    // ========================================
    // APPLY HEIGHT
    // ========================================

    projects.forEach(project => {

        project.style.height = `${maxHeight}px`;

        const image = project.querySelector(
            ':scope > div:first-child'
        );

        if (image) {
            image.style.height = '100%';
        }
    });
}


// ========================================
// RENDER PROJECTS
// ========================================

function renderProjects(container) {
    container.innerHTML = '';

    // ========================================
    // FEATURED SECTION
    // ========================================

    const featuredSection =
        document.createElement('div');

    featuredSection.className =
        'projects-featured-section';


    // ========================================
    // HIGHLIGHTS SECTION
    // ========================================

    const highlightsSection =
        document.createElement('div');

    highlightsSection.className =
        'projects-highlights-section';


    // ========================================
    // GRID SECTION
    // ========================================

    const gridSection =
        document.createElement('div');

    gridSection.className =
        'projects-grid-section';


    // ========================================
    // SECTION LABELS
    // ========================================

    featuredSection.innerHTML = `
        <div class="project-section-header">
            <span>01</span>
            <h3>FEATURED PROJECTS</h3>
        </div>
    `;

    highlightsSection.innerHTML = `
        <div class="project-section-header">
            <span>02</span>
            <h3>HIGHLIGHTS</h3>
        </div>
    `;

    gridSection.innerHTML = `
        <div class="project-section-header">
            <span>03</span>
            <h3>MORE PROJECTS</h3>
        </div>
    `;


    // ========================================
    // ADD PROJECTS TO SECTIONS
    // ========================================

    const gridContainer = document.createElement('div');
    gridContainer.className = 'projects-grid';
    projects.forEach(project => {
        const projectElement = createProjectElement(project);
        if (project.type === 'featured') {
            featuredSection.appendChild(projectElement);
        } else if (project.type === 'highlight') {
            highlightsSection.appendChild(projectElement);
        } else {
            gridContainer.appendChild(projectElement);
        }
    });
    gridSection.appendChild(gridContainer);


    // ========================================
    // APPEND SECTIONS
    // ========================================

    container.appendChild(featuredSection);
    container.appendChild(highlightsSection);
    container.appendChild(gridSection);
}


// ========================================
// CREATE PROJECT
// ========================================

function createProjectElement(project) {

    const article = document.createElement('article');

    article.classList.add(
        'carousel-item',
        project.category,
        project.type
    );

    article.dataset.project = project.id;


    // ========================================
    // FEATURED
    // ========================================

    if (project.type === 'featured') {

        article.innerHTML = `

            <div class="project-featured">

                <div class="project-featured-image">

                    <img
                        src="${project.image}"
                        alt="${project.title}"
                    >

                </div>


                <div class="project-featured-content">

                    <div class="project-label">
                        ${project.category.toUpperCase()}
                    </div>


                    <h2>
                        ${project.title}
                    </h2>


                    <!-- DESCRIPTION -->

                    <div class="project-description-wrapper">

                        <p class="project-short-description">
                            ${project.shortDescription}
                        </p>

                        <p class="project-description">
                            ${project.description}
                        </p>

                    </div>

                    <!-- SKILLS + LINKS -->

                    <div class="project-extra">

                        <div class="language-boxes">

                            ${createTechnologyElements(
                                project.technologies
                            )}

                        </div>


                        <div class="image-links">

                            ${createLinkElements(
                                project.links
                            )}

                        </div>

                    </div>
                    <!-- VIEW MORE -->

                    <button
                        class="project-view-more"
                        type="button"
                    >

                        <span>VIEW MORE</span>

                        <span class="view-more-arrow">
                            ↓
                        </span>

                    </button>

                </div>

            </div>

        `;

        initProjectExpand(article);

        return article;
    }


    // ========================================
    // HIGHLIGHT
    // ========================================

    if (project.type === 'highlight') {

        article.innerHTML = `

            <div class="project-highlight">

                <div class="project-highlight-image">

                    <img
                        src="${project.image}"
                        alt="${project.title}"
                    >

                </div>


                <div class="project-highlight-content">

                    <div class="project-label">
                        ${project.category.toUpperCase()}
                    </div>


                    <h2>
                        ${project.title}
                    </h2>


                    <!-- DESCRIPTION -->

                    <div class="project-description-wrapper">

                        <p class="project-short-description">
                            ${project.shortDescription}
                        </p>

                        <p class="project-description">
                            ${project.description}
                        </p>

                    </div>

                    <!-- SKILLS + LINKS -->

                    <div class="project-extra">

                        <div class="project-highlight-bottom">

                            <div class="language-boxes">

                                ${createTechnologyElements(
                                    project.technologies
                                )}

                            </div>


                            <div class="image-links">

                                ${createLinkElements(
                                    project.links
                                )}

                            </div>

                        </div>

                    </div>
                    <!-- VIEW MORE -->

                    <button
                        class="project-view-more"
                        type="button"
                    >

                        <span>VIEW MORE</span>

                        <span class="view-more-arrow">
                            ↓
                        </span>

                    </button>

                </div>

            </div>

        `;

        initProjectExpand(article);

        return article;
    }


    // ========================================
    // GRID
    // ========================================

    article.innerHTML = `

        <div class="project-grid-card">

            <div class="project-grid-image">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                >

            </div>


            <div class="project-grid-content">

                <div class="project-label">
                    ${project.category.toUpperCase()}
                </div>


                <h2>
                    ${project.title}
                </h2>


                <!-- DESCRIPTION -->

                <div class="project-description-wrapper">

                    <p class="project-short-description">
                        ${project.shortDescription}
                    </p>

                    <p class="project-description">
                        ${project.description}
                    </p>

                </div>

                <!-- SKILLS + LINKS -->

                <div class="project-extra">

                    <div class="language-boxes">

                        ${createTechnologyElements(
                            project.technologies
                        )}

                    </div>


                    <div class="image-links">

                        ${createLinkElements(
                            project.links
                        )}

                    </div>

                </div>

                <!-- VIEW MORE -->

                <button
                    class="project-view-more"
                    type="button"
                >

                    <span>VIEW MORE</span>

                    <span class="view-more-arrow">
                        ↓
                    </span>

                </button>

            </div>

        </div>

    `;

    initProjectExpand(article);

    return article;
}


// ========================================
// VIEW MORE / VIEW LESS
// ========================================

function initProjectExpand(article) {
    const button = article.querySelector('.project-view-more');

    if (!button) {
        return;
    }

    button.addEventListener('click', () => {
        const isExpanded = article.classList.toggle('expanded');

        if (isExpanded) {
            button.querySelector('span:first-child').textContent = 'VIEW LESS';
            button.querySelector('.view-more-arrow').textContent = '↑';
        } else {
            button.querySelector('span:first-child').textContent = 'VIEW MORE';
            button.querySelector('.view-more-arrow').textContent = '↓';
        }
        equalizeProjectHeights();
    });
}


// ========================================
// FEATURES
// ========================================

function createFeaturesElements(features) {

    if (!features || features.length === 0) {
        return '';
    }

    return `

        <div class="project-features">

            <div class="project-features-title">
                FEATURES
            </div>

            <ul>

                ${features
                    .map(feature => `
                        <li>${feature}</li>
                    `)
                    .join('')
                }

            </ul>

        </div>

    `;
}


// ========================================
// TECHNOLOGIES
// ========================================

function createTechnologyElements(technologies) {

    const technologyData = {

        unity: {
            name: 'Unity',
            image: 'assets/skills/logo_unity.png'
        },

        vc: {
            name: 'Visual Studio',
            image: 'assets/skills/logo_vc.png'
        },

        android: {
            name: 'Android Studio',
            image: 'assets/skills/logo_androidStudio.png'
        },

        html: {
            name: 'HTML',
            image: 'assets/skills/logo_html5.png'
        },

        css: {
            name: 'CSS',
            image: 'assets/skills/logo_css.png'
        },

        js: {
            name: 'JavaScript',
            image: 'assets/skills/logo_js.png'
        },

        python: {
            name: 'Python',
            image: 'assets/skills/logo_python.png'
        },

        csharp: {
            name: 'C#',
            image: 'assets/skills/logo_CSharp.png'
        },

        kotlin: {
            name: 'Kotlin',
            image: 'assets/skills/logo_kotlin.png'
        },

        react: {
            name: 'React',
            image: 'assets/skills/logo_react.png'
        },

        node: {
            name: 'Node.js',
            image: 'assets/skills/logo_node.png'
        },

        mysql: {
            name: 'MySQL',
            image: 'assets/skills/logo_mysql.png'
        },

        sql: {
            name: 'SQL',
            image: 'assets/skills/sql_logo.png'
        },

        powerbi: {
            name: 'Power BI',
            image: 'assets/skills/logo_powerbi.png'
        },

        numpy: {
            name: 'NumPy',
            image: '../assets/skills/numpy_logo.png'
        },

        pandas: {
            name: 'Pandas',
            image: '../assets/skills/pandas_logo.png'
        },

        matplotlib: {
            name: 'Matplotlib',
            image: '../assets/skills/matplotlib_logo.png'
        },

        seaborn: {
            name: 'Seaborn',
            image: '../assets/skills/seaborn_logo.png'
        },

        statsmodels: {
            name: 'Statsmodels',
            image: '../assets/skills/statsmodels_logo.png'
        }
    };


    return technologies
        .map(technology => {

            const data =
                technologyData[technology];


            if (!data) {

                console.warn(
                    `Technology not found: ${technology}`
                );

                return '';
            }


            return `

                <div
                    class="language-box ${technology}"
                >

                    <img
                        src="${data.image}"
                        alt="${data.name} Logo"
                        class="language-image"
                    >

                    <span class="language-text">
                        ${data.name}
                    </span>

                </div>

            `;
        })
        .join('');
}


// ========================================
// PROJECT LINKS
// ========================================

function createLinkElements(links) {

    const linkData = {

        GitHub: {
            image: 'assets/icons/github_logo.png',
            alt: 'GitHub'
        },

        Link: {
            image: 'assets/icons/link_logo.png',
            alt: 'Link'
        },

        Youtube: {
            image: 'assets/icons/youtube_logo.png',
            alt: 'YouTube'
        }
    };


    return links
        .map(link => {

            const data =
                linkData[link.text];


            if (!data) {

                console.warn(
                    `Link icon not found: ${link.text}`
                );

                return '';
            }


            return `

                <a
                    href="${link.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="${data.alt}"
                >

                    <img
                        src="${data.image}"
                        alt="${data.alt}"
                        class="link-image"
                    >

                </a>

            `;
        })
        .join('');
}


// ========================================
// FILTERS
// ========================================

function initProjectFilters() {

    const filterButtons = document.querySelectorAll('.filter-btn, .filter-all');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {

            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            const filter = button.dataset.filter;

            projectsShowingAll = false;

            updateProjectVisibility(filter, false);
        });
    });

    updateProjectVisibility('all', false);
}


// ========================================
// SHOW MORE / LESS
// ========================================

let projectsShowingAll = false;


function initShowMoreLess() {

    const showMoreButton =
        document.getElementById(
            'show-more'
        );

    const showLessButton =
        document.getElementById(
            'show-less'
        );


    if (showMoreButton) {

        showMoreButton.addEventListener(
            'click',
            () => {

                projectsShowingAll = true;


                const activeFilter =
                    document.querySelector(
                        '.filter-btn.active'
                    );


                const filter =
                    activeFilter
                        ? activeFilter.dataset.filter
                        : 'all';


                updateProjectVisibility(
                    filter,
                    true
                );

            }
        );
    }


    if (showLessButton) {

        showLessButton.addEventListener(
            'click',
            () => {

                projectsShowingAll = false;


                const activeFilter =
                    document.querySelector(
                        '.filter-btn.active'
                    );


                const filter =
                    activeFilter
                        ? activeFilter.dataset.filter
                        : 'all';


                updateProjectVisibility(
                    filter,
                    false
                );

            }
        );
    }
}


// ========================================
// UPDATE VISIBILITY
// ========================================

function updateProjectVisibility(filter, showAll) {

    const projectItems =
        document.querySelectorAll('.carousel-item');


    // ========================================
    // HIDE EVERYTHING
    // ========================================

    projectItems.forEach(project => {

        project.classList.remove('visible');

        project.classList.add('hide-filter');

    });


    // ========================================
    // FILTER PROJECTS
    // ========================================

    const filteredProjects =
        Array.from(projectItems).filter(project => {

            if (filter === 'all') {
                return true;
            }

            return project.classList.contains(filter);

        });


    // ========================================
    // SEPARATE GRID / FEATURED
    // ========================================

    const featuredProjects =
        filteredProjects.filter(project =>
            !project.classList.contains('grid')
        );

    const gridProjects =
        filteredProjects.filter(project =>
            project.classList.contains('grid')
        );


    // ========================================
    // SHOW FEATURED
    // ========================================

    // Featured/highlight projects are always visible
    // and don't count towards the 3-project limit.

    featuredProjects.forEach(project => {

        project.classList.remove('hide-filter');

        project.classList.add('visible');

    });


    // ========================================
    // SHOW GRID
    // ========================================

    // Show all grid projects if SHOW MORE
    // Otherwise show only the first 3.

    gridProjects.forEach((project, index) => {

        if (showAll || index < 3) {

            project.classList.remove('hide-filter');

            project.classList.add('visible');

        }

    });


    // ========================================
    // UPDATE SECTION
    // ========================================

    updateSectionVisibility();


    // ========================================
    // UPDATE BUTTONS
    // ========================================

    updateShowButtons(
        gridProjects.length,
        showAll
    );
}


// ========================================
// SECTION VISIBILITY
// ========================================

function updateSectionVisibility() {

    const sections = [
        '.projects-featured-section',
        '.projects-highlights-section',
        '.projects-grid-section'
    ];


    sections.forEach(sectionSelector => {

        const section =
            document.querySelector(
                sectionSelector
            );


        if (!section) {
            return;
        }


        const visibleProjects =
            section.querySelectorAll(
                '.carousel-item.visible'
            );


        if (visibleProjects.length === 0) {

            section.classList.add(
                'section-hidden'
            );

        } else {

            section.classList.remove(
                'section-hidden'
            );

        }

    });
}


// ========================================
// SHOW BUTTONS
// ========================================

function updateShowButtons(numberOfProjects, showAll) {

    const showMoreButton =
        document.getElementById('show-more');

    const showLessButton =
        document.getElementById('show-less');


    if (!showMoreButton || !showLessButton) {
        return;
    }


    // ========================================
    // 3 OR LESS GRID PROJECTS
    // ========================================

    if (numberOfProjects <= 3) {

        showMoreButton.style.display = 'none';

        showLessButton.style.display = 'none';

        return;
    }


    // ========================================
    // SHOW MORE / SHOW LESS
    // ========================================

    if (showAll) {

        showMoreButton.style.display = 'none';

        showLessButton.style.display = 'inline-block';

    } else {

        showMoreButton.style.display = 'inline-block';

        showLessButton.style.display = 'none';

    }
}