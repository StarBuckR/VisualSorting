async function shellSort() {
    await algorithmStarter();

    for(let gap = lines.length / 2; gap > 0; gap /= 2) {
        for(let i = gap; i < lines.length; i++) {
            let temp = lines[i];
            states[i] = 1;
            let j;

            for(j = i; j >= gap && lines[j - gap] > temp; j -= gap){
                states[j] = 0;
                await swap(lines, j, j - gap)
                states[j] = -1;
            }
            states[i] = -1;
            lines[j] = temp;
        }
    }

    secondBool = false;
}
