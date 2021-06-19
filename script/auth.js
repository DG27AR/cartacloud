'use strict';

// AUTH
// Declarations
const loginForm = document.querySelector('#login-form');
// Bootstrap Modal Obj definition
var loginModal = new bootstrap.Modal(document.querySelector('#login-modal'), {
  keyboard: false,
});
const loginError = document.querySelector('#login-form-error');

// Login event
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.querySelector('#login-form-email').value;
  const password = document.querySelector('#login-form-password').value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      loginForm.reset();
      loginModal.hide();
      if (loginError.classList.contains('visible')) loginError.classList.replace('visible', 'invisible');
    })
    .catch(error => {
      if (loginError.classList.contains('invisible')) loginError.classList.replace('invisible', 'visible');
    });
});

// State Change Events
// auth.onAuthStateChanged(function (user) {
//   if (user) {
//     // User is signed in
//     console.log('Logged In');
//     // window.location = '/admin/admin.html';
//   } else {
//     // User is signed out
//   }
// });
