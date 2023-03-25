function checkPart(part) {
    let newStr = part.toLowerCase();
    const word = newStr.split('').reverse();

    if(newStr === word.join(''))
        return true

   for (let i = 0; i < word.length; i++) {
        let element = [... word]
        element.splice(i,1,'');
        const copy = [... element].reverse();
        //console.log(copy)
        //console.log(element)
        if(copy.join('')===element.join(''))
            return true
   }
    
    return false
  }

 //console.log(checkPart("uwu")) // true
  // "uwu" is a palindrome without removing any character
  
 console.log(checkPart("miidim")) // true
  // "miidim" can be a palindrome after removing the first "i"
  
console.log(checkPart("midu")) // false
 