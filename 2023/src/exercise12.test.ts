/*
The characters from A to Z degrade from capital letters to lower-case letters (A-Z ⇒ a-z)
Letters degrade in a series of characters in this order: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
Once the letters have degraded into the symbols, they can continue to degrade.
Note that the last one is a blank space, not an empty character.
Characters that are not letters (like digits) do not degrade.
*/
import { describe,expect,test } from "@jest/globals"


function checkIsValidCopy(original:string, copy:string) {
    const arrOriginal = original.split('');
    const arrCopy = copy.split('');
    
    const cases = (character:string, position:number)=>{
        if(character===' '){
            return '.'
        }else if(character==='.'){
            return ':'
        }else if(character===':'){
            return '+'
        }else if(character==='+'){
            return '#'
        }else if(character==='#'){
            const character = arrOriginal[position]
            if(character!= '.' && character!=' ' && character!='+' && character!=':')
            return arrOriginal[position]
            return 'NO'

        }
        return character
    }
    let answer = false;
    let convert = false
    let iterations =0;
    while (iterations < 20) {
            for (let i = 0; i < arrCopy.length; i++) {
                const element = arrCopy[i];
                if((element === arrOriginal[i] || element ===arrOriginal[i].toLowerCase()) ){
                   continue
                }
                if(arrOriginal[i]===' '){
                    if(arrCopy[i]===' '){
                        continue;
                    }else{
                        iterations=20
                        break
                    }
                }
                const newLetter = cases(element,i);
                if(newLetter==='NO'){
                    iterations=20
                    break;
                }
                arrCopy[i]=newLetter;
                console.log(newLetter)
                console.log(arrCopy.join(''))
                console.log(original)
                if(element!=' ' && element!='#' && element!=':' && element!='.' && element!='+'){
                    if(element.toLowerCase() !== arrOriginal[i].toLowerCase()){
                        iterations=20
                        break;
                    }

                }else if(arrCopy.join('').toLowerCase() === original.toLowerCase()){
                    console.log("aqui")
                    console.log(arrCopy)
                    console.log(arrOriginal)
                    let review = true;
                    
                    for (let j = 0; j < arrCopy.length; j++) {
                        if(!(arrCopy[j] === arrOriginal[j] || arrCopy[j] ===arrOriginal[j].toLowerCase()) ){
                            review=false;
                            break
                        }
                        
                    }
                    answer=review
                    iterations=20
                    break;
                }
                    
        }
        iterations++
    }
    return answer
}
describe('is valid copy?',()=>{
    
    test.only('O: S#n:a Claus  R:S#+:. c:. s E:true',()=>{
        const res =  checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')
         expect(res).toBe(true)
     })
    test('O: s+#:.#c:. s R:s#+:.#c:. s E:false',()=>{
        const res =  checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')
         expect(res).toBe(false)
     })
    test('O:S#nta Claus R:S#ntA ClauS E:false',()=>{
        const res =  checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')
         expect(res).toBe(false)
     })
    test('O:Santa Claus is coming R:sa#ta Cl#us i+ comin# E:true',()=>{
       const res = checkIsValidCopy(
            'Santa Claus is coming',
            'sa#ta Cl#us i+ comin#'
          ) // true
        expect(res).toBe(true)
    })
    test('O:s#nta Cla#s is coming R:p#nt: cla#s #s c+min# E:false',()=>{
        const res = checkIsValidCopy(
            's#nta Cla#s is coming',
            'p#nt: cla#s #s c+min#'
          ) // false
        expect(res).toBe(false)
    })
    test('O:Santa Claus R:s#+:. c:. s E:true',()=>{
        const res = checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
        expect(res).toBe(true)
    })
    test('O:Santa Claus R:s#+:.#c:. s E:false  ',()=>{
        const res = checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false
        expect(res).toBe(false)
    })
})
