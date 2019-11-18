async function bubbleSort() {
    await algorithmStarter();
    
    for (let i = 0; i < lines.length - 1; ++i) {
        for (let j = 0; j < lines.length - i - 1; ++j) {
            comparison++;
            if (lines[j] > lines[j + 1]) {
                states[j] = 0;
                await swap(lines, j, j + 1);
                states[j] = -1
            }
        }
    }
    secondBool = false;
}