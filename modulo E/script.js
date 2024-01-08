function carregar(){

    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas`
   
    if(hora >= 1 && hora <= 12 )
    {
        img.src = 'dia.jpg'
        document.body.style.background = 'blue'
    }else if( hora > 12 && hora <= 18)
    {
        img.src = 'tarde.jpg'
        document.body.style.background = '#dd9445'

    }else{
        img.src = 'noite.jpg'
        document.body.style.background = 'violet'
    }
        

}