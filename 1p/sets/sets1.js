
var ary = [1, 1, 2, 3, 3, 4]


var miSet = new Set(ary)

console.log(miSet)

miSet.add(5)
miSet.add(3)
console.log(miSet)

for(let i of miSet){
    console.log(i)
}

var ws = new WeakSet([{a:1}, {b:2}])
console.log(ws)

var objeto1 = {c:3}
ws.add(objeto1)

var objeto2 = {d:4}
console.log(ws.has(objeto1)) //true
console.log(ws.has(objeto2)) //false