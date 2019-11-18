async function quickSort(start, end) {
    closeMenus();
    comparison = 0;
    swapCounter = 0;
    time0 = Date.now();
    secondBool = true;
    
    await quickSortRecursive(0, lines.length - 1);
    secondBool = false;
}

async function quickSortRecursive(start, end) {
    let q;// index

    if (start >= end)
        return;
    q = await partition(start, end);
    states[q] = -1;

    await Promise.all([
        quickSortRecursive(start, q - 1),
        quickSortRecursive(q + 1, end)
    ]);
}

async function partition(start, end) {
    for (let k = start; k < end; k++) {
        states[k] = 1;
    }

    let x = lines[end]; // pivot value
    let i = start; // pivot index
    states[i] = 0;

    for (var j = start; j < end; ++j) {
        comparison++;
        if (lines[j] < x) {
            await swap(lines, j, i);
            states[i] = -1;
            i++;
            states[i] = 0;
        }
    }
    await swap(lines, i, end);

    for (let k = start; k < end; k++) {
        if (k != i) {
            states[k] = -1;
        }
    }

    return i;
}