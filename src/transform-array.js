const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error();
  let newArr = arr.reduce((total, item, index) => {
    if(item === '--discard-next'||
    item === '--discard-prev'||
    item === '--double-next'||
    item === '--double-prev'){
      return total;
   } 
    
    if(arr[index-1] === '--discard-next'){
      return total;
    }
    if(arr[index-1] === '--double-next'){
      total.push(item, item);
    }else{
      total.push(item);
    }
    if(arr[index+1] === '--discard-prev'){
      total.splice(total.length-1, 1);
    }
    if(arr[index+1] === '--double-prev'){
      total.push(item);
    }
    return total;
  },[]);
  return newArr;
};
