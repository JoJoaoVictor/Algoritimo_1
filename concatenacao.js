/*// Seção de Declarações das variáveis 
      nome:caractere
      numero:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreval("digite o nome")
    leia(nome)
      escreval("digite o numero")
    leia(numero)
            escreval(nome," : ",numero)

Fimalgoritmo
*/
var  nome, numero 

nome = prompt("Digite seu nome")
numero = prompt("Digite o numero")

document.getElementById("paragrafo").innerText = nome + " : " + numero