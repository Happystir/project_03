const fs = require('fs')
const path = require('path')


// console.log(__dirname)

let pathstr=path.join(__dirname,'/1.txt')
// console.log(pathstr)
// console.log(path.basename(pathstr))
console.log(path.extname(pathstr))


// let doc

// 

// fs.writeFile('./1.txt','ahahah',function(error){
//     if(error)
//     {
//         console.log(error)
//     }
//     else {
//         console.log('写入成功')
//     }
// })
    // console.log(error)
    // console.log(doc)

// console.log("hello node.js")