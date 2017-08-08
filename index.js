//1)
let doSomething = (arr) => console.log("Test 1:",arr);

//2)
let doSomething2 = (arr) => arr.forEach(ele => console.log("Test 2:",ele));

//3)
let doSomething3 = (arr) => arr.forEach(ar => ar.forEach(ele => console.log("Test 3:",ele)));

let numbers = [[0,1,2],[3,4,5],[6,7,8]];
doSomething(numbers);
doSomething2(numbers);
doSomething3(numbers);
