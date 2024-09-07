'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let maxSum = ''
    for (let step1 = 0; step1 < arr.length-2; step1++){
        for (let step2 = 0; step2 < arr.length-2; step2++){
            const currentSum = arr[step1][step2] + arr[step1][step2+1] 
         + arr[step1][step2+2] + arr[step1+1][step2+1] 
         + arr[step1+2][step2] + arr[step1+2][step2+1] 
         + arr[step1+2][step2+2]

            if(currentSum <= 0){
               const temp = currentSum
               if (typeof maxSum == 'string' ){
                   maxSum = temp
               } else if(temp == 0 && maxSum <= 0){
                   maxSum = temp
               }
                else if(temp > maxSum){
                   maxSum = temp
               }
            } else if(currentSum > maxSum){
                maxSum = currentSum
            } 
        }
    }
    return maxSum
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
