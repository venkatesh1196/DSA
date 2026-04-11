const fs = require('fs');
const input = fs.readFileSync(0, 'utf8');
const marks = parseInt(input);
if(marks >= 0 && marks <= 100){
    if(marks >= 35){
        console.log("Pass");
    }
    else{
        console.log("Fail");
    }
}