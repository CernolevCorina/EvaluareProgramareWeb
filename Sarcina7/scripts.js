const container = document.getElementById('container');
setTimeout(() => {
  for(let i = 1; i<=10; i++) {
    const element = document.createElement('p');
    element.innerHTML = `Element Nr ${i}`;
    container.append(element)
  }
}, 5000)