var x = -1;
var n = 10;
var y = 2;
for (let i = 1; i <= n; i++){
    console.log(x);
    y *= -1;
    x += y;
    x *= -1;
}