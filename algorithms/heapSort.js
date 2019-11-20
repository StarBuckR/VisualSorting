async function heapSort() {
    await checkIfAbort();
    await algorithmStarter();

    for (var i = lines.length / 2 - 1; i >= 0; i--) 
        await heapify(lines, lines.length, i);
    
        for (var i = lines.length - 1; i >= 0; i--) { 
            if(abort){
                throw Error("Clicked another algorithm");
            }
            // Move current root to end
            states[i] = 0;
            await swap(lines, 0, i); 
            states[i] = -1
      
            // call max heapify on the reduced heap 
            await heapify(lines, i, 0); 
        } 

    secondBool = false;
}

async function heapify(lines, n, i) 
{ 
    if(abort){
        throw Error("Clicked another algorithm");
    }
    comparison++;
    var largest = i; // Initialize largest as root 
    var l = 2 * i + 1; // left = 2*i + 1 
    var r = 2 * i + 2; // right = 2*i + 2 
  
    // If left child is larger than root 
    if (l < n && lines[l] > lines[largest]) 
        largest = l; 
  
    // If right child is larger than largest so far 
    if (r < n && lines[r] > lines[largest]) 
        largest = r; 
  
    // If largest is not root 
    if (largest != i) { 
        states[largest] = 1;
        states[i] = 0;
        await swap(lines, i, largest);
        states[largest] = -1
        states[i] = -1;
  
        // Recursively heapify the affected sub-tree 
        await heapify(lines, n, largest); 
    } 
}