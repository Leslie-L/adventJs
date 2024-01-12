function drawGift(size:number, symbol:string) {
    // Code here
    if(size==1)
    return "#\n"
    const half = size-2
    const base = '#'.repeat(size)
    let space = half
    let cont = 0;
    let res=" ".repeat(size-1)+base+"\n";
    for(let i=1; i<=half;i++){
      const iter =" ".repeat(space) +'#'+ symbol.repeat(half) + "#"
      const otherBase = symbol.repeat(cont)+"#"
      res=res+iter+otherBase+'\n'
      cont++
      space--;
    }
    res=res+base+symbol.repeat(cont)+"#\n";
    cont--;
    for(let i=half; i>=1;i--){
      const iter = '#'+ symbol.repeat(half) + "#"
      const otherBase = symbol.repeat(cont)+"#"
      res=res+iter+otherBase+'\n'
      cont--;
    }
    res=res+base+"\n";
    return res
  }