Array.prototype.own_forEach = function(func){
  for(let i = 0; i < this.length; i++){
      func(this[i]);
  }  
};


Array.prototype.our_map = function(func){
  let result = [];
  
  for(let i = 0; i < this.length; i++){
      result.push(func(this[i]));
  }  
return result; 
};


Array.prototype.own_reduce = function(func,val){
  let result;
    if (val == null){
      result = this[0];
    
      
    } 
    else{
      result = val;
      
    } 
    let index;
    index = (val == null) ?  1 : 0;
    
    for (;index < this.length; index++){
      result = func(result, this[index]);
    }
    
    return result;
};


const func = function(arg1, arg2) {
  return arg1 + arg2;
};
