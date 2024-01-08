function calcular() {
   var nu = document.getElementById('txtnum') 
   var tab = document.getElementById('seltab')
   if (nu.value.length == '') {
      window.alert('SEU CARA DE LARGATIXA, INSIRA UM NUMERO.')
   }else {
     var n = Number(nu.value)
     var c = 1
     tab.innerHTML = '' /*serve pra limpar o resultado do numero passado escolhido*/
     for(var c = 1; c <= 10; c ++) {
        var r = n * c
        var item = document.createElement('option')/*cria o quadro onde fica tabela, igual o res*/
        item.text += `${n} x ${c} = ${r} `
        item.value = `tab${c}`
        tab.appendChild(item)

     }
   }
}