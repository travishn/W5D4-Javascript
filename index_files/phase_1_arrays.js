Array.prototype.uniq = function(){
  let result = [];
  
  this.forEach(el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};


Array.prototype.twoSum = function(){
  let pairs = []; 
  
  for(let i = 0; i<this.length; i++){
    for(let j = 0; j<this.length; j++){
        if (j <= i) {
          continue;
        }
        
        else if (this[i] + this[j] === 0) {
          pairs.push([i, j]);
        }
    }
  }
  
  return pairs;
};

Array.prototype.transpose = function(){
  let result = new Array(this.length);
  
  for (let i = 0; i < this.length; i++) {
    result[i] = new Array(this.length);
  }
  
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++){
      result[j].push(this[i][j]);
    }
  }
  return result;
};


