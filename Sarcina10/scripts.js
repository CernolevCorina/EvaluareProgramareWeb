document.getElementById('button').addEventListener('click', () => {
  const selectedValue = document.getElementById('discipline').value;
  document.getElementById('element').innerHTML = selectedValue;
})