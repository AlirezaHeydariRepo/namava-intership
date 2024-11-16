function pickingNumbers(a) {
    let frequency = new Array(100).fill(0);

    for (let i = 0; i < a.length; i++) {
        frequency[a[i]]++;
    }

    let maxLength = 0;
    for (let i = 1; i < frequency.length; i++) {
        maxLength = Math.max(maxLength, frequency[i] + frequency[i - 1]);
    }
    return maxLength;
}