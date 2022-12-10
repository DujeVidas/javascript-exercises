const findTheOldest = function(people) {
    const timetoday =  new Date().getFullYear()

    let ages = []
    people.forEach(element => {
        if(!element.yearOfDeath){
            ages.push(timetoday-element.yearOfBirth)
        }else{
            ages.push(element.yearOfDeath-element.yearOfBirth)
        }
    });
    oldest = Math.max(...ages)
    oldestIndex = ages.indexOf(oldest)

    return people[oldestIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
