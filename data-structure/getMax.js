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
 * Complete the 'getMax' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */

function getMax(operations) {
    const mainStack = [];
    const maxStack = [];
    const maxValues = [];

    for (const operation of operations) {
        const [command, value] = operation.split(' ');

        if (command === '1') {
            const num = parseInt(value);
            mainStack.push(num);

            if (maxStack.length === 0 || num >= maxStack[maxStack.length - 1]) {
                maxStack.push(num);
            }
        } else if (command === '2') {
            const popped = mainStack.pop();
            if (popped === maxStack[maxStack.length - 1]) {
                maxStack.pop();
            }
        } else if (command === '3') {
            maxValues.push(maxStack[maxStack.length - 1]);
        }
    }

    return maxValues;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let ops = [];

    for (let i = 0; i < n; i++) {
        const opsItem = readLine();
        ops.push(opsItem);
    }

    const res = getMax(ops);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
