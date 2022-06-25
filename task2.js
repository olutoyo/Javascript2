var operator = prompt(
  "Please enter the operator you want to perform(e.g +,-,/,*,%)"
);
//if (operator != '+' || '-' || '/' || '*' || '%' ) {
//alert('Enter a correct operator')
//}
let number1 = prompt("Please enter the first number");
let number2 = prompt("Please enter the second number");

if (operator == "+") {
  var result = +number1 + +number2;
} else if (operator == "-") {
  var result = +number1 - +number2;
} else if (operator == "/") {
  var result = +number1 / +number2;
} else if (operator == "*") {
  var result = +number1 * +number2;
} else if (operator == "%") {
  var result = +number1 % +number2;
} else {
  alert("Enter a correct operator");
}

alert("Your result is  " + result);
