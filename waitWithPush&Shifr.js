const inputOfNames = process.argv[2];

const names = inputOfNames.split(",");
console.log(names);

let lastExited = "";

for (let i = 0; i < names.length; i++) {
    console.log("Actual state = " + names);
    names.push(lastExited);
    lastExited = names.shift();
    console.log("Last exited = " + lastExited);
    lastExited = "",
        console.log("New state = " + names);
    console.log("------------");
}
