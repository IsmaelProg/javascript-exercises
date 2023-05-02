const repeatString = function(str, num) {
    salida = ''
    if(num < 0){
        salida = 'ERROR';
    }else{
    for (i = 0; i < num; i++){
       salida += str;
    }
    }
return salida
};

// Do not edit below this line
module.exports = repeatString;
