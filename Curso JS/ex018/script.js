var numer = document.getElementById('num')
var tab = document.getElementById('seltab')
var resp = document.getElementById('res')
var valores = []
function isnumero(nu) {
    if (Number(nu) >= 1 && Number(nu) <= 100) {
        return true
    } else {
        return false
    }
}
function islista(nu, l){
    if (l.indexOf(Number(nu)) != -1){
        return true
    }else {
        return false
    }
}
function verificar() {
    
    if (numer.value == '' || numer.value <= 0 || numer.value > 100 ) {
       window.alert('insira um numero entre 1 e 100.')
       
    } else {
        var n = Number(numer.value)
        var item = document.createElement('option')
        item.text = `valor ${n} adicionado.`
        item.value = `tab${n}`
        tab.appendChild(item)
    }
    function finalizar(){
       if ( valores.length == ''){
        window.alert('adicione um valor antes')
       }else{
        var c = 0
        var vetor = numer
        num[c] = vetor
        resp.innerHTML += `Ao todo, temos ${vetor.length} numeros cadastrados`
        c ++ 

       }
             
        }
        
       

       
    }
