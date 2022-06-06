/* eslint-disable indent */
const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('firstName');

const buttonGreen = document.getElementById('green');
const buttonBlue = document.getElementById('blue');
const buttonPink = document.getElementById('pink');

const footer = document.getElementById('foot');
const header = document.getElementById('head');

button.addEventListener('click', () => {
  let newName = nameInput.value;
  firstName.textContent = newName;
});

buttonBlue.addEventListener('click', () => {
  header.style.backgroundColor = 'blue';
  footer.style.backgroundColor = 'blue';
});

buttonGreen.addEventListener('click', () => {
  header.style.backgroundColor = 'green';
  footer.style.backgroundColor = 'green';
});

buttonPink.addEventListener('click', () => {
  header.style.backgroundColor = 'pink';
  footer.style.backgroundColor = 'pink';
});
