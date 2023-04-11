console.log("hello")
function countTime(leds) {
    let cont = 0;
    const tam =  leds.length;
    const fin = leds.reduce((prev,actual)=>prev+actual,0);
    if(fin==tam)
        return 0
    let sum=0;
    //console.log(tam)
    while (sum!=tam) {
        const tempLeds = [...leds]
        leds.map((element,index,array) =>{
            const value = array[index-1]!=undefined ? array[index-1] : array[tam-1];
            if(element===0 && value ===1)
                tempLeds[index]=1;
        })
        console.log(tempLeds)
        sum = tempLeds.reduce((prev,actual)=>prev+actual,0);
        leds=[...tempLeds]
        //console.log(sum)
        cont++;


    }


    return cont * 7;
}

const leds = [0, 1, 1, 0, 1]
console.log(countTime(leds)) // 7
// 7 seconds because in the first change
// all the lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

console.log(countTime([0, 0, 0, 1])) // 21
// 21 seconds because it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

console.log(countTime([0, 0, 1, 0, 0])) // 28
// 28 seconds because it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]

console.log("hello")