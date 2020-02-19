//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function each(coll, func) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                func(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                func(coll[key], key); 
          } 
    } 
}

function reduce(array, f, acc) { 
    if (acc === undefined) { 
          acc = array[0]; 
          array = array.slice(1); 
    } 
    each(array, function(element, i) { 
          acc = f(acc, element, i); 
    }); 
    return acc; 
}

function isSubset (array, array1){
    count = reduce (array, function(acc, element, i){
            if (array1.includes(element)){
            array.splice(i, 1)
            return acc += 1         
            } 
            return acc
            
    }, 0)
    return (count === array1.length)
}
isSubset([ 2, 3, 3, "a" ],[ 2, 1, 3, "a" ])
isSubset([ 2, 3, 3, "a" ],[ 3, 3, 3, "a" ])
isSubset([ 1, 2, 3, 4 ],[ 2, 3, 4 ])

