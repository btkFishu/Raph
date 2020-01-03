const aboutCards = document.querySelectorAll('#about .col');
let numberOfCards = 0;

aboutCards.forEach((el) => {
  if(el.style.display != 'none') {
    numberOfCards ++;
  }
});

if(numberOfCards <= 1) {
  const btn = document.getElementById('expand');
  btn.style.display = 'none';
}

window.expand = function expand() {
  const btn = document.getElementById('expand');

  aboutCards.forEach((el, index) => {
    if(index != 0) {
      el.classList.toggle('active');
    }
  });
  btn.innerText = btn.innerText == 'Show more' ? 'Show less' : 'Show more';
}