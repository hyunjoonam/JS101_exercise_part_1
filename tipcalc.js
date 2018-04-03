/*Write a function tipAmount that is given the bill amount and the level of service 
(one of good, fair and poor) and returns the dollar amount for the tip. Based on:
good -> 20%
fair -> 15%
bad -> 10%
> tipAmount(100, 'good')
20
> tipAmount(40, 'fair')
6 */

function tipAmount(billAmount, serviceLevel) {
    if (serviceLevel === "good") {
        return billAmount * 0.2;
    }
    else if (serviceLevel === "fair") {
        return billAmount * 0.15;
    }
    else if (serivceLevel === "bad") {
        return billAmount * 0.10;
    }
}

tipAmount(100, "good");
tipAmount(40, 'fair');


/*
function tipAmount(tipAmount, serviceType) {
    // tipAmount is an integer/float value for a bill
    // serviceType is a string, either "bad", "fair", "good"

    //if serviceType is bad, return 10 % of tipAmount
    //if serviceType is fair, return 15 % of tipAmount
    //if serviceType is good, return 20 % of tipAmount

    if (serviceType == "bad") {
        return 0.1 * tipAmount;
    } else if (serviceType == "fair") {
        return 0.15 * tipAmount;
    } else if (serviceType == "good") {
        return 0.2 * tipAmount
    } 
}

var tip = tipAmount(100, "bad");
console.log(tip);
