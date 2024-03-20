function calculateTime(deliveries) {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    deliveries.forEach((date)=>{
        const time = date.split(':')
        seconds+= parseInt(time[2])
        minutes+=parseInt(time[1])
        hours+=parseInt(time[0])
    })
    
    minutes = minutes * 60;
    hours = hours * 3600

    const total = hours + minutes + seconds;
    
    const resTot =  total > 25200 ? total-25200 : 25200-total;
        const resTotBase = resTot% 3600
        const hrs = (resTot - resTotBase)/3600
        const min =  (resTotBase - resTotBase % 60)/60
        const scds = resTotBase % 60 
        const strHrs =hrs.toString().padStart(2, '0')
        const srtMin =min.toString().padStart(2, '0')
        const strScnds = scds.toString().padStart(2, '0')
        const res = `${strHrs}:${srtMin}:${strScnds}`
     if(total <25200 )
        return "-"+res
    return res

   
  }
  
console.log(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']))
//"00:00:01"
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:15']))
// '00:30:00'
/*
console.log(calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
])) // '-05:29:00'*/