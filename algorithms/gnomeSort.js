async function gnomeSort() {
    let i = 1;
    while(i < lines.length) {
        if(lines[i] >= lines[i - 1])
            i++;
        else {
            states[i] = 0;
            await swap(lines, i, i - 1);
            states[i] = -1;
            
            if(i > 1)
                i--;
            else
                i++;
        }
    }
}