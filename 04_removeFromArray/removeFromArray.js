const removeFromArray = function(arr, ...args) {
    
    for(let i=0; i < args.length; i++){
    let indextoRemove = arr.indexOf(args[i])
    if(indextoRemove === -1){
        
        } else{
       arr.splice(indextoRemove, 1);
             
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
