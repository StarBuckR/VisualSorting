async function insertionSort() {
    let i, pivot, j;
    for(i = 1; i < lines.length; ++i) {
        pivot = lines[i];
        j = i - 1;

        while(j >= 0 && lines[j] > pivot) {
            states[i] = 1;
            states[j + 1] = 0;
            await swap(lines, j + 1, j);
            states[j + 1] = -1;
            j--;
        }
        //await swap(lines, j + 1, i);
        lines[j + 1] = pivot;
    }
}
/*
async function insertionSort() {
    let index = 0, temp;
    while(index < lines.length) {
        if(index == 0)
            index++;
        if(lines[index] >= lines[index - 1]){
            states[index] = 0;
            temp = index++;
        } else {
            states[index] = 1;
            await swap(lines, index, index - 1);
            states[index] = -1;
            index--;
        }
    }
}*/
