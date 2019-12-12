import { db } from './fb';

// email validation
function validateEmail(email) {
  // RFC 2822 email standard
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
}

window.validate = function validate() {
  // prevent default button behaviour
  event.preventDefault();
  
  // get name, email, button and alert from form
  const emailInput = document.getElementById('email-input'),
        nameInput = document.getElementById('name-input'),
        btn = document.getElementById('sign-up'),
        btnContent = btn.getElementsByTagName('div'),
        contactInfo = {
          email: emailInput.value,
          name: nameInput.value.trim()
        };
  let isEmailValid = false,
      isNameValid = false;

  // check if email is valid and add style
  if(validateEmail(contactInfo.email)) {
    isEmailValid = true;
    emailInput.style.border = '2px solid rgb(89, 206, 53)';
  } 
  else {
    isEmailValid = false;
    emailInput.style.border = '2px solid #F00';
    btnContent[1].innerHTML = 'Try again';
  }

  // check if name is valid and add style
  if(contactInfo.name != '') {
    isNameValid = true;
    nameInput.style.border = '2px solid rgb(89, 206, 53)';
  } 
  else {
    isNameValid = false;
    nameInput.style.border = '2px solid #F00';
    btnContent[1].innerHTML = 'Try again';
  }

  // check if both fields are valid
  if(isNameValid && isEmailValid) {
    // display loading animation and hide text
    btnContent[1].style.display = 'none';
    btnContent[0].style.display = 'block';
    
    // send to db
    db.collection('members').add(contactInfo).then(() => {
      // hide loading animation and display text
      btnContent[0].style.display = 'none';
      btnContent[1].style.display = 'block';

      // style inputs and button
      nameInput.disabled = true;
      emailInput.disabled = true;
      btnContent[1].innerHTML = 'Done!';
      btn.disabled = true;
      btn.style.cursor = 'default';

      // remove hover effect from button
      btn.classList.remove('hover-effect');
    }).catch(() => {
      // hide loading animation and display text
      btnContent[0].style.display = 'none';
      btnContent[1].style.display = 'block';

      // show alert to user
      alert('Something went wrong. Make sure you filled form correctly and try again.');
    });


  }

  return false;
}