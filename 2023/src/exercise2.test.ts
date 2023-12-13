import {describe, expect, test} from '@jest/globals';

function manufacture(gifts:string[], materials:string):string[] {
    const res:string[] = [];
    for (let i = 0; i < gifts.length; i++) {
      const temp:string[] = gifts[i].split('')
      let canDoIt = true
      for (let j = 0; j < temp.length; j++) {
        const letter = temp[j];
        if(!materials.includes(letter))
            canDoIt=false
      }
      if(canDoIt)
        res.push(gifts[i])
        
    }
    return res;
  }

describe('Exercise1: check if all the gift can be made',()=>{
    test("T1: I= ['tren', 'oso', 'pelota'], 'tronesa'  O=['tren', 'oso']",()=>{
        const gifts = ['tren', 'oso', 'pelota']
        const materials = 'tronesa'
        const res = manufacture(gifts, materials);
        expect(res).toEqual(expect.arrayContaining(['tren', 'oso']))
    });
    test("T2: I= ['juego', 'puzzle'], 'jlepuz'  O=['puzzle']",()=>{
        const gifts = ['juego', 'puzzle']
        const materials = 'jlepuz'
        const res = manufacture(gifts, materials);
        expect(res).toEqual(expect.arrayContaining(['puzzle']))
    });
    test("T3: I= ['libro', 'ps5'], 'psli'  O=[]",()=>{
        const gifts = ['libro', 'ps5']
        const materials = 'psli'
        const res = manufacture(gifts, materials).length;
        expect(res).toBe(0)
    });


})

