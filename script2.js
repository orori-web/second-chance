// Get the login, signup, and sell product buttons
const loginBtn = document.getElementById('openLoginoginbtn');
const signupBtn = document.getElementById('openSignupupbtn');
const sellProductBtn = document.getElementById('sellproductbtn');

// Get the popups
const loginPopup = document.getElementById('login-popup');
const signupPopup = document.getElementById('signup-popup');
const sellProductPopup = document.getElementById('sellproductpopup');

// Get the close buttons
const closeButtons = document.querySelectorAll('.close-btn');

// Open login popup
loginBtn.addEventListener('click', () => {
  loginPopup.style.display = 'block';
});

// Open signup popup
signupBtn.addEventListener('click', () => {
  signupPopup.style.display = 'block';
});

// Open sell product popup
sellProductBtn.addEventListener('click', () => {
  sellProductPopup.style.display = 'block';
});

// Close popups on clicking the close button
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    loginPopup.style.display = 'none';
    signupPopup.style.display = 'none';
    sellProductPopup.style.display = 'none';
  });
});

// Close popup when clicking outside the content box
window.addEventListener('click', (event) => {
  if (event.target === loginPopup) {
    loginPopup.style.display = 'none';
  }
  if (event.target === signupPopup) {
    signupPopup.style.display = 'none';
  }
  if (event.target === sellProductPopup) {
    sellProductPopup.style.display = 'none';
  }
});
