const inputOfNames = process.argv[2];
//console.log(inputOfNames);

const names = inputOfNames.split(",");
// console.log(names);

while (names[0] != "") {
    for (let i = 0; i < names.length; i++) {
        console.log(`Actual state = ${names}`);
        let lastExited = names[i];
        for (let j = 0; j < names.length; j++) {
            i = i + 1;
            names[j] = names[i];
        }
        names[names.length - 1] = "";
        console.log(`Last exited = ${lastExited}`);
        console.log(`New state = ${names}`);
        console.log("------------");
    }
}