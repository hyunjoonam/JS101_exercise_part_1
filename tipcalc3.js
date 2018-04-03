/* Write a function splitAmount that takes the bill amount and the level of service, 
and the number of people to split the bill between. It will return the final amount for each person.

> splitAmount(100, 'good', 5)
24
> splitAmount(40, 'fair', 2)
23
*/

function splitAmount(billAmount, serviceLevel, numOfPeop) {
    if (serviceLevel === "good") {
        return billAmount * 1.2 / numOfPeop;
    }
    else if (serviceLevel === "fair") {
        return billAmount * 1.15 / numOfPeop;
    }
    else if (serivceLevel === "bad") {
        return billAmount * 1.10 / numOfPeop;
    }
}

console.log(splitAmount(100, "good", 5));
console.log(splitAmount(40, 'fair', 2));