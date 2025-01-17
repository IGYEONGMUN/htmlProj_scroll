let currentSection = 0;
const sections = document.querySelectorAll(".section");
const totalSections = sections.length;

window.addEventListener("wheel", (e) => {
  e.preventDefault();

  if (e.deltaY > 0) {
    currentSection++;
  } else if (e.deltaY < 0) {
    currentSection--;
  }
  console.log(currentSection);

  window.scrollTo({
    top: currentSection * window.innerHeight,
    behavior: "smooth",
  });
});
