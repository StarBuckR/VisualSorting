async function gnomeSort() {
    closeMenus();
    comparison = 0;
    swapCounter = 0;
    time0 = Date.now();
    secondBool = true;
    
    let i = 1;
    while(i < lines.length) {
        comparison++;
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
    secondBool = false;
}