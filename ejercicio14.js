function getOptimalPath(path) {
    if(path.length==1)
        return path[0]
    /*if(path.length==2){
        const min = path[0]<path[1] ? path[0] : path[1];
        return path[0] + min;
    }*/
        
    const iteracionesInternas = path.length-2;
    const iteracionesExternas = path[path.length-1]
    const result = [];
    let pos =0;
    for (let i = 0; i < iteracionesExternas.length; i++) {
        const numActual = iteracionesExternas[i];
        //console.log("Num Actual=",numActual);
        const resTemporal = []
        resTemporal.push(numActual)
        pos=i;
        for(let j = iteracionesInternas; j >= 0; j--){
            //console.log("pos",pos)
            const array = path[j];
            //console.log(array)
            const num1 = (pos-1) >=0 ? array[pos-1]: undefined;
            const num2 = (pos) < array.length ? array[pos]: undefined;
            //console.log(num1,num2)
            if(num1 === undefined){
                resTemporal.push(num2)
            }else if(num2===undefined){
                resTemporal.push(num1)
            }else if(num1>num2){
                resTemporal.push(num2)
            }else{
                resTemporal.push(num1)
            }
            pos=pos>1?pos-1:pos;
        }
        
       // console.log(resTemporal)
        const total = resTemporal.reduce((previo,actual)=>previo+actual,0);
        result.push(total)
        
    }
   result.sort((a,b)=>a-b)
    return result[0];
}
/*
const array = path[i].slice(position,position+2);
        const optimal = array[0]<array[1] ? array[0] : array[1];
        finalPath.push(optimal);
        position=path[i].findIndex(item=>item===optimal);

*/
//console.log(getOptimalPath([[0], [2, 3]])) // 2
console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])) // 5
//console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])) // 8
