import {describe, expect, test} from '@jest/globals';
function findFirstRepeated(gifts:number[]):number {
    const repeted:number[]=[];
    let res = -1;
    gifts.forEach(item=>{
        if(repeted.includes(item)){
            if(res==-1)
                res = item
        }else{
            repeted.push(item)
        }
    })
    return res;
}
describe('Exercise 1: check ids report the first repeted',()=>{
    test('T1: [2, 1, 3, 5, 3, 2] =>  res should be: 3 ',()=>{
        const giftIds = [2, 1, 3, 5, 3, 2]
        const firstRepeatedId = findFirstRepeated(giftIds);
        expect(firstRepeatedId).toBe(3)
    });
    test('T2: No repited [1, 2, 3, 4] =>  res should be: -1 ',()=>{
        const giftIds = [1, 2, 3, 4]
        const firstRepeatedId = findFirstRepeated(giftIds);
        expect(firstRepeatedId).toBe(-1)
    });
    test('T3: [5, 1, 5, 1] =>  res should be: 5 ',()=>{
        const giftIds = [5, 1, 5, 1]
        const firstRepeatedId = findFirstRepeated(giftIds);
        expect(firstRepeatedId).toBe(5)
    });
});




