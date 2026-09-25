function fibonacciGenerator (n) {
    let output = [];
    if (n === 1) {
        output.push(0);
        
    } else if (n === 2) {
        output.push(0, 1);
       
    } else {
        output = [0, 1];
       
        
        

        while (output.length < n ) {
            
            let result = output[output.length - 1] + output[output.length - 2];
            
            output.push(result);
        }
    }
    

    

    
    return output;
}