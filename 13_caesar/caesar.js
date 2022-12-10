const caesar = function(string, s) {

    function ascii (a) { return a.charCodeAt(0)}
    function charachter (a) { return String.fromCharCode(a)}
    let arr = []
    for(i=0;i<string.length;i++){
        let asc = ascii(string[i])
        let shift = s
        if(asc>=65 && asc<=90){
            
            if(shift > 0){

                while(shift>0){
                    if(asc==90){
                        asc=65
                    }else{
                        asc += 1
                        
                    }
                    shift -= 1
                }
                
            }
            else if(shift < 0){

                while(shift<0){
                    if(asc==65){
                        asc=90
                    }else{
                        asc -= 1
                        
                    }
                    shift += 1
                }
                
            }
            
        }

        else if(asc>=97 && asc<=122){
            if(shift > 0){
                
                while(shift>0){
                    if(asc==122){
                        asc=97
                    }else{
                        asc += 1
                        
                    }
                    shift -= 1
                }
                
            }
            else if(shift < 0){

                while(shift<0){
                    if(asc==97){
                        asc=122
                    }else{
                        asc -= 1
                        
                    }
                    shift += 1
                }
                
            }
            
        }

        arr.push(asc)
    }

    for(i=0;i<arr.length;i++){
        arr[i] = charachter(arr[i])
    }
    newString = arr.join('')
    return newString
};

// Do not edit below this line
module.exports = caesar;
