const numbers = process.argv[2];
console.log(numbers);

const arrayOfNumbers = numbers.split(",");
console.log(arrayOfNumbers);

let sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
    const candidate = arrayOfNumbers[i];
    const number = parseInt(candidate, 10);
    sum += number;
}
console.log(sum);