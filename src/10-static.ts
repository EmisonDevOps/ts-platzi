class MyMath {
 static PI = 3.14;

 static max(...numbers: number[]): number {
  if (numbers.length === 0) {
   return Number.NEGATIVE_INFINITY; // Manejar el caso de un array vacío
  }

  let result: number = numbers[0]; // Inicializar con el primer elemento

  for (let numValue of numbers) {
   if (numValue > result) {
    result = numValue;
   }
  }

  return result;
 }

 static min(...numbers: number[]): number {
  if (numbers.length === 0) {
   return Number.NEGATIVE_INFINITY;
  }

  let result = numbers[0];
  for (const numValue of numbers) {
   if (numValue <= result) {
    result = numValue;
   }
  }
  return result;
 }

 static avg(...numbers: number[]): number {
  throw new Error('Month out of range');
  
  if (numbers.length === 0) {
   return Number.NEGATIVE_INFINITY;
  }
  return numbers.reduce((result, numValue) => result += numValue) / numbers.length;
 }
}

console.log('Valor de PI: ', MyMath.PI);
console.log('El numero mayor es ', MyMath.max(10, 10.1, 101, 2, 3, 4, 5, 6, 9, 8, 7, 6, 5, 10));
console.log('El numero menor es ', MyMath.min(10, 10.1, 101, 2, 3, 4, 5, 6, 9, 8, 7, 6, 5, 10));
console.log('El promedio es ', MyMath.avg(10, 10.1, 101, 2, 3, 4, 5, 6, 9, 8, 7, 6, 5, 10).toLocaleString());
