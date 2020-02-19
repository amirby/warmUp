/*
1. create a data model to represent your classmates
    • think of different attributes of your classmates? what do all of them have ?
    // first name, last name, gender , age 
    • create a factory function.
  
    • create an array to hold the classmates that you created and what you created to it .
    • write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
    • write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
    • calculate the number of male friends that your class have by writing a function called nbOfMale.
    • Write a function searchMates that, given a query and an array of Mates,
      searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
*/

<<<<<<< HEAD
function makeClassmates(firstName, lastName, gender , age){
  return {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age
  }
}
var classmates = [];
var mate1 = makeClassmates("Wala", "Abdaoui", "Male", 30);
var mate2 = makeClassmates("Mootaz", "djebali", "Male", 20 );
var mate3 = makeClassmates("Firas", "Mrad", "Male", 22);
var mate4 = makeClassmates("Nouha", "Chorfi", "Female", 30);
var mate5 = makeClassmates("Siwar", "Hkimi", "Female", 25);
var mate6 = makeClassmates("Ali", "Essoudani", "Male", 29);
var mate7 = makeClassmates("Taha", "Khelfa", "Male", 40);
var mate8 = makeClassmates("Mohamed", "Zemzmi", "Male", 26);
var mate9 = makeClassmates("Houssem" , "Abdelli", "Male", 33);
var mate10 = makeClassmates("Houssem", "Guesmi", "Male", 19);
var mate11 = makeClassmates("Omar", "Yakoubi", "Male", 19);
var mate12 = makeClassmates("Ahmad", "Addeeb","Male", 24);
var mate13 = makeClassmates("Khaireddine", "Lachtar", "Male", 24);
var mate14 = makeClassmates("Belgacem", "Zabbes", "Male", 25);
var mate15 = makeClassmates("Afif", "Rakrouki", "Male", 24);
var mate16 = makeClassmates("amine", "Hassine", "Male", 42);

classmates.push(mate1, mate2, mate3, mate4, mate5, mate6, mate7, mate8, mate9, mate10, mate11, mate12, mate13, mate14, mate15, mate16);

function displayFriend(mFirst, mLast){
  for (var i = 0; i< classmates.length; i++){
    if ((mFirst === classmates[i].firstName) && (mLast === classmates[i].lastName)){
    return ("First Name : "+ classmates[i].firstName + "\nLast Name: " + classmates[i].lastName + "\nGender: "+ classmates[i].gender + "\nage: "+ classmates[i].age);
    }
  } 
  return "not found"
}

function addFriend (firstName, lastName, gender , age){
  return classmates.push ( {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age
  });
}

function nbrOfmale (){
  var count = 0;
  for (var i = 0; i< classmates.length; i++){
    if (classmates[i].gender === "Male") {
      count+= 1;
    }
  }
  return count;
}

function searchMate(mFirst, mLast, array){
  mFirst = mFirst.toUpperCase();
  mLast = mLast.toUpperCase();
  for (var i = 0; i< array.length; i++){
    if ((mFirst === (array[i].firstName).toUpperCase()) && (mLast === array[i].lastName.toUpperCase())){
    return ("First Name : "+ array[i].firstName + "\nLast Name: " + array[i].lastName + "\nGender: "+ array[i].gender + "\nage: "+ array[i].age);
    }
  } 
  return "not found"
}




=======
function myClassMates(name, hair, gender, age, glasses) {
  return {
    name: name,
    hair: hair,
    gender: gender,
    age: age,
    glasses: glasses
  };
}

var houssem1 = myClassMates("Houssem", "Black", "Male", "30", true);
var houssem2 = myClassMates("Houssem", "Black", "Male", "19", false);
var nouha = myClassMates("Nouha", "Black", "Female", "33", true);
var taha = myClassMates("Taha", "Black", "Male", "40", true);
var souha = myClassMates("Souha", "Red", "Female", "23", false);
var classMates = [houssem1, houssem2, nouha, taha, souha];

function displayFriend(mate) {
  if (mate.gender === "Male") {
    if (mate.glasses === true) {
      return "My mate " + mate.name + " has a " + mate.hair + " hair " + " and he is " + mate.age + " years old.\n He also wears glasses.";
    }
    else {
      return "My mate " + mate.name + " has a " + mate.hair + " hair " + " and he is " + mate.age + " years old.\n He doesn't wear glasses.";
    }
  }
  else {
    if (mate.glasses === true) {
      return "My mate " + mate.name + " has a " + mate.hair + " hair " + " and she is " + mate.age + " years old.\n She also wears glasses.";
    }
    else {
      return "My mate " + mate.name + " has a " + mate.hair + " hair " + " and she is " + mate.age + " years old.\n She doesn't wear glasses.";
    }
  }
}

function addFriend(mate) {
  var arr = classMates.push(mate);

  return arr;
}

function nbOfMale(array) {
  var counter = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i].gender === 'Male') {
      counter = counter + 1;
    }
  }
  return counter;
}


function searchMates(query, array) {
  var arr = [];
  var str = "";

  for (var i = 0; i < array.length; i++) {
    arr = Object.keys(array[i]);
    for (var j = 0; j < arr.length; j++) {
      if ((arr[j].query !== undefined) && (arr[j].query === query)) {
        str = str + array[i]["name"] + "\n";
      }
    }
  }
  return str + "\n the people above match together.";
}

// I didn't verify the functions in the console because of the time so I think there exist plenty mistakes :'( especially the last one
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
