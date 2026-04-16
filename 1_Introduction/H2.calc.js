// const fs = require('fs');
// const input = fs.readFileSync(0,'utf8').split(/\s+/);
// const N = parseInt(input[0]);
// const M = parseInt(input[1]);
// console.log(`${N} + ${M} = ${N+M}\n`)
// console.log(`${N} - ${M} = ${N-M}\n`)
// console.log(`${N} * ${M} = ${N*M}\n`)
// console.log(`${N} / ${M} = ${Math.floor(N/M)}\n`)
// console.log(`${N} % ${M} = ${N%M}`)

// //* Standard JavaScript numbers follow the IEEE 754 double-precision format,
// //*  which has a "Safe Integer" limit of $2^{53} - 1$ (9,007,199,254,740,991).
// //* Your result is roughly $4.8 \times 10^{17}$, which is larger than the safe limit.
// //* Once you cross this limit, JavaScript loses precision and rounds the last few digits,
// //* leading to the "Wrong Answer" verdict.
// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf8').split(/\s+/);

// // Convert inputs to BigInt
// const N = BigInt(input[0]);
// const M = BigInt(input[1]);

// // Note: BigInts require explicit string conversion or template literals
// console.log(`${N} + ${M} = ${N + M}\n`);
// console.log(`${N} - ${M} = ${N - M}\n`);
// console.log(`${N} * ${M} = ${N * M}\n`);
// console.log(`${N} / ${M} = ${N / M}\n`); // BigInt division floors automatically
// console.log(`${N} % ${M} = ${N % M}`);

