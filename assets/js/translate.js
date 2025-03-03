// Objeto con las traducciones
const translations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    language: "",
    contactMe: "Contact Me",
    emailCopied: "Email copied to clipboard!",
    downloadCV: "Download CV",
    aboutMe:
      "I'm a developer passionate about learning and creating impactful solutions. With a strong ability to adapt, solve problems and acquire new skills, I enjoy      challenges that drive both professional and personal growth. My focus is on building efficient and structured applications, combining technical expertise with core values like respect and honesty. When I'm not coding, you'll find me reading, researching anytopic or gaming with friends.",
    tech: "Tech Stack",
    title1: "Portfolio",
    description1: "Responsive website built to present myself.",
    title2: "Bootcamp",
    description2:
      "API for the creation and administration of a bootcamp. Tested with Postman.",
    title3: "Outmind",
    description3:
      "Website for a content creation agency to simplify customer communication through email, using Node.js and Nodemailer in the backend. On the frontend, I used React with Vanilla CSS to create a responsive design that looks great on any device. Work in progress",
    title4:"Weather APP",
    description4:"Simple website to check the weather in your area. Built with React and the OpenWeather API.",
    title5:"Movies",
    description5:"Simple website built using the TMDB API and React.",
    explore: "Explore",
    title6:"Pastillitas",
    description6:"A scraping application that extracts and stores medication data from well-known pharmacies in PostgreSQL. It focuses on the backend, featuring an Express API and optimized searches with Fuse.js. A basic React interface is included.",
    experience: "Experience",
    freelanceTitle: "🚀 Freelance Web Developer",
    freelanceTime: "2024 - Present",
    freelanceDesc1: "Creation of 10+ websites optimized for SEO and high performance.",
    freelanceDesc2: "Development of custom solutions for clients across various industries.",
    freelanceDesc3: "Implementation of best practices in accessibility, performance, and usability.",
    consultantTitle: "🏢 Technology Consultant - Outmind & Kerra.tech",
    consultantTime: "January 2025 - Present",
    consultantDesc1: "Development of websites and technological solutions for companies.",
    consultantDesc2: "Optimization of platforms to improve efficiency and scalability.",
    consultantDesc3: "Collaboration on system integration and automation projects.",
    academicTitle: "🎓 Academic Experience",
    academicDesc1: "Over 1 year as a teaching assistant at the university, supporting teaching and tutoring.",
    academicDesc2: "Development of skills in communication, teaching, and teamwork.",
    academicDesc3: "Certificate in DESARROLLO DE APLICACIONES FULL STACK JAVASCRIPT TRAINEE (2024)"
  },
  es: {
    home: "Inicio",
    about: "Sobre mi",
    projects: "Proyectos",
    contact: "Contacto",
    language: "",
    contactMe: "Contáctame",
    emailCopied: "¡Correo copiado al portapapeles!",
    downloadCV: "Descargar CV",
    aboutMe:
      "Soy un desarrollador apasionado por aprender y crear soluciones impactantes. Con una gran capacidad para adaptarme, resolver problemas y adquirir nuevas habilidades, disfruto de los desafíos que impulsan tanto mi crecimiento profesional como personal. Mi enfoque está en construir aplicaciones eficientes y estructuradas, combinando experiencia técnica con valores fundamentales como el respeto y la honestidad. Cuando no estoy programando, me encontrarás leyendo, investigando cualquier tema o jugando con amigos.",
    tech: "Tecnologías",
    title1: "Portafolio",
    description1: "Sitio web responsivo construido para presentarme.",
    title2: "Bootcamp",
    description2:
      "API para la creacion y administracion de un campo. Probado con Postman.",
    title3: "Outmind",
    description3:
      "Sitio web para una agencia de creación de contenido, donde se utilizó Node.js y Nodemailer en el backend para permitir que los usuarios envíen correos directamente desde la aplicación web. En el frontend, utilicé React con CSS Vanilla para crear un diseño responsivo que se ve excelente en cualquier dispositivo.",
    title4:"Aplicación del clima",
    description4:"Sitio web simple para verificar el clima en tu área. Construido con React y la API de OpenWeather.",
    title5:"Películas",
    description5:"Sitio web simple, construido utilizando la API de TMDB y React.",
    explore: "Explorar",
    title6:"Pastillitas",
    description6:"Aplicación de scraping que extrae y almacena datos de medicamentos desde farmacias conocidas en PostgreSQL. Su enfoque principal es el backend, con una API en Express y búsquedas optimizadas con Fuse.js. Incluye una interfaz básica en React.",
    experience: "Experiencia",
    freelanceTitle: "🚀 Desarrollador Web Freelance",
    freelanceTime: "2024 - Actualidad",
    freelanceDesc1: "Creación de más de 10 sitios web optimizados para SEO y alto rendimiento.",
    freelanceDesc2: "Desarrollo de soluciones personalizadas para clientes de diversas industrias.",
    freelanceDesc3: "Implementación de buenas prácticas en accesibilidad, rendimiento y usabilidad.",
    consultantTitle: "🏢 Consultor Tecnológico - Outmind & Kerra.tech",
    consultantTime: "Enero 2025 - Actualidad",
    consultantDesc1: "Desarrollo de sitios web y soluciones tecnológicas para empresas.",
    consultantDesc2: "Optimización de plataformas para mejorar la eficiencia y la escalabilidad.",
    consultantDesc3: "Colaboración en proyectos de integración de sistemas y automatización.",
    academicTitle: "🎓 Experiencia Académica",
    academicDesc1: "Más de 1 año como ayudante en la universidad, apoyando en la enseñanza y tutorías.",
    academicDesc2: "Desarrollo de habilidades en comunicación, enseñanza y trabajo en equipo.",
    academicDesc3: "Certificado en DESARROLLO DE APLICACIONES FULL STACK JAVASCRIPT TRAINEE (2024)"
  },
};

// Función para cambiar el idioma
function changeLanguage(language) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    element.textContent = translations[language][key];
  });
}
document
  .getElementById("toggleLanguageButton")
  .addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang || "en";
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    document.documentElement.lang = newLanguage;
    changeLanguage(newLanguage);
  });
