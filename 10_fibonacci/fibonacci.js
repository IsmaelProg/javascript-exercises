const fibonacci = function(num) {
    if(num < 0){
        return 'OOPS'
    }else{
    
    fArr = [1, 1]; 
    for(let i = 1; fArr.length < num; i++){
        let newNum = fArr[i] + fArr[i - 1];
        fArr.push(newNum)
    }
    return fArr[fArr.length - 1]
}
};

// Do not edit below this line
module.exports = fibonacci;
