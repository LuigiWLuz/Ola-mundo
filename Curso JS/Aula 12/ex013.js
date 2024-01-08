var agora = new Date()
var dia_da_sem = agora.getDay()
/*
0 = domingo
1 = segunda 
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
console.log(dia_da_sem) //dia aparece como numero não fica tão facil de entender teria q fazer um teste, só q com o if ficaria muito grande a acaba sendo mais facil usar switch!!
switch(dia_da_sem ){
     case 0:
        console.log('Hoje é Domingo!')
     break

     case 1:
        console.log('Hoje é Segunda ;-;')
     break
     
     case 2:
        console.log('Hoje é Terça ;-;')
     break

     case 3:
        console.log('Hoje é Quarta ;-;')
     break

     case 4:
        console.log('Hoje é Quinta ;-;')
     break

     case 5:
        console.log('Hoje é SEXTAAAA!!!!')
     break

     case 6:
        console.log('Hoje é Sabado')
     break
     

}