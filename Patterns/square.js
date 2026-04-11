let fs = require('fs');
let n = (fs.readFileSync(0, 'utf8').trim().split(/\s+/));
let result = "";
for(let i = 1; i <= n ; i++){
    for(let j = 1; j <= n; j++){
        result += "*" 
    }
    console.log(result);
    result = ""
}