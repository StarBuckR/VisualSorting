async function gnomeSort() {
    await checkIfAbort();
    await algorithmStarter();
    
    let i = 1;
    while(i < lines.length) {
        if(abort){
            throw Error("Clicked another algorithm");
        }

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