async function heapSort() {
    for(let i = 0; i < lines.length - 1; ++i){
        for(let j = i + 1; j < lines.length; j++){
            if(lines[i] > lines[j]){
                states[i] = 1;
                states[j] = 0;
                await swap(lines, i, j);
                states[i] = -1;
                states[j] = -1;
            }
        }
    }
}