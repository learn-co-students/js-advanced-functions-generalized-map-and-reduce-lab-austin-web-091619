function map(sourceArray, block) {
    return sourceArray.map(integer => block(integer))
}

function reduce(sourceArray, block, startingPoint = 0) {
    return sourceArray.reduce((currentValue, nextValue) => block(currentValue, nextValue, startingPoint))
}