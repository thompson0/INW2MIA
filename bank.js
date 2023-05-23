class Conta {
  constructor(numero, cpf, saldo, ativo) {
    this.numero = numero;

    this.cpf = cpf;

    this.saldo = saldo;

    this.ativo = ativo;
  }

  ativar() {
    this.ativo = true;
  }

  credito(valor) {
    if (this.ativo) {
      if (valor <= 0) {
        console.log("Impossível realizar valor não positivo...");
      } else {
        this.saldo += valor;
      }
    } else {
      console.log("Conta está inativa...");
    }
  }

  debito(valor) {
    if (this.ativo) {
      if (tipo===1&&2 &&valor <= 0) {
        console.log("Impossível realizar valor não positivo...");
      }  else {
        this.saldo -= valor;
      }
      
    } else {
      console.log("Conta está inativa...");
    }
  }
}

const leia = require("prompt-sync")();

console.log("1 - conta poupança");

console.log("2 - conta corrente");

console.log("3 - conta especial");

const tipo = leia("Digite o número do tipo de conta a ser aberta: ");

let tipoConta = "";

if (tipo === "1") {
  tipoConta = "CONTA POUPANÇA";
} else if (tipo === "2") {
  tipoConta = "CONTA CORRENTE";
} else if (tipo === "3") {
  tipoConta = "CONTA ESPECIAL";
}

console.log(tipoConta);

const numero = parseInt(leia("Digite o número da conta: "));

const cpf = leia("Digite o CPF: ");

const c1 = new Conta(numero, cpf, 0, false);

c1.ativar();



if (tipo === "2") {
  for (let x = 1; x <= 10; x++) {
    console.log("Movimento " + x);

    console.log("Saldo da conta: " + c1.saldo + " R$");

    const valor = parseInt(leia("Digite o valor: "));

    const op = leia("Digite D - débito ou C - crédito: ").toUpperCase();

    if (op === "C") {
      c1.credito(valor);
    } else if (op === "D") {
      c1.debito(valor);
    }
  }

  const solicitarCheque = leia(
    "Deseja solicitar cheque? (S/N): "
  ).toUpperCase();

  if (solicitarCheque === "S") {
    const cheques = parseInt(
      leia("Digite a quantidade de cheques desejada (máximo 3): ")
    );

    if (cheques >= 1 && cheques <= 3) {
      const valorCheques = cheques * 30.0;

      c1.debito(valorCheques);
    } else {
      console.log(
        "Quantidade de cheques inválida. O número de cheques deve ser entre 1 e 3."
      );
    }
  }
} 
    else if (tipo === "1") {
  const aniversario = leia("Digite a data de aniversario da conta: ");

  const dataAtual = leia("Digite a data de hoje");

  if (aniversario === dataAtual) {
    const correcao = c1.saldo * 0.05;

    c1.saldo += correcao;

    for (let x = 1; x <= 10; x++) {
      console.log("Movimento " + x);

      console.log("Saldo da conta: " + c1.saldo + " R$");

      const valor = parseInt(leia("Digite o valor: "));

      const op = leia("Digite D - débito ou C - crédito: ").toUpperCase();

      if (op === "C") {
        c1.credito(valor);
      } else if (op === "D") {
        c1.debito(valor);
      }
    }
  }
} else if (tipo === "3") {
    for (let x = 1; x <= 10; x++) {
        console.log("Movimento " + x);
    
        console.log("Saldo da conta: " + c1.saldo + " R$");
    
        const valor = parseInt(leia("Digite o valor: "));
    
        const op = leia("Digite D - débito ou C - crédito: ").toUpperCase();
    
        if (op === "C") {
          c1.credito(valor);
        } else if (op === "D") {
          c1.debito(valor);
        }
    }
      limite=1000

  if (c1.saldo < 0 ) {
    
    c1.saldo=limite+c1.saldo

  }


    

}

console.log("Saldo final da conta: " + c1.saldo + " R$");
