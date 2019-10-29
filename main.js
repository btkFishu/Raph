let getMail;

// email validation
function validateEmail(email) {
  // RFC 2822 email standard
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
}

function validate() {
  // prevent default button behaviour
  event.preventDefault();

  // get email, button and alert from form
  const emailInput = document.getElementById('email-input');
  const email = emailInput.value;
  const btn = document.getElementById('sign-up');

  // check if email is valid
  if(validateEmail(email)) {
    btn.innerHTML = 'Done!';
    btn.disabled = true;
    btn.style.cursor = 'default';
    emailInput.style.padding = '8px 38px'
    emailInput.style.border = '2px solid rgb(89, 206, 53)';
    getMail = email;
  } else {
    emailInput.style.padding = '8px 38px'
    emailInput.style.border = '2px solid #F00';
    btn.innerHTML = 'Try again';
  }

  return false;
}