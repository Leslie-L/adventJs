function distributeGifts(weights) {
    const result = []
    for (let i = 0; i < weights.length; i++) {
        const weightsRow = []
        for (let j = 0; j < weights[i].length; j++) {
          // Accede a matriz[i][j]
          const weightsPos = []
          if(weights[i][j])
            weightsPos.push(weights[i][j])
          
          if(j-1>=0)
          if(weights[i][j-1])weightsPos.push(weights[i][j-1])

          if(i+1<weights.length )
          if(weights[i+1][j])weightsPos.push(weights[i+1][j])

          if(j+1<weights[i].length)
          if(weights[i][j+1])weightsPos.push(weights[i][j+1])

          if(i-1>=0)
          if(weights[i-1][j])weightsPos.push(weights[i-1][j])

          const peso = Math.round(weightsPos.reduce((prev,actula)=>prev+actula,0) / weightsPos.length)
          weightsRow.push(peso)
        }
        result.push(weightsRow)
    }
    return result
}

function distributeGifts2(weights) {
    const result = []
   
    
    for (let i = 0; i < weights.length ; i++) {
        const line = weights[i].map((actual,j)=>{
            const weightsPos = []
            if(weights[i][j])
              weightsPos.push(weights[i][j])
            
            if(j-1>=0 && weights[i][j-1] )
            weightsPos.push(weights[i][j-1])
  
            if(i+1<weights.length && weights[i+1][j])
            weightsPos.push(weights[i+1][j])
  
            if(j+1<weights[i].length && weights[i][j+1])
             weightsPos.push(weights[i][j+1])
  
            if(i-1>=0 && weights[i-1][j] )
            weightsPos.push(weights[i-1][j])
  
            const suma = weightsPos.reduce((prev,actula)=>prev+actula,0) 
            const peso = suma / weightsPos.length
            return Math.round(peso)
        })
        
        result.push(line)
    }
    return result
}
const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
  ]
  
  
console.log(distributeGifts(input))