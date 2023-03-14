const array = [1, 45, 34, 34, 34, 45, 4, 5, 5, 7];

const container = document.getElementById('container');

let interval;
let index = 0;

if(!interval){
  interval = setInterval(() => {

    if(array[index]){
      const element = document.createElement('li');
      element.innerHTML = `${array[index]}`;
      container.append(element);
      index ++;
    }else{
      clearInterval(interval)
      interval = null;
    }
  }, 1000)
}
