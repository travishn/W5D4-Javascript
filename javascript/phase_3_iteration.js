let bubbleSort = function(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if ((j + 1) < arr.length && arr[j] > arr[j+1] ){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }

    }
  }
  return arr;
};

let substrings = function(str) {
  let result = [];
  let k = 0;
  
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      let temp = str.slice(j, k+j+1);
      
      if (!result.includes(temp) && temp != ""){
          result.push(temp);
      } 
      // result.push(temp);
    
    }
    
    k++;
  }
  
  return result;
};