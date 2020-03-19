function map(array, callBackFunction) {
  const newArray = [];
  for(let i = 0; i < array.length; i ++) {
    newArray.push(callBackFunction(array[i]));    
  }
  return newArray;
}

function reduce(array, callBackFunction, initialValue) {
  let initVal = (!!initialValue) ? initialValue : array[0];
  let i = (!!initialValue) ? 0 : 1;
  
  for(; i < array.length; i++) {
    initVal = callBackFunction(array[i], initVal);
  }
  return initVal;
} 
