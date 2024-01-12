function maxDistance(movements:string) {
    const content = movements.split('')
    const numRight = content.reduce(( accumulate,current,)=>current=='>'? accumulate+1:accumulate,0)
    const numLeft = content.reduce(( accumulate,current,)=>current=='<'?accumulate+1:accumulate,0)
    const decision = content.reduce(( accumulate,current,)=>current=='*'?accumulate+1:accumulate,0)
    if(numRight>numLeft){
      return (numRight+decision)-numLeft
    }else if(numRight<numLeft){
      return (numLeft+decision)-numRight
    }
      
    return decision
  
  }