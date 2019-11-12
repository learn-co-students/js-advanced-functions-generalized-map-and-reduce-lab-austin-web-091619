// Add your stuff here
// Add your stuff here
function map(array, callback){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray
}

function reduce(array, callback, startingPoint){
    if(startingPoint){
        for (let i = 0; i < array.length; i++){
            startingPoint = callback(array[i],startingPoint)
        }
    } else {
            startingPoint = array[0]
            for (let i = 1; i < array.length; i++){
                startingPoint = callback(array[i],startingPoint)
            }  
        }
        return startingPoint
    }
