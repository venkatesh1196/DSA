let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let marks = Number(input);
if(marks > 90){
    console.log("Excellent");
} 
else if(90 <= marks || 80 < marks){
    console.log("Good");
} 
else if(80 <= marks || 70 < marks){
    console.log("Fair");
}
else if(70 <= marks ||60 < marks){
    console.log("Meets Expectations");
} 
else {
    console.log("Below Par");
}
