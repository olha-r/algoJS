const input = process.argv[2];
const direction = process.argv[3];
const distance = process.argv[4];

const text = input.split('');

const step = parseInt(distance, 10);


const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let code = "";

for (let i = 0; i < text.length; i++) {
    let tmp = text[i];
    let newPosition = null;
    if (tmp == " ") {
        code += tmp;
    } else {
        for (let j = 0; j < alphabet.length; j++) {
            if (tmp == alphabet[j]) {
                if (direction == "R") {
                    newPosition = j + step;
                } else if (direction == "L") {
                    newPosition = j - step;
                }
                if (newPosition > (alphabet.length - 1)) {
                    newPosition = newPosition - alphabet.length;
                } else if (newPosition < 0) {
                    newPosition = newPosition + alphabet.length
                }
                code += alphabet[newPosition];
            }
        }
    }
}

console.log(code);
