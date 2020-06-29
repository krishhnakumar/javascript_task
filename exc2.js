const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {



var person = [{title:"javascript",price:500,
reades:[{name:"person1",count:300},{name:"person2",count:400}],
authorDetails:{name:"Raj",age:40}},{


title:"Nodejs",price:600,
reades:[],
authorDetails:{name:"Raj",age:40}}


];


console.log(person[0].authorDetails);


});



Output:
{ name: 'Raj', age: 40 }
Execution Time:
0.074s
Memory Used:
8304kb
