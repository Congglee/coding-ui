export function smoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  target: string
) {
  e.preventDefault();
  const element = document.querySelector(target);

  if (!element) {
    return;
  }

  window.scrollTo({
    top: (element as HTMLElement).offsetTop,
    behavior: "smooth",
  });
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
