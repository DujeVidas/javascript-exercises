const removeFromArray = function(arr,...zaMaknut) {
    let newArr = []

    for(i=0;i<arr.length;i++){
        let isEqual = false
        for(j=0;j<zaMaknut.length;j++){
            if(arr[i] === zaMaknut[j]){
                isEqual = true
            }
        }
        if(isEqual == false){
            newArr.push(arr[i])
        }
        
    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
