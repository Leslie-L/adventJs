
function checkJump(heights) {
    const tam = heights.length;
    
    if (tam < 3) 
      return false;
    
    //encontrar el pico
    let middle = 0;
    let value=heights[0];
    for (let i = 0; i < tam; i++) {
        if(heights[i]>=value){
            middle=i
            value=heights[i]
        }
    }
    
    //detectar si hay un ascenso y undescenso
    if(heights[middle+1]===undefined || heights[middle-1]===undefined)
        return false
    
    //revisar el ascenso
    for (let i = 0; i < middle; i++) {
       if(!(heights[i] <= heights[i+1]))
        return false
    }

    //revisar el descenso
    for (let i = middle; i < tam-1; i++) {
        if(!(heights[i] >= heights[i+1]))
         return false
     }
   
    return true;
}

const heights =[ 1,1,1,1,1,1]
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