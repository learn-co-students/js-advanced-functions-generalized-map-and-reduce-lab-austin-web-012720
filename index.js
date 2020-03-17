// Add your functions here
let array = [1,2,3,4,5];

const map = (array, fn) => {
    let result = array.map(element => fn(element));
    return result;
};

// const reduce = (array, fn, starting) => {
//     let result = (!!starting) ? starting : array[0];
//     result = array.reduce((total, element) => fn(element, result));
//     return result;
// }

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }


