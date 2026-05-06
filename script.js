// === ELEMENTS DU DOM ===
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const skillProgressBars = document.querySelectorAll('.skill-progress');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.querySelector('.contact-form');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// === NAVIGATION ACTIVE AU SCROLL ===
function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    let currentSectionId = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = section.id;
        }
    });

    if (currentSectionId) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[href="#${currentSectionId}"]`);
        if (activeLink) activeLink.classList.add('active');
    }
}

// === SCROLL DOUX ===
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// === ANIMATION DES COMPÉTENCES ===
function animateSkills() {
    const skillsSection = document.getElementById('competences');
    const skillsSectionTop = skillsSection.offsetTop;
    const skillsSectionHeight = skillsSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= skillsSectionTop + skillsSectionHeight / 2) {
        skillProgressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    }
}

// === CHANGEMENT DE FOND DE LA NAVBAR ===
function updateNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = window.scrollY > 50
        ? 'rgba(10, 10, 10, 0.98)'
        : 'rgba(10, 10, 10, 0.95)';
}

// === MODALES PROJETS ===
const projectData = {
    ap0: {
        title: "AP0 - Projet Portfolio",
        icon: "fas fa-folder-open",
        description: "L’AP0 consistait à créer un portfolio, suivi sur les deux années de BTS. Il correspond à un CV numérique permettant de présenter mon parcours, mes compétences, mes projets et ma veille informatique. J’ai d’abord utilisé un template Bootstrap, puis j’ai entièrement refait le portfolio afin de mieux comprendre le HTML et le CSS. J’ai ensuite retravaillé certaines parties avec l’aide de GitHub Copilot pour améliorer la structure et l’affichage.",
        features: [
            "Présentation du parcours et du CV",
            "Présentation des projets réalisés en BTS",
            "Affichage des compétences",
            "Intégration d’une veille informatique",
            "Refonte complète après une première version avec Bootstrap"
        ],
        technologies: [
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "Bootstrap", icon: "fab fa-bootstrap" },
            { name: "GitHub Copilot", icon: "fas fa-robot" }
        ],
        challenges: "Le principal défi était de passer d’un template Bootstrap à un site mieux maîtrisé, en comprenant réellement la structure HTML, le style CSS et l’organisation des sections."
    },

    ap1: {
        title: "AP1 - Site Activité",
        icon: "fas fa-table-tennis",
        description: "L’AP1 consistait à créer un site web complet sur une activité sportive. Contrairement au portfolio de départ, ce site a été réalisé à la main, sans template. Il contient plusieurs pages comme l’accueil, la présentation, les horaires et les tarifs. J’ai aussi ajouté un menu de navigation, un calculateur de tarifs en JavaScript, un formulaire avec validation des champs, une carte Google Maps et des images interactives.",
        features: [
            "Création de plusieurs pages HTML",
            "Menu de navigation entre les pages",
            "Page de tarifs avec calculateur JavaScript",
            "Formulaire avec validation des champs",
            "Intégration de Google Maps",
            "Images interactives"
        ],
        technologies: [
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "Google Maps", icon: "fas fa-map-marker-alt" },
            { name: "Regex", icon: "fas fa-check-circle" }
        ],
        challenges: "Le défi était de construire un site complet sans template, avec plusieurs pages cohérentes, une navigation claire et des fonctionnalités interactives en JavaScript."
    },

    ap2: {
        title: "AP2 - Site Dynamique",
        icon: "fas fa-database",
        description: "L’AP2 est la suite du site de tennis. L’objectif était de reprendre le site statique et de le rendre dynamique avec une base de données et une logique côté serveur en PHP. Le site permet de stocker et récupérer des informations comme les utilisateurs ou les réservations. J’ai mis en place un système de connexion avec sessions, un profil utilisateur avec données dynamiques, un système de réservation de terrain et une gestion des utilisateurs avec des rôles.",
        features: [
            "Connexion à une base de données",
            "Système de connexion avec sessions",
            "Profil utilisateur dynamique",
            "Réservation de terrain",
            "Gestion des utilisateurs",
            "Rôles administrateur et utilisateur",
            "Ajout, modification et suppression d’utilisateurs"
        ],
        technologies: [
            { name: "PHP", icon: "fab fa-php" },
            { name: "MySQL", icon: "fas fa-database" },
            { name: "PDO", icon: "fas fa-link" },
            { name: "Sessions", icon: "fas fa-user-lock" },
            { name: "CRUD", icon: "fas fa-pen-to-square" }
        ],
        challenges: "Le principal défi était de transformer un site statique en application dynamique, avec une vraie gestion des données, des utilisateurs, des réservations et des rôles."
    },

    atoo1: {
        title: "1er Stage - Atoo Next",
        icon: "fas fa-industry",
        description: "Mon premier stage a été réalisé chez Atoo Next, une entreprise basée à Nîmes qui développe des solutions permettant de connecter des sites e-commerce comme PrestaShop ou WooCommerce avec des logiciels de gestion. Ma mission était de créer et améliorer des modules permettant de générer automatiquement des données de test, comme des clients, des produits ou des commandes, afin de faciliter le travail des développeurs.",
        features: [
            "Amélioration d’un module PrestaShop",
            "Génération de produits avec déclinaisons",
            "Développement d’un module WooCommerce depuis zéro",
            "Génération automatique de clients",
            "Génération automatique de produits",
            "Génération automatique de commandes",
            "Utilisation de Git et GitLab"
        ],
        technologies: [
            { name: "PHP POO", icon: "fab fa-php" },
            { name: "MySQL", icon: "fas fa-database" },
            { name: "PrestaShop", icon: "fas fa-store" },
            { name: "WooCommerce", icon: "fab fa-wordpress" },
            { name: "GitLab", icon: "fab fa-gitlab" }
        ],
        challenges: "Le défi principal était de travailler dans un vrai contexte professionnel, avec du PHP orienté objet, Git et GitLab. Ce stage m’a aussi permis de comprendre l’importance de bien gérer ses commits, ses pushs et le suivi du code, après quelques erreurs de débutant assez classiques, malheureusement."
    },

    ap3: {
        title: "AP3 - Application Web (CodeIgniter)",
        icon: "fas fa-code",
        description: "L’AP3 s’inscrit dans la continuité de l’AP2. J’ai repris la même base de données du site de tennis, mais en la faisant évoluer avec le framework CodeIgniter. Le but était d’apprendre à structurer une application avec une architecture MVC et de travailler sur un projet plus proche d’une vraie application. Le projet m’a aussi introduit à la programmation en base de données avec SQL Server, notamment avec les triggers et certaines automatisations.",
        features: [
            "Architecture MVC avec CodeIgniter",
            "Réutilisation et évolution de la base de données du site de tennis",
            "Système de connexion avec sessions",
            "Gestion des rôles utilisateur",
            "Accès différents selon le profil",
            "Protection de certaines pages",
            "Triggers et automatisations en base de données",
            "Gestion des adhérents, coachs et administrateurs"
        ],
        technologies: [
            { name: "PHP", icon: "fab fa-php" },
            { name: "CodeIgniter", icon: "fas fa-fire" },
            { name: "SQL Server", icon: "fas fa-database" },
            { name: "MVC", icon: "fas fa-sitemap" },
            { name: "Triggers", icon: "fas fa-bolt" },
            { name: "Sessions", icon: "fas fa-user-lock" }
        ],
        challenges: "Le principal défi était d’organiser une application complète avec un framework, tout en gérant des accès différents selon les rôles et des automatisations côté base de données."
    },

    ap4: {
        title: "AP4 - Application Mobile",
        icon: "fas fa-mobile-alt",
        description: "L’AP4 est une version simplifiée de l’AP3. L’objectif était de reprendre certaines fonctionnalités pour les exposer via une API, afin qu’une application mobile puisse communiquer avec le site. J’ai créé une API avec CodeIgniter pour exposer des données comme les adhérents ou les événements, puis développé une application mobile avec Android Studio pour récupérer et afficher ces informations.",
        features: [
            "Création d’une API avec CodeIgniter",
            "Exposition de données comme les adhérents et événements",
            "Application mobile avec Android Studio",
            "Connexion utilisateur",
            "Récupération des données depuis l’API",
            "Affichage des informations sur mobile",
            "Gestion simple des rôles selon le profil"
        ],
        technologies: [
            { name: "CodeIgniter", icon: "fas fa-fire" },
            { name: "API", icon: "fas fa-plug" },
            { name: "Android Studio", icon: "fab fa-android" },
            { name: "Mobile", icon: "fas fa-mobile-alt" },
            { name: "Base de données", icon: "fas fa-database" }
        ],
        challenges: "Le défi était de comprendre comment une application mobile communique avec un back-end via une API, puis d’afficher correctement les données récupérées."
    },

    guitare: {
        title: "Projet Guitare",
        icon: "fas fa-guitar",
        description: "Ce projet avait pour objectif de remplacer un système papier par une solution numérique permettant à un client de configurer une guitare personnalisée. Je me suis principalement concentré sur la partie web développée avec Razor. Un utilisateur doit se connecter pour accéder à ses configurations, puis il peut les consulter, les modifier, les supprimer, passer une commande ou créer une nouvelle guitare personnalisée.",
        features: [
            "Connexion utilisateur",
            "Affichage des configurations personnelles",
            "Création d’une nouvelle guitare",
            "Modification d’une configuration",
            "Suppression d’une configuration",
            "Passage de commande",
            "Choix du vibrato, des micros et du bois",
            "Enregistrement des configurations et commandes en base de données"
        ],
        technologies: [
            { name: "C#", icon: "fas fa-code" },
            { name: "ASP.NET Razor", icon: "fas fa-server" },
            { name: "API", icon: "fas fa-plug" },
            { name: "SQL Server", icon: "fas fa-database" },
            { name: "Authentification", icon: "fas fa-user-lock" }
        ],
        challenges: "Le principal défi était de créer un système complet avec gestion utilisateur, configuration personnalisée, commandes et enregistrement fiable des données."
    },

    atoo2: {
        title: "2nd Stage - Atoo Next",
        icon: "fas fa-briefcase",
        description: "Mon deuxième stage chez AtooNext s’inscrit dans la continuité du premier, avec des problématiques plus avancées. Ma mission principale était de développer un système de connexion centralisée appelé SSO. Le principe est qu’un utilisateur se connecte une seule fois sur un site externe, puis soit automatiquement connecté sur plusieurs plateformes comme PrestaShop ou WooCommerce. En parallèle, j’ai aussi réalisé des tests avec Stripe pour comprendre l’intégration d’un système de paiement.",
        features: [
            "Développement d’un site de test avec CodeIgniter",
            "Système de connexion centralisée SSO",
            "Gestion de l’authentification",
            "Mise en place de tokens",
            "Transmission de la connexion entre plusieurs applications",
            "Redirection vers PrestaShop ou WooCommerce déjà connecté",
            "Test d’intégration Stripe",
            "Récupération de produits via API",
            "Redirection vers Stripe pour finaliser un achat",
            "Tests d’abonnements classiques et premium"
        ],
        technologies: [
            { name: "PHP", icon: "fab fa-php" },
            { name: "CodeIgniter", icon: "fas fa-fire" },
            { name: "SSO", icon: "fas fa-key" },
            { name: "Tokens", icon: "fas fa-ticket-alt" },
            { name: "Stripe", icon: "fab fa-stripe" },
            { name: "PrestaShop", icon: "fas fa-store" },
            { name: "WooCommerce", icon: "fab fa-wordpress" }
        ],
        challenges: "La principale difficulté était de comprendre la logique du SSO, car cela demande de gérer correctement les échanges entre plusieurs applications, les redirections et les tokens. Le test Stripe n’a pas complètement abouti, mais il m’a permis de mieux comprendre le fonctionnement et les limites de ce type d’intégration."
    }
};

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalChallenges').textContent = project.challenges;
    document.querySelector('#modalIcon i').className = project.icon;

    document.getElementById('modalTech').innerHTML = project.technologies
        .map(t => `<span class="tech-tag">${t.name}</span>`).join('');

    document.getElementById('modalFeatures').innerHTML = project.features
        .map(f => `<li>${f}</li>`).join('');

    document.getElementById('modalTechnologies').innerHTML = project.technologies
        .map(t => `<div class="tech-detail-item"><i class="${t.icon}"></i><span>${t.name}</span></div>`).join('');

    document.getElementById('projectModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

function initModals() {
    const modal = document.getElementById('projectModal');
    document.querySelector('.modal-close').addEventListener('click', closeProjectModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeProjectModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProjectModal(); });
}

// === NOTIFICATIONS ===
function showNotification(message, type = 'info') {
    const old = document.querySelector('.notification');
    if (old) old.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px;
        background: ${type === 'success' ? '#00d4aa' : type === 'error' ? '#ff6b6b' : '#007fff'};
        color: white; padding: 1rem 1.5rem;
        border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        transform: translateX(100%); transition: transform 0.3s ease;
        z-index: 9999; max-width: 300px;
    `;

    document.body.appendChild(notification);
    setTimeout(() => notification.style.transform = 'translateX(0)', 100);

    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });

    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 4000);
}

