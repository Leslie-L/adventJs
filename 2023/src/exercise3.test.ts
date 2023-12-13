import { describe, test, expect } from "@jest/globals";

function findNaughtyStep(original:string, modified:string):string {
    let res = '';
    const moreLength = original.length>=modified.length?original:modified;
    const lessLength = original.length>=modified.length?modified:original;
    let i=0;
    let j = 0;
    while (i<moreLength.length ||i <lessLength.length ) {
        if(lessLength[i]!==moreLength[j]){
                res=res+moreLength[j] 
                i--;
        }
        j++;
        i++;
    }
    
    return res;
  }
describe('Exercise 3: identifies and returns the first extra step that was added or removed',()=>{
    test('T1: I: (abcd,abcde) O:e',()=>{
        const original = 'abcd'
        const modified = 'abcde'
        const res = findNaughtyStep(original, modified) 
        expect(res).toBe('e');
    })
    test('T2: I: (stepfor,stepor) O:f',()=>{
        const original = 'stepfor'
        const modified = 'stepor'
        const res = findNaughtyStep(original, modified) 
        expect(res).toBe('f');
    })
    test('T3: I: (abcde,abcde) O:""',()=>{
        const original = 'abcde'
        const modified = 'abcde'
        const res = findNaughtyStep(original, modified).length 
        expect(res).toBe(0);
    })
    test('T4: I: ("",abcde) O:""',()=>{
        const original = ''
        const modified = 'abcde'
        const res = findNaughtyStep(original, modified).length 
        expect(res).toBe(5);
    })
    test('T5: I: ("abcd",abcde) O:""',()=>{
        const original = 'abbcd'
        const modified = 'abcd'
        const res = findNaughtyStep(original, modified)
        expect(res).toBe('b');
    })
});
