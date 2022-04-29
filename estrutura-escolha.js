function acaoBotao() {
    var valor01, valor02, resultado, operacao
    valor01 = prompt("Digite valor 01")  
    operacao = prompt("Digite a operacao Ex; +, -, *, / :")
    valor02 = prompt("Digite valor 02") 

    switch(operacao){
        case "+":
            resultado = parceInt( valor01 ) + parceInt (valor02)
            break;
        case "-":
            resultado = parceInt( valor01 ) - parceInt (valor02)
            break;
        case "*":
            resultado = parceInt( valor01 ) * parceInt (valor02)
            break;
        case"/":
            resultado = parceInt( valor01 ) / parceInt (valor02)
            break;

    }
   document.getElementById("paragrafo").innerText = resultado
 
 }