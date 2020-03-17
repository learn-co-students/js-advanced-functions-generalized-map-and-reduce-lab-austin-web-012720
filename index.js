function map(array, cb) {
  const r = [];

  for (let i = 0; i < array.length; i++) {
    const theElement = array[i];
    r.push(cb(theElement));
  }

  return r;
}

function reduce(array, cb, starting) {
  let r = (starting) || array[0];
  let i = (starting) ? 0 : 1;

  for (; i < array.length; i++) {
    r = cb(array[i], r);
  }

  return r;
}
