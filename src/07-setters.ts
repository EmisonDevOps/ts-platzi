export class MyDate {
 public constructor(
  private _day: number = 1993,
  private _month: number = 4,
  private _year: number = 20
 ) { }

 set day(newDay: number) {
  this._day = newDay;
 }


 get day() {
  return this._day;
 }

 set month(newMonth: number) {
  this._month = newMonth;
 }

 get month() {
  return this._month;
 }

 set year(newYear: number) {
  this._year = newYear;
 }

 get year() {
  return this._year;
 }

 get isLeapYear() {
  if (this._year % 400 === 0) return true;
  if (this._year % 100 === 0) return false;
  return this._year % 4 === 0;
 }

 public printFormat(): string {
  const day = this.addPadding(this._day);
  const month = this.addPadding(this._month)
  return `${day}/${month}/${this._year}`;
 }
 public add(amount: number, type: 'day' | 'month' | 'year'): MyDate {
  let newDay = this._day;
  let newMonth = this._month;
  let newYear = this._year;

  if (type === 'day') {
   newDay += amount;
  }
  if (type === 'month') {
   newMonth += amount;
  }
  if (type === 'year') {
   newYear += amount;
  }

  const newDate = new MyDate(newDay, newMonth, newYear);
  return newDate;
 }

 public addDays(days: number): Date {
  const newDate = new Date(this._day + days, this._month, this._year);
  return newDate;
 }

 private addPadding(value: number): string {
  if (value < 10) {
   return `0${value}`;
  }
  return `${value}`;
 }
}

const myDate = new MyDate(21, 7, 2024);

console.log('El dia es: ', myDate.day);
console.log('El mes es: ', myDate.month);
console.log('El año es: ', myDate.year);
console.log('El año es biciesto? ', myDate.isLeapYear);

myDate.year = 2025;
console.log('El año actual es: ', myDate.year);
