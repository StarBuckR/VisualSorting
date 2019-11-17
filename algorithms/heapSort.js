async function heapSort() {
    comparison = 0;
    swapCounter = 0;
    time0 = Date.now();
    secondBool = true;
    
    for(let i = 0; i < lines.length - 1; ++i) {
        for(let j = i + 1; j < lines.length; j++) {
            comparison++;
            if(lines[i] > lines[j]){
                states[i] = 1;
                states[j] = 0;
                await swap(lines, j, i);
                states[i] = -1;
                states[j] = -1;
            }
        }
    }
    secondBool = false;
}