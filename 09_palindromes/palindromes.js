const palindromes = function (str) {
    strM = str.replaceAll(/[.*+\-?^${}()!,]/g, '').replaceAll(' ', '').toLowerCase();
    if( strM === strM.split('').reverse().join('')){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
