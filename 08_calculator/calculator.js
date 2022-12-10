const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	if(arr.length == 0){
    return 0
  }
  else if(arr.length ==1){
    return arr[0]
  }
  else{
    let s = 0
    for( i = 0;i<arr.length;i++){
      s +=arr[i] 
    }
    return s
  }
};

const multiply = function(arr) {
  let s = 1
  for( i = 0;i<arr.length;i++){
    s *=arr[i] 
  }
  return s

};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(n) {
  if(n==0){
    return 1
  }
  else if(n==1){
    return 1
  }
  else{
    return n*factorial(n-1)
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
