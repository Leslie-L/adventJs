function getFilesToBackup(lastBackup, changes) {
    const needUpdate = changes.filter(item => {
        if(item[1] > lastBackup)
            return true
    })
    const res = [];
    
    needUpdate.map(item => {
        const isIncluded = !res.includes(item[0]);
        if(isIncluded)
            res.push(item[0])

    })
    
    res.sort((a,b)=>a-b)

    
    return res;
}

const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

console.log(getFilesToBackup(1556300600, [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
  ]))
console.log(getFilesToBackup(lastBackup, changes)) // => [ 1, 3 ]