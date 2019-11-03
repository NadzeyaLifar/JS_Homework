//Задание 1
function filterNumbersArr(arr) {
    return arr.filter(function(number) {
        return number > 0;
    });
}
console.log( filterNumbersArr( [-1, 0, 2, 34, -2]) );

//Задание 2
var arr = [-1, 0, 2, 34, -2]; 

function filterNumbersArr(arr) {
 return arr.find(function(number) {
    return number > 0;
  });
}
console.log( filterNumbersArr(arr) );


//Задание 3
function isPalindrome(value) {
   value = value.toLowerCase();
    if (value === value.split('').reverse().join('')) {
        return true;
      }   
      else {
        return false;
        }  
}
  console.log( isPalindrome('шалаШ') );
  console.log ( isPalindrome('привет') );


//Задание 4
function areAnagrams (value1, value2) {
if (value1.toLowerCase().split('').sort().join('') === value2.toLowerCase().split('').sort().join('')) {
        return true;
      } 
    else {
        return false;
        }
}
console.log( areAnagrams('кОт', 'отк') ); // true
console.log( areAnagrams('кот', 'атк') ); // false
console.log( areAnagrams('кот', 'отко') ); // false


//Задание 5
 function divideArr (arr, subArrLength) {
  var newArr = [];

  while (arr.length) {
    newArr.push(arr.splice(0, subArrLength));
     }
  return newArr;
}
console.log( divideArr([1, 2, 3, 4], 2) );
console.log( divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3) );

/*
function divideArr(arr, subArrLength) {
  var newArr = [];

  for (var i = 0, len = arr.length; i < len; i += subArrLength)
  newArr.push(arr.slice(i, i+subArrLength));
  return newArr;
}
console.log( divideArr([1, 2, 3, 4], 2) );
console.log( divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3) );*/
