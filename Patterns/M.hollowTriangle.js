// //* method 0
// let fs = require('fs');
// let input = fs.readFileSync(0, 'utf8').trim();
// let n = Number(input);

// for(let i = 1; i <= n; i++){
//     let row = ""; 

//     for(let j = 1; j <= n-i; j++){
//         row += " ";
//     }

//     for(let j = 1; j <= i; j++){
//         if( j === 1 || j === i || i === n){
//             if(j === 1){
//                 row += "*";
//             } else {
//                 row += " *";
//             }
//         } else {
//             row += "  ";
//         }
//     }    
//     console.log(row);
// }

//* method 1 
// let fs = require('fs');
// let input = fs.readFileSync(0, 'utf8').trim();
// let n = Number(input);
// for(let i = 1; i <= n; i++){
//     let row = "";
//     // n-i spaces
//     for(let j = 1; j <= n-i; j++){
//         row += " ";
//     }
//     // i stars
//     for(let j = 1; j <= i; j++){
//         if(j == 1 || j == i || i == n){
//             if(j == i ){
//                  row += "*"; // last star — no trailing space
//             } else {
//                 row += "* ";
//             }
//         } else {
//             // middle — just space
//             row += "  ";// 2 spaces (star పోయింది, space రెట్టింపు)   
//         }
//     }
//         console.log(row);
// }



//* method 2
// let fs = require('fs');
// let input = fs.readFileSync(0, 'utf8').trim();
// let n = Number(input);
// for(let i = 1; i <= n; i++){
//     let row = "";
    
//     // leading spaces
//     for(let j = 1; j <= n-i; j++) row += " ";
    
//     if(i === 1){
//         row += "*";                    // single star
//     } else if(i === n){ // full bottom row
//         for(let j = 1; j <= i; j++){
//             if(j == i) {
//                 row += "*";
//             } else {
//                 row += "* ";
//             }
//         }   
//     } else {
//         row += "*";                    // first star
//         for(let j = 1; j <= (i-2)*2; j++) row += " ";  // middle gaps
//         row += " *";                   // last star
//     }
    
//     console.log(row);
// }

//* method 3

// let fs = require('fs');
// let input = fs.readFileSync(0, 'utf8').trim();
// let n = Number(input);

// for(let i = 1; i <= n; i++){
//     let row = "";

//     // Leading spaces
//     for(let j = 1; j <= n - i; j++){
//         row += " ";
//     }

//     for(let j = 1; j <= i; j++){
        
//         let isLast = (j == i);
//         let isBorder = (j == 1 || j == i);
//         let isBottom = (i == n);

//         if(isBorder || isBottom){
//             if(isLast){
//                 row += "*";      // trailing space వద్దు
//             } else {
//                 row += "*  ";    // star + 2 spaces
//             }
//         } else {
//             row += "   ";        // star లేదు — 3 spaces (gap)
//         }
//     }

//     console.log(row);
// }

