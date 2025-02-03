export class Date {
 day: number;
 month: number;
 year: number;

 constructor(day: number, month: number, year: number) {
  this.day = day;
  this.month = month;
  this.year = year;
 }

 getDay() {
  return this.day;
 }
 getMonth() {
  return this.month;
 }
 getYear() {
  return this.year;
 }

 printFormat(): string {
  return `${this.day}/${this.month}/${this.year}`;
 }
 add(amount: number, type: 'day' | 'month' | 'year'): Date {
  let newDay = this.day;
  let newMonth = this.month;
  let newYear = this.year;

  if (type === 'day') {
   newDay += amount;
  }
  if (type === 'month') {
   newMonth += amount;
  }
  if (type === 'year') {
   newYear += amount;
  }

  const newDate = new Date(newDay, newMonth, newYear);
  return newDate;
 }

 addDays(days: number): Date {
  const newDate = new Date(this.day + days, this.month, this.year);
  return newDate;
 }
}


const myDate = new Date(21, 7, 2024);

console.log('El mes es: ', myDate.getMonth());
console.log('La fecha es: ', myDate.printFormat());
console.log('La fecha es: ', myDate.add(5, 'day').printFormat());
console.log('La fecha es: ', myDate.add(5, 'month').printFormat());


