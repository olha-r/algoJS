const values = process.argv[2];
console.log(values);

const arrayValues = values.split(",");
console.log(arrayValues);

let min = 0;
let max = arrayValues.length - 1;

while (max > min) {
    let actual = arrayValues[min];
    arrayValues[min] = arrayValues[max];
    arrayValues[max] = actual;
    min++;
    max--;
}

console.log(arrayValues);