// const leftOperand = parseInt(process.argv[2], 10);
// const rigthOperand = parseInt(process.argv[3], 10);
// //
// console.log(`${leftOperand} % ${rigthOperand}=${leftOperand % rigthOperand}`);

for (let n = 1; n < 101; n++) {
    if ((n % 5 == 0) && (n % 3 == 0)) {
        console.log("Fizz Buzz");
    } else if (n % 5 == 0) {
        console.log("Buzz");
    } else if (n % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(n);
    }
}