function verificar(){
   var data = new Date()
   var agora = data.getFullYear()
   var Fano = document.getElementById('ano')
   var res = document.querySelector('div#res')
   if( Fano.value.lenght == 0 || Fano.value > agora){
    window.alert("[Erro] verifique os dados, e tente novamente")
   }else{
       var fsex = document.getElementsByName('radsex')
       var idade = agora - Number(Fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
    
        if (fsex[0].checked) {
            genero = 'homem'
            if( idade >=0 && idade <=10){
                //criança
                img.setAttribute('src', 'criança.m.jpg')
            }else if ( idade < 21) {
                //jovem
                img.setAttribute('src','jovem.m.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src','idoso.jpg')
            }       
        }else if (fsex[1].checked){
                genero = 'mulher'
                if( idade >=0 && idade <=10){
                    //criança
                    img.setAttribute('src','criança.f.jpg')
                }else if ( idade < 21) {
                    //jovem
                    img.setAttribute('src','jovem.f.jpg')
                }else if (idade < 50){
                    //adulto
                    img.setAttribute('src','adulta.jpg')
                }else{
                    //idoso
                    img.setAttribute('src','idosa.jpg')
                }       
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
   }
   

}