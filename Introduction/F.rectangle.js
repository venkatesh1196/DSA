const fs = require('fs');
let input = fs.readFileSync(0, 'utf8').split(/\s+/);
let length = parseInt(input[0]);
let breadth = parseInt(input[1]); 
if(!isNaN(length) && !isNaN(breadth)){
    let area = length * breadth;
    let perimeter = 2 * (length + breadth);
    console.log('Area =',area);
    console.log('Perimeter =',perimeter);
}