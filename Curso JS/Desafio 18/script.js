function verificar(){
    var valo1 = document.getElementById('txtval1')
    var valo2 = document.getElementById('txtval2')
    var oper = document.getElementById('txtopera')
    var rese = document.getElementById('res')

    switch(oper){
        case oper == 'Adição':
           var rp = Number(valo1.value.length) + Number(valo2.value.length)
           
        break
        case oper == 'Subtração':
           var rp = Number(valo1.value.length) - Number(valo2.value)
        break
        case oper == 'Divisão':
           var rp = Number(valo1.value.length) / Number(valo2.value)
        break
        case oper == 'Multiplicação':
           var rp = Number(valo1.value.length) * Number(valo2.value)
        break
        
    }
    rese.innerHTML += rp
}