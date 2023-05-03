const getTheTitles = function(obj) {
    newArr = [];
    for (let i = 0; i < obj.length; i++){
        newArr.push(obj[i].title)
    }
   return newArr; 
};

// Do not edit below this line
module.exports = getTheTitles;
