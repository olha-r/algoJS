const values = process.argv[2];
const array = values.split(",");
const input = [];
for (let i = 0; i < array.length; i++) {
    const candidate = array[i];
    const number = parseInt(candidate, 10);
    input.push(number);
}

const evens = [];
const odds = [];

let maxEven = 0, maxOdd = 0;

for (let i = 0; i < input.length; i++) {
    let tmp = input[i];
    if (tmp % 2 == 0) {
        evens.push(tmp);
        if (tmp > maxEven) {
            maxEven = tmp;
        }
    } else {
        odds.push(tmp);
        if (tmp > maxOdd) {
            maxOdd = tmp;
        }
    }
}

if (evens.length == 0) {
    messageEvens = `0, there is no max even number`;
} else {
    messageEvens = `(${evens.length}), the max even number is: ${maxEven}`
}
if (odds.length == 0) {
    messageOdds = `0, there is no max odd number`;
} else {
    messageOdds = `(${odds.length}), the max not pair number is: ${maxOdd}`
}


console.log(`Numbers of pairs: ${evens} (${messageEvens})`);
console.log(`Numbers not pairs: ${odds} (${messageOdds})`);