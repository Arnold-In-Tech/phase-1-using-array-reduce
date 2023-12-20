const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// totalBatteries, which holds the sum of all of the battery amounts in 
// the batteryBatches array.

const totalBatteries = batteryBatches.reduce(function(accumulator, element){
    return accumulator + element;
}, 0)    // initial value (start value) for our accumulator variable is set to zero

