// Add your functions here
function map(sourceArray, sourceFx) {
    let result = []

    for (let i = 0; i < sourceArray.length; i++) {
        let theElement = sourceArray[i]
        result.push(sourceFx(theElement))
    }

    return result;
}

function reduce(sourceArray, sourceFx, starting){
    let result = (!!starting) ? starting : sourceArray[0]
    let i = (!!starting) ? 0 : 1

    for (; i < sourceArray.length; i++) {
        result = sourceFx(sourceArray[i], result)
    }

    return result;
}