export const isInViewport = (elem?: Element) => {
  if (!elem) {
    return false;
  }

  const bounding = elem.getBoundingClientRect();

  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const scrollToEl = (selector: string) => {
  const el = document.querySelector(selector);
  if (!el) {
    return;
  }
  const header = document.querySelector('header');
  const headerRect = header?.getBoundingClientRect();
  const headerHeight = (headerRect?.height ?? 60) * 1.1;
  const elRect = el.getBoundingClientRect();
  const offset = el.ownerDocument?.defaultView?.pageYOffset ?? window.scrollY;
  const top = elRect.top + offset - headerHeight;

  window.scroll({
    top,
    left: 0,
    behavior: 'smooth',
  });
};

export const scrollToElById = id => {
  const field = document.getElementById(id);

  if (field) {
    const fieldRect = field.getBoundingClientRect();
    window.scroll({
      top: window.scrollY + fieldRect.top - 120,
      left: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      field.focus();
    }, 300);
  }
};
