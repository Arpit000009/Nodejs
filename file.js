const fs = require("fs");
const os = require("os");

// //sync... Blocking
// fs.writeFileSync('./test.txt','hello world');

//async... Non-Blocking
// fs.writeFile("./test.txt","hello world async",(err) =>{});

// const result = fs.readFileSync("./contact.txt","utf-8");
// console.log(result);

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     } else{
//         console.log(result);
//     }
// })

// fs.appendFileSync("./test.txt", `${Date.now() } Hey There\n`);

// // fs.cpSync("./test.txt","./copy.txt");

// // fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./test.txt").isFile())

// fs.mkdirSync("my-docs/a/b",{recursive:true})

console.log(os.cpus().length);