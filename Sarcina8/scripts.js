const button = document.getElementById('button');
let count = 1;
button.innerHTML = `Contor = ${count}`;

button.addEventListener('click', () => {
  count = count + 2;
  button.innerHTML = `Contor = ${count}`;
})