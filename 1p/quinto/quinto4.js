var num1 = 0;
var num2 = 1;
var n = 5;
var sigNum;
for (let i = 1; i <= n; i++){
    sigNum = num1;
    num1 = num1 + num2;
    num2 = sigNum;
}
console.log(sigNum);