new TypeIt("#typing-text", {
  strings: ["Vibe coder", "Student", "Human"],
  speed: 120,
  deleteSpeed: 80,
  breakLines: false,
  autoStart: true,
  loop: true,
  nextStringDelay: 1500,
}).go();

// CLEAR MESSAGE
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

AOS.init({
  once: true,
  offset: 120,
  duration: 800,
  easing: "ease-out-cubic",
});

const footer = document.querySelector("#footer");

const footerObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      footer.classList.add("footer-glow");
      footerObserver.disconnect(); // sekali saja
    }
  },
  {
    threshold: 0.4, // 40% terlihat baru aktif
  },
);

footerObserver.observe(footer);
