/*Var
// Seção de Declarações das variáveis 
      nome : caractere
      idade, limite, contador : inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      escreva("Digite a Quantidade de vezes que vai ser verificado a idade")
               leia(limite)
        contador := 0;
           enquanto contador < limite faca
               escreva("Digite seu nome: ")
              leia(nome)
                escreva("Digte a Idade do(a): ", nome, " :")
              leia(idade)
        se idade >= 18 entao
               escreval (nome, " é maior de idade")
          senao
               escreval (nome, " é menor de idade")
      fimse
        contador := contador + 1
   fimenquanto
*/
function acaoButao(){
var nome, idade, limite, contador
limite = prompt("Digite a Quantidade de vezes que vai ser verificado a idade");
contador = 0;
while(contador < limite){
       nome = prompt("Digite seu nome: ")
           prompt("Digte a Idade do(a): ", nome, " :")
  if(idade >= 18)
      document.getElementById("paragrafo").innerText = nome + " é maior de idade" 
else
       document.getElementById("paragrafo").innerText = nome + " é menor de idade" 

     contador ++
   
  }
}
 
