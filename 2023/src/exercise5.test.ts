import { describe,expect,test } from "@jest/globals";
function cyberReindeer(road, time) {
 
    const res:string[] = []
    res.push(road)
    let needX='.';
    for (let i = 0; i < time-1; i++) {
       let actualPath = res[i].split('');
       const indexS = actualPath.indexOf('S');
       
       if(i==4){
            actualPath = actualPath.map(item=>item=='|'?'*':item)
       }
       if(actualPath[indexS+1]==='|'){
            res.push(actualPath.join(''))
            continue;
       }
       if(actualPath[indexS+1]==='*'){
            actualPath[indexS]=needX
            actualPath[indexS+1]='S'
            needX='*';
       }
       if(actualPath[indexS+1]==='.'){
            actualPath[indexS]=needX
            needX='.'
            actualPath[indexS+1]='S'
       }
       res.push(actualPath.join(''))
    }
    return res
}
describe('Exercise 5: create all the path',()=>{
    test('T1',()=>{
        const road = 'S..|...|..'
        const time = 10 // units of time
        const result = cyberReindeer(road, time)
        const res= [
            "S..|...|..",
            ".S.|...|..",
            "..S|...|..",
            "..S|...|..",
            "..S|...|..",
            "...S...*..",
            "...*S..*..",
            "...*.S.*..",
            "...*..S*..",
            "...*...S.."
          ]
          
          expect(result).toEqual(expect.arrayContaining(res))
    })
})


