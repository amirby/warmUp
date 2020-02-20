// 1) Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// ex greaterNum(5, 10) => "The greater number of 5 and 10 is 10."
<<<<<<< HEAD
<<<<<<< HEAD

function greaterNum(num1, num2){
    if (num1 > num2) {
        return "The greater number of "+ num1 + " and " + num2 + ' is ' + num1
    }
    return "The greater number of "+ num1 + " and " + num2 + ' is ' + num2
=======
function greaterNum(num1, num2) {
    if (num1 >= num2) {
        return "The greater number of " + num1 + " and " + num2 + " is " + num1 + ".";
    }
    return "The greater number of " + num1 + " and " + num2 + " is " + num2 + ".";;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}
=======
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6

// 2) Write a function named isEven using  for loop that
// -  iterate from x to y.
// -  return array contain the even values,
//  ex:  isEven(1,10) => [2,4,6,8,10]

<<<<<<< HEAD
function isEven (x, y) {
    var array = [];
    for (var i = x; i<=y ; i++){
        if ((i%2)===0) {
            array.push(i);
        }
    }
    return array;
}

//3) write a function named sum that 
// - Use a while loop to add up the numbers from x to y.
// ex sum(1,5) => 15

function sum(x,y) {
    var total = 0;
    var i = x;
    while (i<=y) {
        total = total + i;
        i++;
    }
    return total;
=======
// function isEven(x, y) {
//     var arr = [];
//     for (var i = 0; i < arr.length; i++) {
//         while (x <= y) {
//             if (x % 2 === 0) {
//                 arr[i] = arr.push(x)
//             }
//             x++
//         }
//     }
//     return arr;
// }
//3) write a function named sum that
// - Use a while loop to add up the numbers from x to y.
// ex sum(1,5) => 15
<<<<<<< HEAD
function sum(x, y) {
    var sum = 0;
    while (x <= y) {
        sum = sum + x;
        x++;
    }
    return sum;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}
=======
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6

//4) Write a function named factorial that
// -  Use Recursion to calculate the factorial of a number
// -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
// - 5! = 5*4*3*2*1 = 120
<<<<<<< HEAD
// ex : factorial(5) => 120 
function factorial(n) {
    var fact = 1;
    if (n === 0) {
        return 1
    }
    fact = fact * n;
    return fact * factorial(n - 1)

<<<<<<< HEAD
function factoriel (n) {
    if (n === 1){
        return 1;
    } else return n * factoriel(n-1);
=======
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}
=======
// ex : factorial(5) => 120
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6

//5) write a function named decimals
//- the function will format a number up to specified decimal places
//- the function will return a string
//- if the parameters not a number return false
// ex :
//      decimals(2100, 'a') ==> false
//      decimals('a', 5) ==> false
//      decimals(2.100212, 2) ==> '2.10'
//      decimals(2.100212, 3) ==> '2.100'
//      decimals(2100, 2) ==> '2100.00'
<<<<<<< HEAD
//      
<<<<<<< HEAD

function decimals (n, deci){
    if (((typeof deci)!== 'number')||((typeof n)!== 'number')){
        return false;
    }else return Number.parseFloat(n).toFixed(deci)
    
=======
function decimals(num1, num2) {
    var ind = 0
    var decim = ''
    var str = ''
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) {
        return false;
    }
    else {
        ind = (num1 + '').indexOf('.');
        decim = (num1 + '').slice(ind + 1)
        str = (num1 + '').slice(0, ind + 1 + num2)
        return str;

    }
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}
=======
//
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
