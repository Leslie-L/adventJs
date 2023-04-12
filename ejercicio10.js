
function checkJump(heights) {
    let equal =true;
    const tam = heights.length;
    let middle = 0;
    let value=-1000;
    let parabol =false;
    for (let i = 0; i < heights.length; i++) {
        if(heights[i]>=value){
            middle=i
            value=heights[i]
        }
    }
    //console.log(middle)
    //console.log(heights[middle+1])
    if(heights[middle+1]===undefined || heights[middle-1]===undefined)
        return false
    //console.log("aqi2")

    for (let i = 0; i < middle; i++) {
       if(!(heights[i] <= heights[i+1]))
        return false
       if(heights[i] != heights[i+1])
         equal=false

    }
    //console.log("aqi3")
    for (let i = middle; i <= tam-2; i++) {
        if(!(heights[i] >= heights[i+1]))
         return false
        if(heights[i] != heights[i+1])
         equal=false
     }
     //console.log("aqi4")
    //if(equal)
    // return false;
     //console.log("aqi5")
    return true;
}

const heights =[1, 1,4, 2, 3]
console.log(checkJump(heights)) // true
//const heights2 = [1, 7, 3, 5]
//console.log(checkJump(heights2))
/*
console.log(checkJump([1, 2, 3, 4, 5])); // debería devolver false
console.log(checkJump([5, 4, 3, 2, 1])); // debería devolver false
console.log(checkJump([1, 3, 2, 4, 1])); // debería devolver false
console.log(checkJump([1, 2, 3, 2, 1])); // debería devolver true
console.log(checkJump([1, 2, 3, 2, 5])); // debería devolver false
console.log(checkJump([1, 1, 1, 1, 1])); // debería devolver false
console.log(checkJump([1])); // debería devolver false
console.log(checkJump([]));
*/