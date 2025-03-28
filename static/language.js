const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-reviews": "Reviews",
        "btn-queue": "Check Queue",
        "home-title": "Welcome to AirPass",
        "about-title": "About Us",
        "reviews-title": "Satisfied Clients",
        "contact-title": "Check Queue",
        "label-name": "Your Name:",
        "label-email": "Your Email:",
        "label-number": "Your Number:",
        "label-date": "Appointment Date:",
        "label-ticket": "Your Ticket Number:",
        "input-name": "Enter your name",
        "input-email": "Enter your email",
        "input-number": "Enter your number",
        "input-ticket": "Enter your ticket number",
        "btn-check": "Check Queue",
        "p":"At AirPass, we are revolutionizing the airport experience by making security checkpoints faster, smoother, and more efficient. Our innovative solutions leverage advanced technology, smart processes, and seamless integrations to minimize wait times and enhance passenger convenience."
    },
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-reviews": "Avis",
        "btn-queue": "Vérifier la file",
        "home-title": "Bienvenue sur AirPass",
        "about-title": "À propos de nous",
        "reviews-title": "Clients Satisfaits",
        "contact-title": "Vérifier la file",
        "label-name": "Votre Nom :",
        "label-email": "Votre Email :",
        "label-number": "Votre Numéro :",
        "label-date": "Date du rendez-vous :",
        "label-ticket": "Votre Numéro de Billet :",
        "input-name": "Entrez votre nom",
        "input-email": "Entrez votre email",
        "input-number": "Entrez votre numéro",
        "input-ticket": "Entrez votre numéro de billet",
        "btn-check": "Vérifier la file",
        "p":"Chez AirPass, nous révolutionnons l'expérience aéroportuaire en rendant les contrôles de sécurité plus rapides, plus fluides et plus efficaces. Nos solutions innovantes exploitent des technologies avancées, des processus intelligents et des intégrations transparentes pour minimiser."
    },
    es: {
        "nav-home": "Inicio",
        "nav-about": "Acerca de",
        "nav-reviews": "Reseñas",
        "btn-queue": "Verificar Cola",
        "home-title": "Bienvenido a AirPass",
        "about-title": "Sobre Nosotros",
        "reviews-title": "Clientes Satisfechos",
        "contact-title": "Verificar Cola",
        "label-name": "Tu Nombre:",
        "label-email": "Tu Correo Electrónico:",
        "label-number": "Tu Número:",
        "label-date": "Fecha de Cita:",
        "label-ticket": "Tu Número de Boleto:",
        "input-name": "Ingrese su nombre",
        "input-email": "Ingrese su correo electrónico",
        "input-number": "Ingrese su número",
        "input-ticket": "Ingrese su número de boleto",
        "btn-check": "Verificar Cola",
        "p":"En AirPass, estamos revolucionando la experiencia en los aeropuertos al hacer que los controles de seguridad sean más rápidos, fluidos y eficientes. Nuestras soluciones innovadoras aprovechan tecnología avanzada, procesos inteligentes e integraciones perfectas para minimizar los tiempos."
    }
};

function changeLanguage() {
    let lang = document.getElementById("language-selector").value;
    if (!translations[lang]) return;

    for (let key in translations[lang]) {
        let element = document.getElementById(key);
        if (element) {
            if (element.tagName === "INPUT") {
                element.placeholder = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    }
}

let index = 0;
    const totalSlides = document.querySelectorAll(".carousel-images div").length;
    const carouselImages = document.querySelector(".carousel-images");

    function moveSlide(step) {
        index += step;
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;
        carouselImages.style.transform = `translateX(-${index * 100}vw)`;
    }

    setInterval(() => moveSlide(1), 3000);