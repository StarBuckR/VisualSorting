async function bubbleSort() {
    for (let i = 0; i < lines.length - 1; ++i) {
        for (let j = 0; j < lines.length - i - 1; ++j) {
            if (lines[j] > lines[j + 1]) {
                await swapBubble(lines, j, j + 1);
                // code below is just for better visualization
                states[j + 1] = 0;
                await sleep(50);
                states[j + 1] = -1
                /////////////////////
            }
        }
    }
}

async function swapBubble(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }