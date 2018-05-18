let range = function(start, end) {
  if (end === start) {
    return [start];
  } else {
    let temp = range(start, end-1);
    temp.push(end);
    return temp;
  }
};

let sumRec = function(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let num = arr.pop();
    let result = num + sumRec(arr);
    return result;
  }
};