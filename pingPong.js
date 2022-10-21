const pingsAndPongs = process.argv[2];
console.log(pingsAndPongs);

const array = pingsAndPongs.split(","); // source
console.log(array);


let pings = 0;
let pongs = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] == "ping") {
        pings++
    } else {
        pongs++
    }
}
console.log("Match result ping vs pong:" + pings + " " + pongs);
