// import functions and grab DOM elements
const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('firstName');

button.addEventListener('click', ()=>{
  let newName = nameInput.value;
  firstName.textContent = newName;
});

