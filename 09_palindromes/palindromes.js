const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replaceAll(' ','');
    string = string.replaceAll('!','');
    string = string.replaceAll('.','');
    string = string.replaceAll(',','');
    reverseString = string.split('')
    reverseString = reverseString.reverse()
    reverseString = reverseString.join('')

    if(string == reverseString){
        return true
    }else{
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
