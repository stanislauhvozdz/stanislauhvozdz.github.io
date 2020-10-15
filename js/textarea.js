
let backForm = document.querySelector('.back-form');
let backField = document.querySelector('.back-field');
let charCounterOdin = document.querySelector('.char-counter-odin');
let submitButton = document.querySelector('.submit-button');

backField.oninput = function () {
  charCounterOdin.textContent = backField.value.length;

  if (backField.value.length > 200) {
    backForm.classList.add('warning');
    submitButton.disabled = true;
  } else if (backField.value.length < 6) {
    backForm.classList.add('warning');
    submitButton.disabled = true;
  } 
  else { 
    backForm.classList.remove('warning');
    submitButton.disabled = false;
    }

};
const headerNavList = document.querySelector('.header-nav--list');
const burgerButton = document.querySelector('.burger');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('burger-active');
  headerNavList.classList.toggle('header-nav--list-active');
});


const categoriesList = document.querySelector('.select-css');
const articles = document.querySelectorAll('.article-preview');


categoriesList.addEventListener('change', () => {
  articles.forEach(item => {
    if(item.dataset.category !== categoriesList.value && categoriesList.value !== 'all'){
      item.classList.add('display-none');
    } else{
      item.classList.remove('display-none');
    }
  });
});
