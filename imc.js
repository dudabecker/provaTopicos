function calcularIMC(peso,altura) {
    var peso = 58;
    var altura = 164;

    IMC = peso/(altura*altura);

    if (IMC < 25) {
      document.write("Seu IMC é " + IMC + " ,você está no peso ideal");}

    if (IMC > 25) {
      document.write("Seu IMC é " + IMC + " ,você está acima do peso");}
  }
  
