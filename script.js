// Detect when an element enters the viewport and add animation
const elements = document.querySelectorAll('.fade-in');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  elements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add('visible');
    }
  });
}

// Attach scroll event to window
window.addEventListener('scroll', handleScroll);

// Initially check if elements are in the viewport
handleScroll();
