const students = [
  {
    name: 'Jhon',
    marks: [8, 10, 7, 5, 4]
  },
  {
    name: 'Ion',
    marks: [5, 4, 2, 4, 6]
  },
  {
    name: 'Marian',
    marks: [8, 4, 9, 5, 7]
  },
  {
    name: 'Marin',
    marks: [4, 2, 8, 4, 5]
  },
  {
    name: 'Danu',
    marks: [9, 10, 10, 7, 10]
  },
]

const average = (marks) => {
  const sum = marks.reduce(function(a, b){
    return a + b;
  });

  return sum/marks.length
}

console.log('>>> Sarcina 3.1');
students.forEach(({name, marks}) => {
  console.log(`${name}: ${average(marks)}`)
})

console.log('>>> Sarcina 3.2');
students.forEach(({name, marks}) => {
  const studentAverage = average(marks);
  if(studentAverage < 5){
    console.log(`${name}: ${average(marks)}`)
  }
})

console.log('>>> Sarcina 3.3');
const averagesArray = students.map(({ marks}) => average(marks));
const totalAverage = average(averagesArray);

students.forEach(({name, marks}) => {
  const studentAverage = average(marks);
  if(studentAverage > totalAverage){
    console.log(`${name}: ${average(marks)}`)
  }
})
