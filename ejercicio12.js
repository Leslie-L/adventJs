/*function selectSleigh(distance, sleighs) {
    const wattsMax = 20;
      const map1  = sleighs.map(item => {
          const consums = item.consumption * distance;
          return {
              ...item,
              consums
          }
      });
      
      const res = map1.findLast(item => item.consums <= wattsMax);
     
      return res.name;
  }*/

const distance = 30
const sleighs = [
  { name: "Gorusuke", consumption: 0.3 },
  { name: "Madeval", consumption: 0.5 },
  { name: "Lolivier", consumption: 0.7 },
  { name: "Hyuuh", consumption: 1 }
]

console.log(selectSleigh(distance, sleighs)) // => "Madeval"