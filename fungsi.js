new TypeIt("#typing-text", {
  strings: ["Human", "Student", "Gamer"],
  speed: 200,
  breakLines: false,
  autoStart: true,
  loop: true,
}).go();

// CLEAR MESSAGE
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
