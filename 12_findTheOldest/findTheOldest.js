const findTheOldest = function(people) {
    let oldestPerson;
    let oldestAge;
    for (let i = 0; i < people.length; i++) {
        //Get the age
        let age;
        if (people[i]["yearOfDeath"]) {
            age = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
        }
        else {
            const currentYear = new Date().getFullYear();
            age = currentYear - people[i]["yearOfBirth"];
        }

        //Check if it's the oldest age
        if (!(oldestAge) || oldestAge < age) {
            oldestPerson = people[i];
            oldestAge = age;
        }
    }

    //Return the oldest person's name
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
