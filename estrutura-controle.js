/*escreval("Digite o nome do aludo")
     leia(nome)
     escreval("nota 01 do aludo")
     leia(nota01)
     escreval("nota 02 do aludo")
     leia(nota02)
     media := (nota01 + nota02) / 2
     
      se media >= 50  entao
         escreval("Passo gay", nome)
      senao media >= 5
         escreval("rodo fi", nome)
         fimise
         */
var nota01, nota02
nome = prompt("Digite o nome do aluno")
nota01 = prompt("nota 01 do aludo")
nota02 = prompt("nota 02 do aludo")

media = (parseInt(nota01) + parseInt(nota02)) /2

   if(media >= 50){
   alert("Passo gay" + nome)
   }  
else
   alert("rodo fi" + nome)