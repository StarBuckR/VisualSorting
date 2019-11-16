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
        lines[j + 1] = pivot;
    }
}