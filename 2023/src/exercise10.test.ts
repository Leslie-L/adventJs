import { describe,expect,test } from "@jest/globals"

function createChristmasTree(ornaments:string, height:number) {
    const characters = ornaments.split('')
    let res = ''
    let numCharacters = 0;
    for (let i = 1; i <= height; i++) {//niveles
        
        let control = 0;
        let spaces = height - i;
        let temString = ' '.repeat(spaces)
        while (control< i ) {
            if(control+1===i){
                temString=temString+ characters[numCharacters]
            }else{
                temString=temString+ characters[numCharacters]+' '
            }
            
            control++;
            numCharacters++;
            numCharacters= numCharacters === characters.length  ? 0 : numCharacters;
            
        }

        
        res= res + temString +'\n';
    }
    return res+' '.repeat(height-1) + '|' + '\n';

}
describe('string tree',()=>{
    test('Test 123 and 4 height',()=>{
        const res = createChristmasTree('123',4);
        console.log(res)
        const  tree= `   1
  2 3
 1 2 3
1 2 3 1
   |
`;
        expect(res).toBe(tree)
    })
})

/*
string "123" and the number 4 
   1   
  2 3
 1 2 3
1 2 3 1
   |

1 2 3 1


string *@o and the number 3
  *
 @ o
* @ o
  |
  */

