var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Valor de n: ' , (nn) => {
        n = parseInt(nn)
        var signo="-";
        var frase="Ln2 =";
        var a=0;
        var resultado=0
        for (let i = 1; i <=n; i++) {
            var d= 1/i;
            
            if (signo=="+") {
                signo="-";
            }else{
                signo="+";
            }
            frase+=signo;
            frase+=d;

            if(i===1){
                resultado=a=d
            }else if (i%2===0) {
                resultado= a-d
                a=resultado
            }else{
                resultado= a+d
                a=resultado
            }

        }
        console.log(frase);
        console.log("Resultado: "+resultado);
        rl.close();
    
})