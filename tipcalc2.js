/* Write a function totalAmount that takes the same arguments as tipAmount except it returns 
the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

> totalAmount(100, 'good')
120
> totalAmount(40, 'fair')
46
*/

function totalAmount(billAmount, serviceLevel) {
    if (serviceLevel === "good") {
        return billAmount * 1.2;
    }
    else if (serviceLevel === "fair") {
        return billAmount * 1.15;
    }
    else if (serivceLevel === "bad") {
        return billAmount * 1.10;
    }
}

console.log(totalAmount(100, "good"));
console.log(totalAmount(40, 'fair'));