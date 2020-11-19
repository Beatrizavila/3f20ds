
var objeto = {} 
var miMap = new Map() 


var keyObj1 = {}
var keyObj2 = {b:2}


objeto[keyObj1] = 'a'
objeto[keyObj2] = 'b'

miMap.set(keyObj1, 'a')
miMap.set(keyObj2, 'b')

console.log(objeto) 
console.log(miMap) 

miMap.set(keyObj1, 'c')
console.log(miMap) 


miMap.delete(keyObj1)
console.log(miMap) 

var keyObj3 = {c:3}
var keyObj4 = {d:4}
miMap.set(keyObj3, 'c')
miMap.set(keyObj4, 'd')



for(let key of miMap.keys()){ 
    console.log(key)
}

for(let value of miMap.values()){ 
    console.log(value)
}


var wMap = new WeakMap() 


wMap.set(keyObj1, 'a')
wMap.set(keyObj2, 'b')
wMap.set(keyObj3, 'c')

console.log(wMap.get(keyObj2)) // b