let currentSection = 0;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;

window.addEventListener('wheel', (e) => {
  e.preventDefault();

  if (e.deltaY > 0 ) {
    // 아래로 스크롤
    currentSection++;
    
  } else if (e.deltaY < 0 ) {
    // 위로 스크롤
    currentSection--;
    
  }
  console.log(currentSection);
  
  // 해당 섹션으로 스크롤
  window.scrollTo({
    top: currentSection * window.innerHeight,
    behavior: 'smooth',
  });
});
