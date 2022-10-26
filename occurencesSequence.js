const values = process.argv[2];
const numbers = values.split(",");

let numberRepeated = 0;
let combo = false;

for (let i = 0; i < 5; i++) {
    let tmp = 0;
    for (let j = 0; j < 5; j++) {
        if ((numbers[i] == numbers[j]) && (numbers[j] == numbers[j - 1]) && (numbers[j] == numbers[j + 1])) {
            tmp++;
            combo = true;
        } else if (numbers[i] == numbers[j]) {
            tmp++;
        }
        if (tmp >= 3) {
            numberRepeated = numbers[i];
        }
    }
}
if ((numberRepeated != 0) && combo) {
    console.log(`Le nombre ${numberRepeated} apparait 3 fois de suite`);
} else if (numberRepeated != 0) {
    console.log(`Le nombre ${numberRepeated} apparait 3 fois`);
} else {
    console.log("Aucun nombre n'apparait 3 fois");
}
