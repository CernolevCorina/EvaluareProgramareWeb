const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((paragraph, index) => {
  const color = (index + 1) % 2 === 0 ? 'blue' : 'yellow';

  paragraph.style.background = color;
})