function estacoes(mes) {
    if (mes == "julho" || mes == "agosto" || mes == "setembro") {
        document.write("Inverno");}
    if (mes == "outubro" || mes == "novembro" || mes == "dezembro") {
            document.write("Primavera");}
}

console.log(estacoes("julho"));

console.log(estacoes("novembro")); 

console.log(estacoes("outubro")); 
  