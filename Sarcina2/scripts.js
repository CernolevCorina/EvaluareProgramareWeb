alert('Introduceti intervalul [a, b] pentru calucularea sumei numerelor pare din acest interval')
const a = Number(prompt('Introduceti numarul a: '))
const b = Number(prompt('Introduceti numarul b: '))

const checkIfIsInterval = (a, b) => {
  if(isNaN(a) || isNaN(b)){
    alert('Unul din valorile introduse nu este un numar');
    return false;
  }
  if(a > b){
    alert('Valorile introduse nu formeaza un interval.');
    return false;
  }

  return true;
}

const sum = (a, b) => {
  let result = 0;
  for(let i = a; i<=b; i++){
    if(i % 2 === 0){
      result = result + i
    }
  }
  return result;
}

if(checkIfIsInterval(a, b)){
  alert(sum(a, b));
}