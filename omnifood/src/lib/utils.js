export const smoothScroll = (e, target) => {
  e.preventDefault();
  const element = document.querySelector(target);
  if (!element) return;

  window.scrollTo({
    top: element.offsetTop,
    behavior: "smooth",
  });
};

// Alternative method for scrolling to an element by ID
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
