const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').split(/\s+/);
const x = parseInt(input[0]);
const y = parseInt(input[1]);
if(x < y){
    console.log(`Min = ${x} \n Max = ${y}`);
}else{
    console.log(`Min = ${y} \n Max = ${x}`);

}