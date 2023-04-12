
function checkJump(heights) {
    const tam = heights.length;

    //encontrar el pico
    let middle = heights.indexOf(Math.max(...heights));
    /*let value=heights[0];
    for (let i = 0; i < tam; i++) {
        if(heights[i]>=value){
            middle=i
            value=heights[i]
        }
    }*/
    
    //detectar si hay un ascenso y undescenso
    if(middle===0 || (tam-1)===middle)
        return false
    
   
    //revisar el ascenso
    for (let i = 0; i < middle; i++) {
       if(heights[i] > heights[i+1])
        return false
    }

    //revisar el descenso
    for (let i = middle; i < tam-1; i++) {
        if(heights[i] < heights[i+1])
         return false
     }
   
    return true;
}
