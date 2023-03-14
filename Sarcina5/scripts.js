const container = document.getElementById('container');

container.addEventListener('click', () => {
  container.classList.add('verde');
  document.querySelector('.verde').style.background = 'green'
})