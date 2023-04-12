function getCompleted(part, total) {
    const timePart = part.split(':');
    const timeTotal =  total.split(':');
    
    const totalPart = parseInt(timePart[0]) * 3600 + parseInt(timePart[1]) * 60 + parseInt(timePart[2]);
    const totalTotal = parseInt(timeTotal[0]) * 3600 + parseInt(timeTotal[1]) * 60 + parseInt(timeTotal[2]);
   
    
    function gcd(a, b) {
        let divisor;  
        for (let i = 1; i <= a && i <= b; i++) {
          if( a % i == 0 && b % i == 0) 
                divisor = i;
        }
        return divisor;
    }
    
    let div = (totalPart / totalTotal) * 100;
    const mcm =gcd(div, 100)
    let mcm1 =  totalTotal % totalPart === 0 ?  totalPart %totalTotal : totalTotal % totalPart;
    
    
    if(Number.isInteger(div)){
        const numerador= div / mcm;
        const denominador = 100 / mcm;
        return numerador + "/" + denominador;
    }else{
        const numerador = totalPart / mcm1; 
        const denominador = totalTotal / mcm1;
        return numerador + "/" + denominador;
    }
    
    

}
console.log(getCompleted('02:20:20', '03:30:30')) // 2/3;
console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')) // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')) // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')) // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')) // '1/3'
console.log(getCompleted('03:30:30', '05:50:50')) // '3/5