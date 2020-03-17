// Add your functions here
function map(array, callback) {
  let retArray = [];

  array.forEach(element => {
    retArray.push(callback(element));
  });

  return retArray;
}

function reduce(array, callback, start = 0) {
  let retValue = start

  array.forEach(element => {
    retValue = callback(element, retValue);
  });

  return retValue;
}
