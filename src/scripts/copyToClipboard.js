// copy to clipboard
window.copy = function copy(str) {
  const tooltip = document.getElementById('mailTooltip'),
        el = document.createElement('textarea');

  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  
  // change text after being copied
  tooltip.innerHTML = `Copied: ${ str }`;
}

// change text back to previous
window.outCopy = function outCopy() {
  const tooltip = document.getElementById('mailTooltip');
  tooltip.innerHTML = 'Copy to clipboard';
}