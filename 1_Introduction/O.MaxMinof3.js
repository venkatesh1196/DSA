const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').split(/\s+/);
const x = parseInt(input[0]);
const y = parseInt(input[1]);
const z = parseInt(input[2]);
if(x <= y && x <= z){
    if(y < z)
    console.log(`Min = ${x} \n Max = ${z}`);
    else
    console.log(`Min = ${x} \n Max = ${y}`);
} else if(y <= x && y <= z){
    if(x < z)
    console.log(`Min = ${y} \n Max = ${z}`);
    else
    console.log(`Min = ${y} \n Max = ${x}`);
}else if(z <= x && z <= y){
    if(x < y)
    console.log(`Min = ${z} \n Max = ${y}`);
    else
    console.log(`Min = ${z} \n Max = ${x}`);
}