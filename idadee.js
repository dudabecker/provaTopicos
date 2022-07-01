function idade(nascimento) {
    var d = new Date;
        ano_atual = d.getFullYear(),

        idadeAtual = ano_atual - nascimento;

    return idadeAtual;
}

console.log(idade(2004));

console.log(idade(2000)); 

console.log(idade(1990)); 