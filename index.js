// Add your functions here
function map(arr, callback) {
  let result = [];
  for ( let i = 0; i < arr.length; i ++) {
    result.push(callback(arr[i]));
  }
  return result;
}

function reduce (arr, fn, start) {
  let i;
  let acc;
  if (start) {
    acc = start;
    i = 0;
  } else {
    acc = arr[0];
    i = 1;
  }
  for (i; i < arr.length; i += 1) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}

// let arr1 = [1,2,3,4];
// let arr2 = [1, 2, true, "razmatazz", false];
// let arr3 = [ false, null, null, null];

// const sum = function (acc, ele) {
//   acc += ele;
//   return acc;
// };

// const allTrue = function (acc, ele) {
//   acc = acc && !!ele;
//   return acc;
// };

// const anyTrue = function (acc, ele) {
//   acc = !!ele || acc;
//   return acc;
// };


// console.log(reduce(arr3, anyTrue));
