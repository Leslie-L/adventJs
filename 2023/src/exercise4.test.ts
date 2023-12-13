import { describe, expect, test } from "@jest/globals";

function decode(message:string):string {
    
    let open:number = -1
    let close:number = -1
    const searchPair =(originalString:string):boolean =>{
        let tempString = originalString.split('');
        let cont = 0;
         open = -1
         close = -1
        while(cont<tempString.length){
            if(tempString[cont]===')'){
                close=cont;  
                break
            }
            cont++
        }
        for (let index = cont; index>=0; index--) {
            if(tempString[index]==='('){
                open=index;
                break
            } 
        }
        if(open==-1)
            return false
        return true
    }
    
    searchPair(message);
    let original = message.split('');

    while (open!=-1) {
        let actualWord = original.slice(open,close);
        const oldString = actualWord.join('')+')';
        //console.log(oldString)
        actualWord = actualWord.slice(1).reverse();
        
        const newString = actualWord.join('');
        //console.log(newString)
        const transform = original.join('').replace(oldString,newString);
       // console.log(transform)
        
        
        searchPair(transform)
        original = transform.split('')
    }

    return original.join('')
}

describe('Exercise 4: a function that takes a string and reverses the characters within each pair of parentheses',()=>{
    test('t1: i:hola (odnum) o:hola mundo',()=>{
        const a = decode('hola (odnum)')
        expect(a).toBe('hola mundo')
    });
    test('t2: i:(olleh) (dlrow)! o:hello world!',()=>{
        const b = decode('(olleh) (dlrow)!')
        expect(b).toBe('hello world!')
    });
    test('t3: i:sa(u(cla)atn)s o:santaclaus',()=>{
        const c = decode('sa(u(cla)atn)s')
        expect(c).toBe('santaclaus')
    });
})
