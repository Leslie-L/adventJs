import { describe,expect,test } from "@jest/globals"

function adjustLights(lights:string[]) {
    // Code here
    const item = lights[0]
    let res = 0;
    let res2 = 0;
    lights.forEach((actual,index)=>{
        if(index%2===0 && actual !== item){
            res++
        }else if(index%2===1 && actual === item){
            res++
        }
        if(index%2===0 && actual === item){
            res2++
        }else if(index%2===1 && actual !== item){
            res2++
        }
    })
   
      
    return res<res2?res:res2
}
  
describe('Exercise 9, check how many lights have to change',()=>{
    test("T1:['🟢', '🔴', '🟢', '🟢', '🟢']",()=>{
        const tst = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']);
        expect(tst).toBe(1)
    })
    test("T2:['🔴', '🔴', '🟢', '🔴', '🟢']",()=>{
        const tst = adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']);
        expect(tst).toBe(1)
    })
    test("T3:['🔴', '🔴', '🟢', '🟢', '🔴']",()=>{
        const tst = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']);
        expect(tst).toBe(2)
    })
    test("T4:['🟢', '🔴', '🟢', '🔴', '🟢']",()=>{
        const tst = adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']);
        expect(tst).toBe(0)
    })
    test("T5:['🔴', '🔴', '🔴']",()=>{
        const tst = adjustLights(['🔴', '🔴', '🔴']);
        expect(tst).toBe(1)
    })
    test("T6:['🟢','🔴','🔴','🟢']",()=>{
        const tst = adjustLights(['🟢','🔴','🔴','🟢']);
        expect(tst).toBe(2)
    })
    test("T7:['🔴', '🔴', '🔴','🟢','🔴']",()=>{
        const tst = adjustLights(['🔴', '🔴', '🔴','🟢','🔴']);
        expect(tst).toBe(1)
    })
})





