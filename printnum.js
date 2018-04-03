function printNumbers(num1, num2) {
    for (var i = num1; i <= num2; i++) {
        console.log(i);
    }
 }
 
 printNumbers(1, 10)

//or

function printNumbers(num1, num2) {
    var i = num1;
     while (i <= num2) {
       console.log(i);
       i++;
     }
  }
  
  printNumbers(1, 10)