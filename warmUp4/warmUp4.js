// 1-Define a function called myTrueFun that returns true whenever its called.
<<<<<<< HEAD
<<<<<<< HEAD
function typeFunc(){
return true;
}
// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.
function color(value){
	if (typeof value === 'string'){
		return true;
	}
	return false;
}
	
// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.

function isPrime (num){
	if (num<2) {
		return "not Prime";
	}else if (num>2){
		for (var i = 2 ; i<num ; i++){
			if ((num % i )===0) {
				return "not Prime"
			}
		}
	}
	return "Prime"
}


// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not

function sameValue (num1, num2){
	return (num1 === num2);
=======
function myTrueFun() {
	return true;
}
=======

>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.

// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
<<<<<<< HEAD
function sameValue(num1, num2) {
	if ((typeof num1 !== 'number') || (typeof num1 !== 'number')) {
		return "Please enter two numbers.";
	}
	else {
		if (num1 === num2) {
			return myTrueFun();
		}
		return !(myTrueFun());
	}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}
=======
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
