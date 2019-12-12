// NAVBAR
// modify navbar background color when page is offset
const nav = document.getElementsByTagName('nav');
document.addEventListener('scroll', () => {
  if(window.pageYOffset > 50) {
    nav[0].style.background = 'rgba(0, 0, 0, 0.44)';
  } else {
    nav[0].style.background = 'rgba(0, 0, 0, 0.1)';
  }  
});

// prevent adding id's by navigation anchor tags
const anchors = document.getElementsByClassName('move-to');
for(const el of anchors) {
  el.addEventListener('click', () => {
    event.preventDefault();
    const index = el.href.lastIndexOf('#');
    if(index != -1) {
      const id = el.href.slice(index+1);
      document.getElementById(id).scrollIntoView(true);
    }
  })
}


// HAMBURGER
// toggle hamburger menu
window.hamburger = function hamburger() {
  const menu = document.getElementById('hamburger-menu');
  const hb = document.getElementById('hamburger');
  hb.classList.toggle('active');
  menu.classList.toggle('active');
}
// close hamburger menu when user clicks out of navbar
const content = document.querySelectorAll('header, main, footer, #hamburger-menu a');
for(const el of content) {
  el.addEventListener('click', () => {
    const menu = document.getElementById('hamburger-menu');
    const hb = document.getElementById('hamburger');
    hb.classList.remove('active');
    menu.classList.remove('active');
  });
}