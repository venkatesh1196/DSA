const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const n = parseInt(input);
let result = [];
for(let i = 2; i<=n; i += 2){
    result.push(i)
}
    if(result.length == 0){
        console.log("-1");
    }else{
    console.log(result.join(" "));
    }

