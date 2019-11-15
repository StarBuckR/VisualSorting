async function selectionSort() {
    let minIndex;
    for(let i = 0; i < lines.length - 1; ++i){
        minIndex = i;
        for(let j = i; j < lines.length; ++j){
            if(lines[j] < lines[minIndex]){
                minIndex = j;
            }
        }
        states[minIndex] = 0;
        await swap(lines, minIndex, i);
        states[minIndex] = -1;
    }
} 