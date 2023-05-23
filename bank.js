class Conta {

    constructor(numero, cpf, saldo, ativo) {

        this.numero = numero;

        this.cpf = cpf;

        this.saldo = saldo;

        this.ativo = ativo

    }



    ativar() {

        this.ativo = true

    }



    credito(valor) {

        if (this.ativo) {

            if (valor < 0) {

                console.log("Impossível realizar valor negativo...")

            }

            else if (valor == 0) {

                console.log("Impossível realizar valor zerado...")

            }

            else {

                this.saldo = this.saldo + valor

            }

        }

        else {

            console.log("Conta está inativa...")

        }


    }

    debito(valor) {

        if (this.ativo) {

            if (valor < 0) {

                console.log("Impossível realizar valor negativo...")

            }

            else if (valor == 0) {

                console.log("Impossível realizar valor zerado...")

            }

            else if (this.saldo < valor) {

                console.log("Saldo insuficiente...")

            }

            else {

                this.saldo = this.saldo - valor

            }

        }

        else {

            console.log("Conta está inativa...")

        }

    }



}






const leia = require("prompt-sync")()

let op = ""

let valor = 0

let tipo = ""

let DatadeNascimento



console.log("1 - conta poupança")

console.log("2 - conta corrente")

console.log("3 - conta especial")

tipo = leia("Digite o numero do tipo de conta a ser aberta : ")



if (tipo == "1") {

    console.log("CONTA POUPANÇA")

}



else if (tipo == "2") {

    console.log("CONTA CORRENTE")

}



else if (tipo == "3") {

    console.log("CONTA ESPECIAL")

}



let numero = parseInt(leia("Digite o numero da conta : "))

let cpf = leia("Digite o cpf : ")

let c1 = new Conta(numero, cpf, 0, false)

c1.ativar()



for (let x = 1; x <= 10; x++) {

    console.log("Movimento " + x)

    console.log("Saldo da conta " + c1.saldo + " R$")

    valor = parseInt(leia("Digite o valor : "))

    op = leia("Digite D - débito ou C - credito : ").toUpperCase()

    if (op == "C") {

        c1.credito(valor)

    }

    else if (op == "D") {

        c1.debito(valor)

    }

}




if (tipo === "2" && x === 10) {
    for (let x = 1; x <= 10; x++) {
        console.log("Movimento " + x)
        console.log("Saldo da conta " + c1.saldo + " R$")
        valor = parseInt(leia("Digite o valor : "))
        op = leia("Digite D - débito ou C - credito : ").toUpperCase()
        if (op == "C") {
            c1.credito(valor)
        }
        else if (op == "D") {
            c1.debito(valor)
        }
    }
    const solicitarCheque = leia("Deseja solicitar cheque? (S/N): ").toUpperCase();
    if (solicitarCheque === "S") {
        let cheques = parseInt(leia("Digite a quantidade de cheques desejada (máximo 3): "));
        if (cheques >= 1 && cheques <= 3) {
            const valorCheques = cheques * 30.00
            c1.debito(valorCheques)
        }
    }
    else {
        console.log("Quantidade de cheques inválida. O número de cheques deve ser entre 1 e 3.");
    }
}

else if (tipo === "1") {
    const aniversario = leia("Digite a data de aniversário (DD/MM): ");
    const dataAtual = '23/05/2023'
    if (aniversario === dataAtual) {
        const correcao = (c1.saldo * 0.05);
        c1.saldo += correcao;
        for (let x = 1; x <= 10; x++) {
            console.log("Movimento " + x)
            console.log("Saldo da conta " + c1.saldo + " R$")
            valor = parseInt(leia("Digite o valor : "))
            op = leia("Digite D - débito ou C - credito : ").toUpperCase()
            if (op == "C") {
                c1.credito(valor)
            }
            else if (op == "D") {
                c1.debito(valor)
            }
        }
    }


    if (tipo === "3") {
        if (c1.saldo < 0) {
          const limite = 1000;
          const limiteDisponivel = parseInt(leia("Digite o valor que você quer tirar do limite: "));
          c1.saldo = limite - limiteDisponivel;
        }
      }
      
      for (let x = 1; x <= 10; x++) {
        console.log("Movimento " + x);
        console.log("Saldo da conta: " + c1.saldo + " R$");
        valor = parseInt(leia("Digite o valor: "));
        op = leia("Digite D - débito ou C - crédito: ").toUpperCase();
        if (op === "C") {
          c1.credito(valor);
        } else if (op === "D") {
          c1.debito(valor);
        }
      }

      console.log("Saldo final da conta R$ : " + c1.saldo)