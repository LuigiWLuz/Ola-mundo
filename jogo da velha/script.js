const quadrados = document.querySelectorAll(".cell");
let checarturno = true;
let jogadoresCadastrados = false;
let vsIaMode = false;
const jogX = "X";
const jogO = "O";
var vencedor;
var turno;
var contwins1 = 0;
var contwins2 = 0;
const possibilidades = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

document.getElementById('restart').style.visibility = 'hidden';

document.addEventListener("click", (Event) => {
    if(Event.target.matches(".cell")){
        jogar(Event.target.id);
    } 
})
 

function jogar(id) {
    if (jogadoresCadastrados) {
        const celula = document.getElementById(id);
        if (!celula.textContent && !vencedor) {
            turno = checarturno ? jogX : jogO;
            celula.textContent = turno;
            celula.classList.add(turno);
            checkwinner(turno);

            
            if (vsIaMode && !vencedor) {
                setTimeout(() => jogarIa(), 550);
            }
        }
    } else {
        alert("Por favor, cadastre-se antes de começar");
    }
}

function checkwinner(turno){
    const winner = possibilidades.some((possibi) => {
        return possibi.every((indice) =>{
            return quadrados[indice].classList.contains(turno);
        })
    });

    if(winner)
        acabajogo(turno);
    else if(checaempate())
        acabajogo();
    else 
         checarturno = !checarturno;
}

function checaempate(){
    let x = 0;
    let o = 0;

    for(indice in quadrados)
    {
        if(!isNaN(indice)){
            if(quadrados[indice].classList.contains(jogX))
             x++;
            if(quadrados[indice].classList.contains(jogO))
             o++;
        }
    } 
    return x + o === 9 ? true : false;
}

function acabajogo(vencedor = null){
    if(vencedor){
        if(vencedor == 'X' ){
            contwins1 += 1;
            document.getElementById("jog1_wins").innerHTML = ("Vitórias: " + contwins1);
        }
        else{
            contwins2 += 1;
            document.getElementById("jog2_wins").innerHTML = ("Vitórias: " + contwins2);
        }
    }
    else
        alert('Empatou!');

        setTimeout(() => { for (let i = 0; i < quadrados.length; i++) {
            clearBox(i);
        }
        vencedor = null;
        turno = null;
        checarturno = true;
    
    function clearBox(number) {
        quadrados[number].innerHTML = '';
        quadrados[number].classList.remove(jogX);
        quadrados[number].classList.remove(jogO);
        
    }}, 575);
}
function jogarIa() {
    const celulasVazias = Array.from(quadrados).filter(celula => !celula.textContent);
    const celulaEscolhida = celulasVazias[Math.floor(Math.random() * celulasVazias.length)];

    if (celulaEscolhida) {
        turno = jogO; // ia smp é O
        celulaEscolhida.textContent = turno;
        celulaEscolhida.classList.add(turno);
        checkwinner(turno);
    }
}

function pvpmode(){
    document.getElementById("pvp").style.display = 'none', 
    document.getElementById("pvia").style.display = 'none';
    document.getElementById("restart").style.visibility= 'visible';
    document.getElementById("container").style.visibility='visible';
    document.getElementById("gamemod").style.display='none';
    
}
function pviamode(){
    vsIaMode = true;

    document.getElementById('player2').innerHTML = "Computador";
    document.getElementById("jog2").style.display = 'none'; 
    document.getElementById("btn2").style.display = 'none';
    document.getElementById("pvp").style.display = 'none';
    document.getElementById("pvia").style.display = 'none';
    document.getElementById("restart").style.visibility= 'visible';
    document.getElementById("container").style.visibility='visible';
    document.getElementById("gamemod").style.display='none';
}
function cadastrarJogador1() {
    var nomejogador1 = document.getElementById("jogador1");
    var novotext = String(nomejogador1.value);
    document.getElementById('textt').innerHTML = novotext;

    document.getElementById("jogador1").style.display = 'none';
    document.getElementById("btn1").style.display = 'none';

    //verifica jogadores cadastrados
    
    if (document.getElementById("textt").innerHTML !== "Jogador 1") {
        jogadoresCadastrados = true;
    }
}

function cadastrarJogador2() {
    var nomejogador2 = document.getElementById("jog2");
    var novotext2 = String(nomejogador2.value);
    document.getElementById('player2').innerHTML = novotext2;

    document.getElementById("jog2").style.display = 'none';
    document.getElementById("btn2").style.display = 'none';

    //verifica jogadores cadastrados
    if (document.getElementById("jog2").innerHTML !== "Jogador 2") {
        jogadoresCadastrados = true;
    }
}
function reiniciar(){
    window.location.reload(true)
}