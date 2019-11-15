async function bubblesort() {
    background(150);
    
    for (let i = 0; i < lines.length - 1; ++i) {
        for (let j = 0; j < lines.length - i - 1; ++j) {
            if (lines[j] > lines[j + 1]){
                await swap(lines, j, j + 1);
                // code below is just for
                states[j + 1] = 0;
                await sleep(1);
                states[j + 1] = -1
            }
        }
    }
}