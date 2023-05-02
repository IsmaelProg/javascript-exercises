const sumAll = function(min, max) {
    let sum = 0;
    if(typeof min !== 'number' || typeof max !== 'number'){
        return 'ERROR'
    }else if(min >= 0 && max >= 0){
        if(max > min){
            for(let i = min; i <= max; i++){
                sum += i;
            }  
            }else if(max < min){
            for(let i = max; i <= min; i++){
                sum += i;
            } 
            }
    } else{
        return 'ERROR'
        
    }
    
    
    return sum
};

// Do not edit below this line
module.exports = sumAll;
