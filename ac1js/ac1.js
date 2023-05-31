class eletro 
{
    constructor(id, descricao, estoque, ativo,preco,marca,cor) 
    {
      this.id = id;
  
      this.descricao = descricao;
  
      this.estoque = estoque;
  
      this.ativo = ativo;
      
      this.preco = preco;
      
      this.marca=marca

      this.cor = cor
    }

    ativar() {
      this.ativo = true;
    }
    
    AdicionarNoEstoque(valor) 
    {

        if (this.ativo) {
          if (valor <= 0) {
            console.log("Impossível realizar valor não positivo...");
          } else {
            this.estoque += valor;
          }
        } else {
          console.log("Conta está inativa...");
        }
    }
    
    RetirarDoEstoque(valor) 
    {
        if (this.ativo) 
        {
          if (valor <= 0) {
            console.log("Impossível realizar valor não positivo...");
          }  else {
            this.estoque -= valor;
          }
          
        }
        else {
          console.log("Conta está inativa...");
        }
    }
}

    
const leia = require("prompt-sync")();
let valor= 0
continuar = leia("Deseja fazer a compra? (S/N)").toUpperCase();
  while(continuar=="S"){
    let continuar = leia(
        "Deseja fazer compras? (S/N): ").toUpperCase();
      
    
        let id = leia("Qual o id do produto?")
    
        let descricao = leia("qual a descricao do produto?")
    
        let marca = leia("qual a marca do produto?")
    
        let cor = leia("qual a cor do produto?")
    
  
    let p1 = new eletro(id, descricao, 10 , false,preco,marca,cor);

    for (let x = 1; x <= 5; x++) {
        console.log("Movimento " + x);
        let preco = parseInt(leia("qual o preço do produto?"))

         valor = parseInt(leia("quanto produtos voce tem?"))

        console.log("Quantidade de estoque: " + p1.estoque );

        p1.RetirarDoEstoque(valor)

        let quantidade=(valor+p1.preco)

        console.log("preço a pagar"+quantidade)
      }
         valor = parseInt(leia("qual a quantidade de produtos que deseja incluir?"))

    console.log(p1);

    p1.incluirEstoque(valor)

    console.log(p1);
    continuar = leia("Deseja fazer a compra? (S/N)").toUpperCase();
}


console.log("ate a proxima")
