// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
<<<<<<< HEAD
<<<<<<< HEAD
function gcd(num1, num2){
    if (num1===num2){
        return num1;
    }else if (num1>num2) {
        return gcd((num1-num2),num2);
    }else if (num1<num2) {
        return gcd(num1,(num2-num1));
    }
}
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
function sum(num1, num2){
    var result = num1
    if ((num1<0) && (num2<0)) {
        for (var i= 0 ; i < Math.abs(num2) ; i++ ){
            result--;
        }
    }
    else if (num2<0){
        return sum(num2, num1);
    }
    else if (num2 >=0){
        for (var i= 0 ; i < num2 ; i++ ){
            result++;
        }
    }
    return result;
}
//you can only add one at each summetion, you'll need to use recursion in this.
=======

function gcd(number1, number2) {
    if ((typeof number1 !== 'number') || (typeof number1 !== 'number') || (number1 < 0) || (number2 < 0)) {
        return "Please enter two positive numbers.";
    }
    else {
        if (number2 === 0) {
            return number1;
        }
        else {
            return gcd(number2, number1 % number2);
        }
    }
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without
// suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(number1, number2) {
    if (number2 !== 0) {
        return sum(number1 + 1, number2 - 1);
    }
    return number1;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
=======
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
