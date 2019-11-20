async function selectionSort() {
    await checkIfAbort();
    await algorithmStarter();
    
    let minIndex;
    for(let i = 0; i < lines.length - 1; ++i){
        minIndex = i;
        for(let j = i; j < lines.length; ++j){
            if(abort){
                throw Error("Clicked another algorithm");
            }

            comparison++;
            if(lines[j] < lines[minIndex]){
                minIndex = j;
            }
        }
        states[minIndex] = 0;
        await swap(lines, minIndex, i);
        states[minIndex] = -1;
    }
    secondBool = false;
} 