document.getElementById('maxBtn').addEventListener('click', () => {
  const x = document.querySelector('input[name=x]').value;
  const y = document.querySelector('input[name=y]').value;
  document.getElementById('max').innerHTML = Math.max(x, y);
})