// === MENU MOBILE ===
function initMobileMenu() {
    if (!mobileMenuToggle || !navMenu) return;
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    navLinks.forEach(link => link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }));
}

// === ANIMATIONS AU SCROLL ===
function initScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('animate-in'); });
    }, { threshold: 0.1 });
    sections.forEach(s => observer.observe(s));
    projectCards.forEach(c => observer.observe(c));
}

// === OPTIMISATION SCROLL (THROTTLE) ===
function throttle(fn, limit) {
    let waiting = false;
    return function () {
        if (!waiting) {
            fn.apply(this, arguments);
            waiting = true;
            setTimeout(() => waiting = false, limit);
        }
    };
}

function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const name = contactForm.querySelector('input[placeholder="Votre nom"]').value.trim();
        const subject = contactForm.querySelector('input[placeholder="Sujet"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        const body = 
        
        `Nom : ${name}

        Message :
        ${message}
                `;

                window.location.href =
                    `mailto:noe260806@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            });
        }

// === INITIALISATION GLOBALE ===
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initContactForm();
    initMobileMenu();
    initModals();
    updateNavbarBackground();
    updateActiveNavLink();

    window.addEventListener('scroll', throttle(() => {
        updateActiveNavLink();
        animateSkills();
        updateNavbarBackground();
    }, 16));

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            link.addEventListener('click', e => {
                e.preventDefault();
                scrollToSection(href.substring(1));
            });
        }
    });
});
