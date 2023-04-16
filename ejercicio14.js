function getOptimalPath(path) {
    const iteraciones = path.length;
    const finalPath = [];
    const firtsNumber = path[0];
    let position = 0;
    for (let i = 1; i < iteraciones; i++) {
        
        const array = path[i].slice(position,position+2);
        const optimal = array[0]<array[1] ? array[0] : array[1];
        finalPath.push(optimal);
        position=path[i].findIndex(item=>item===optimal);
        
    }
    return finalPath;
}

//console.log(getOptimalPath([[0], [2, 3]])) // 2
console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])) // 5
//console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])) // 8