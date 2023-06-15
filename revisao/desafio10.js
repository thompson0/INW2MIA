const leia = require("prompt-sync")();
let numero=0
let total=0

while(numero>=0){
    total += numero
    numero=parseInt(leia("Digite um numer'o"))
   
}
console.log("o total e "+total)

console.log ("fim do progama")
