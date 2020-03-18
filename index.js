function map(sourceArray, someFunc) {
    let newArray = []

    for (let i = 0; i < sourceArray.length; i++) {
        let theElement = sourceArray[i]
        newArray.push(someFunc(theElement))
    }
    return newArray
}


function reduce(sourceArray, someFunc, startingPoint) {
    let a = (!!startingPoint) ? startingPoint : sourceArray[0]
    let i = (!!startingPoint) ? 0 : 1

    for (; i < sourceArray.length; i++) {
        a = someFunc(sourceArray[i], a)
    }
    return a;
}