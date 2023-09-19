const { text } = require("node:stream/consumers");

function escreverNoConsole(){
    console.log("Primeiro exemplo - função normal")
}

escreverNoConsole();

const escreverNoConsoleVariacao= function(){
    console.log('Segundo Exemplo - Variação do modo normal')
}

escreverNoConsoleVariacao();

const escreverComArrow = ()=>{
    console.log('Terceira -Arrow Function')
}


escreverComArrow();

const escreverComArrowParametro=(texto)=>{
    console.log(texto);
}
escreverComArrowParametro('Quarto exemplo, usando parametro')
escreverComArrow();
escreverComArrowParametro('outro texto')

const somarDois =(numero1,numero2)=>{
    console.log('a soma e '+(numero1+numero2))
}
console.log('-------')
somarDois(10,10)


const varientesArrow = texto => console.log(texto)
varientesArrow('AAAAAAA')