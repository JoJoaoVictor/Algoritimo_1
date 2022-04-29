/*
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
     passou := falso
     escreval("Digite o nome do aludo")
     leia(nome)
     escreval("nota 01 do aludo")
     leia(nota01)
     escreval("nota 02 do aludo")
     leia(nota02)
     media := (nota01 + nota02) / 2

      //se media != 50  Negação
      se media >= 50  entao //condicional
      se nome == "Juninho3capa" entao              //Bicondicional
      passou := verdadeiro
         fimse
         
        se passou entao //condicional
         escreval("Passo gay", nome)
         fimse
      senao
         escreval("rodo fi", nome)
         fimse
         */

         var nota01, nota02, passou
         passou = false;
         nome = prompt("Digite o nome do aluno")
         nota01 = prompt("nota 01 do aludo")
         nota02 = prompt("nota 02 do aludo")
         
         media = (parseInt(nota01) + parseInt(nota02)) /2
         
            if(media >= 50){
           passou = true;
             
            if(passou && (media >= 70 && media <= 90))
                alert("Passo gay" + nome)
             else
                alert("rodo fi" + nome)
            
