//Given an integer n, return a string array, answer where:

//answer[i] == "FizzBuzz" if i is divisible by 3 and 5
//answer[i] == "Fizz" if i is divisible by 3
//answer[i] == "Buzz" if i is divisible by 5
//answer[i] == "i" if none of the above conditions are true

function fizzbuzz(n) {
    let answer = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz")
        }
        else if (i % 3 === 0) {
            answer.push("Fizz")
            }
        else if (i % 5 === 0) {
            answer.push("Buzz")
        }
        else {
            answer.push(i)
        }
    }
    console.log(answer)
}

fizzbuzz(6);
fizzbuzz(15);
fizzbuzz(7);
fizzbuzz(10);

// trying a test here 
// test("5 should return [“1”,“2”,“Fizz”,“4”,“Buzz”]", () => {
//     expect(fizzbuzz(5)).toBe([“1”,“2”,“Fizz”,“4”,“Buzz”])
// });