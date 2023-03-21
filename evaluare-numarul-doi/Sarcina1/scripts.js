class Tour {
  constructor(name, costOneDay, days, insurance) {
    this.name = name;
    this.costOneDay = costOneDay;
    this.days = days;
    this.insurance = insurance;
  }

  getName(){
    return this.name
  }

  getCostOneDay(){
    return this.costOneDay
  }
  getDays(){
    return this.days
  }

  getInsurance(){
    return this.insurance
  }

  getPrice(){
    return this.costOneDay * this.days + this.insurance
  }

  increaseDays(number){
    this.days += number;
  }

  setTax(tax){
    this.tax=tax;
  }

  getPriceNetto(){
    const suma = this.getPrice()*this.tax/100;
    return this.getPrice() + suma;
  }
}

let tour = new Tour('Turkey', 1500, 7, 750);
console.log(tour.name);
console.log(tour.costOneDay);
console.log(tour.days);
console.log(tour.insurance);
console.log(tour.getPrice());


console.log('>>>>>>>>> Sarcina 2');
const tours = []
tours[0] = new Tour('Turkey', 1500, 7, 750);
tours[1] = new Tour('Italy', 1567, 10, 1750);

tours.map(tour => {
  console.log('Tour name: ', tour.name);
  console.log('Tour cost per day: ', tour.costOneDay);
  console.log('Tour days: ', tour.days);
  console.log('Tour insurance: ', tour.insurance);
  console.log('Tour price: ', tour.getPrice());
})

console.log('>>>>>>>>>> Sarcina 3')
let minTour = tours[1];
let maxTour = tour[0];

if(tours[0].getPrice() < tours[1].getPrice()){
  minTour = tours[0];
  maxTour = tours[1];
}

console.log('Pretul minim este la turul: ', minTour.name);
console.log('Pretul este mai mic cu: ', maxTour.getPrice() - minTour.getPrice());

console.log('>>>>>>>>>>> Sarcina 4')

let myTour = new Tour('Turkey', 1500, 7, 750);
console.log(myTour.getName());
console.log(myTour.getCostOneDay());
console.log(myTour.getDays());
console.log(myTour.getInsurance());
console.log(myTour.getPrice());


console.log('>>>>>>>>>>> Sarcina 5')
let tour5 = new Tour('Turkey', 1500, 7, 750);
console.log(tour5.getName()); //afișează ' Turkey'
console.log(tour5.getCostOneDay()); //afișează 1500
console.log(tour5.getDays()); //afișează 7
console.log(tour5.getInsurance()); //afișează 750
console.log(tour5.getPrice()); //afișează 11250 = 1500*7+750
tour5.increaseDays(3); //mărește days cu 3
console.log(tour5.getPrice()); //afișează 15750 = 1500*10+750

console.log('>>>>>>>>>>>> Sarcina 6')
let tour6 = new Tour('Turkey', 1500, 7, 750);
console.log(tour6.getName()); //afișează ' Turkey'
console.log(tour6.getCostOneDay()); //afișează 1500
console.log(tour6.getDays()); //afișează 7
console.log(tour6.getInsurance()); //afișează 750
console.log(tour6.getPrice()); //afișează 11250 = 1500*7+750
tour6.increaseDays(3); //mărește days cu 2
console.log(tour6.getPrice()); //afișează 15750 = 1500*10+750
tour6.setTax(5); //setează procentul agenției de turism la 5%
console.log(tour6.getPriceNetto()); //afișează 15750 + 5% = 16537.5