
function transformTree(tree) {
    if(tree.length===0) return null
    const node = {
        value: tree[0],
        left: null,
        right:null
    }
    const queque =[node]
    const index= [0]
    
    for (let i = 1; i < tree.length; i++) {
        const left = 2*index[0] + 1
        const right = 2*index[0]+ 2
        
        if(left!==i  && right !== i )
         continue;

       index.shift()
        const parent = queque.shift()
        
        if(tree[i]!==null && left===i){
            const node = {
                value: tree[i],
                left: null,
                right:null
            }
            parent.left = node;
            queque.push(node)
            index.push(i)
        }
        i++;
        if(i<tree.length && tree[i]!==null && right === i){
            const node = {
                value: tree[i],
                left: null,
                right:null
            }
            parent.right= node;
            queque.push(node)
            index.push(i)
        }
        
    }
   
    return node
  }