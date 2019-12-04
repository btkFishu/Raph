// email validation
function validateEmail(email) {
  // RFC 2822 email standard
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
}

export function validate() {
  // prevent default button behaviour
  event.preventDefault();

  // get name, email, button and alert from form
  const emailInput = document.getElementById('email-input'),
        email = emailInput.value,
        nameInput = document.getElementById('name-input'),
        name = nameInput.value.trim(),
        btn = document.getElementById('sign-up');
  let isEmailValid = false,
      isNameValid = false;

  // check if email is valid and add style
  if(validateEmail(email)) {
    isEmailValid = true;
    emailInput.style.border = '2px solid rgb(89, 206, 53)';
  } else {
    isEmailValid = false;
    emailInput.style.border = '2px solid #F00';
    btn.innerHTML = 'Try again';
  }

  // check if name is valid and add style
  if(name != '') {
    isNameValid = true;
    nameInput.style.border = '2px solid rgb(89, 206, 53)';
  } else {
    isNameValid = false;
    nameInput.style.border = '2px solid #F00';
    btn.innerHTML = 'Try again';
  }

  // if everything is valid style and send to database
  if(isNameValid && isEmailValid) {
    nameInput.disabled = true;
    emailInput.disabled = true;
    btn.innerHTML = 'Done!';
    btn.disabled = true;
    btn.style.cursor = 'default';
    // remove hover effect from button
    btn.classList.remove('hover-effect')
  }

  return false;
}