Array.prototype.own_forEach = function(func){
  let result = [];
  
  for(i = 0; i < this.length; i++){
      result.push(func(this[i]));
  }  
return result; 
};