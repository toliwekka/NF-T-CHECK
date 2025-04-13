let descriptions = [
    "NFT Consults: Unleash your inner potential. Redefine your mental well-being with personalized insights.",
    "Embrace change and growth. Discover new paths to unlock your true potential today.",
    "NFT Consults: Empower your mind with custom mental well-being assessments.",
    "T|Check by NFT: Dive into a world of self-discovery with intuitive assessments.",
    "Harness your mental strength. Experience transformative change with every session.",
    "Unveil your true self. Explore tailored solutions for mental clarity and peace.",
    "NFT Consults: Personalized mental well-being assessments to guide your growth.",
    "T|Check by NFT: Assess your mental well-being with precision and unlock clarity.",
    "Take the first step toward clarity. Transform your mindset with powerful assessments.",
    "Elevate your mental health. Begin a journey of self-reflection and growth.",
    "Discover the power of introspection. Unlock your potential with targeted assessments.",
    "NFT Consults: Experience personalized mental health strategies designed for you.",
    "T|Check by NFT: Your journey to mental clarity starts with the right assessment.",
    "Empower your well-being. Change your life with personalized insights today.",
    "Reimagine your future. Use assessments to align your mental health with your goals.",
    "Unlock your strengths. Start your mental wellness journey with precision today.",
    "NFT Consults: Explore your inner world with intuitive assessments for lasting growth.",
    "T|Check by NFT: Gain profound insights into your well-being with a single assessment.",
    "Strengthen your mental clarity. Experience transformative self-reflection today.",
    "Open the door to personal growth. Assess ,your mental health and take charge of your life.",
    "Discover your best self. Start a transformative mental wellness journey now.",
    "Empower yourself. Assess your well-being and unlock pathways to success.",
    "NFT Consults: Tailored solutions for your mental well-being journey.",
    "T|Check by NFT: Take control of your mind and future with specialized assessments.",
    "Find the path to clarity. Begin your self-discovery journey with transformative tools.",
    "Reconnect with your true self. Take the first step to mental wellness today.",
    "Unlock your mental potential. Personalized insights await you for lasting transformation.",
    "Discover how to thrive. Assess your mind and create a blueprint for personal growth.",
    "NFT Consults: The future of mental well-being begins with personalized assessments.",
    "T|Check by NFT: Start with clarity, achieve your dreams with tailored mental health tools.",
    "Take control of your destiny. Empower yourself with deep self-reflection today.",
    "Realize your potential. Transform your mindset with every powerful assessment.",
    "NFT Consults: Unlock mental clarity through personalized self-assessments.",
    "T|Check by NFT: Begin your journey of self-improvement with the most powerful tools.",
    "Find your focus. Start a personalized path to better mental well-being today.",
    "Unlock mental freedom. Empower yourself with intuitive self-assessments.",
    "NFT Consults: Assess and unlock your true mental potential with precision.",
    "T|Check by NFT: Chart your mental wellness path with expert assessments.",
    "Reveal your inner strength. Take control of your mental health today.",
    "Empower your journey. Explore self-discovery with transformative assessments.",
    "NFT Consults: Personalized solutions to enhance your mental clarity and growth.",
    "T|Check by NFT: Unlock your potential with assessments designed for your mind.",
    "Experience a mental reset. Start your journey to improved well-being now.",
    "Discover the new you. Empower yourself with self-assessment tools for growth.",
    "NFT Consults: Your personal guide to mental health transformation starts here.",
    "T|Check by NFT: Explore new horizons for mental clarity and personal growth.",
    "Start your transformation today. Dive deep into personalized self-assessment.",
    "Experience profound change. Empower your mental well-being through specialized tools.",
    "NFT Consults: Harness the power of self-reflection for growth and mental clarity.",
    "T|Check by NFT: Begin your mental wellness journey with transformative assessments.",
];

let index = 0;

function changeHeroDescription() {
    const heroDescriptionElement = document.querySelector(".hero-description");
    heroDescriptionElement.innerText = descriptions[index];
    index = (index + 1) % descriptions.length;
}

// Initial load
window.addEventListener("DOMContentLoaded", () => {
    changeHeroDescription(); // Set the first description
    setInterval(changeHeroDescription, 5000); // Change every 5 seconds
});

// Animate regular letters (not pipe or mini-cards)
document.querySelectorAll(".tcheck-letter:not(.pipe)").forEach((el) => {
    const delay = (Math.random() * 1.8 + 0.5).toFixed(2);
    const angle = (Math.random() * 20 - 10).toFixed(2);
    const depth = Math.floor(Math.random() * 200 + 100);

    el.style.setProperty("--delay", `${delay}s`);
    el.style.setProperty("--angle", `${angle}deg`);
    el.style.setProperty("--depth", `-${depth}px`);
});

// Animate mini-cards separately with stagger
const miniCards = document.querySelectorAll(".tcheck-mini-card");
miniCards.forEach((el, index) => {
    el.style.animationDelay = `${0.5 + index * 0.3}s`;
});


// Add click event listeners to all letters and mini-cards
document.querySelectorAll(".tcheck-letter, .tcheck-mini-card").forEach((element) => {
  element.addEventListener("click", () => {
    const introPage = document.getElementById("introPage");
    if (introPage) {
      introPage.style.display = "none"; // Hide the intro page
    }
    openIframe(); // Show the iframe
  });
});



