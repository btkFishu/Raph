window.expand = function expand() {
  const btn = document.getElementById('expand');
  const elements = document.querySelectorAll('#about .col');
  elements.forEach((el, index) => {
    if(index != 0) {
      el.classList.toggle('active');
    }
  });
  btn.innerText = btn.innerText == 'Show more' ? 'Show less' : 'Show more';
}