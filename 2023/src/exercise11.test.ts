import { describe,expect,test } from "@jest/globals"
/*
If it is already a palindrome, an empty array.
If it is not possible, null.
If a palindrome can be formed with one change,
 an array with the two positions (indexes) that must be swapped to create it.
*/

function getIndexsForPalindrome(word:string) {
    const isPalindrom = (wordTemp:string)=>{
        const temp = wordTemp.split('').reverse().join('')
        return temp === wordTemp;
    }
    if(isPalindrom(word))
        return []
   
    const letters = word.split('');
    for (let i = 0; i < letters.length-1; i++) {
        for (let j = 1; j < letters.length; j++) {
            const letter1 = letters[i]
            const letter2 = letters[j]
            //swap
            letters[i]=letter2;
            letters[j]=letter1;
            if(isPalindrom(letters.join('')))
            return [ i,j]
            //swap
            letters[i]=letter1;
            letters[j]=letter2;
        }
    }
    return null
}
describe('Check if a word is a palindrom',()=>{
    test('T1:anna R:[]',()=>{
        const res = getIndexsForPalindrome('anna') // []
        expect(res).toEqual([])
    });
    test('T2:abab R:[0,1]',()=>{
        const res = getIndexsForPalindrome('abab') // [0, 1]
        console.log(res)
        expect(res).toEqual([0,1])
    });
    test('T3:aaaaaaaa R:[]',()=>{
        const res = getIndexsForPalindrome('aaaaaaaa') // []
        expect(res).toEqual([])
    })
    test('T4:aaababa R:[1,3]',()=>{
        const res = getIndexsForPalindrome('aaababa') // [1, 3]
        expect(res).toEqual([1,3])
    });
    test('T5:caababa R:null',()=>{
        const res = getIndexsForPalindrome('caababa') // null
        expect(res).toEqual(null)
    });

});