const sumAll = function(num1,num2) {
    if(typeof num1 !='number'|| typeof num2 != 'number'){
        return "ERROR"
    }
    else if(num1 <0 || num2< 0){
        return "ERROR"
    }
    if(num1 > num2){
        let temp = num1;
        num1=num2;
        num2=temp;
    }
    let s = 0
    for(i=num1;i<=num2;i++){
        s +=i
    }
    return s
};

// Do not edit below this line
module.exports = sumAll;
