import { describe, expect,test } from "@jest/globals"
function organizeGifts(gifts:string) {
    const numbers:number[]=[]
    const letters:string[]=[]
    let cont = 0;
    for (let i = 0; i < gifts.length; i++) {
        const isLetter = gifts.charCodeAt(i);
        if(isLetter>=97 && isLetter<= 122) {
            const num = parseInt(gifts.substring(cont,i))
            numbers.push(num)
            letters.push(gifts[i])
            cont=i+1
        }
    }
    
    const res = letters.map((item,index)=>{
        const quantity = numbers[index];
        //pales
        const pales = Math.floor((quantity/10)/5)
        //cajas
        const box = Math.floor(quantity/10)- 5*Math.floor((quantity/10)/5)
        const unique = quantity%10 
        let temRes = '';
        if(pales>0)
        temRes= temRes.concat(`[${item}]`.repeat(pales))
        if(box>0)
        temRes= temRes.concat(`{${item}}`.repeat(box))
        if(unique>0)
        temRes= temRes.concat(`(${item.repeat(unique)})`)
        return temRes
    })
   
    const stringFinal = res.join('')
    return stringFinal
}

describe('Exercise 8 :',()=>{
    test('T1:',()=>{
        const result1 = organizeGifts('76a11b')
        expect(result1).toBe('[a]{a}{a}(aaaaaa){b}(b)')
    })
})