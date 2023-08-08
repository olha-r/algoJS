const input = process.argv[2];
const text = input.split("");

const result = [];
// result.push(text[0]);
let count = 0;

for (let i = 0; i < text.length; i++) {
    let tmp = text[i];
    for (let j = 1; j < i; j++) {
        if (text[i] != text[j]) {
            tmp += 1;
        }
        if (tmp == 1) {
            result.push(text[i]);
        }
    }





}

// result.push(text[i]);
console.log(result);