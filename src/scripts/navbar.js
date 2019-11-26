const nav = document.getElementsByTagName('nav');
export function scroll() {
  if(window.pageYOffset > 50) {
    nav[0].style.background = 'rgba(0, 0, 0, 0.44)';
  }
  else {
    nav[0].style.background = 'rgba(0, 0, 0, 0.1)';
  }
}