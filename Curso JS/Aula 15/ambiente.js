let num = [4,5,6,7,8]
num.push(3)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições.`)
console.log(`A primeira posição possui o valor ${num[0]}`)
var pos = num.indexOf(9)
if (pos == -1){
    console.log('essa posição não existe.')
}else{
    console.log(`o valor esta na posição  ${pos}`)
}

/*num[4] = 9 // adiciona um novo indice e variavel ao vetor.
num.push(7) // adiciona uma variavel na ultima posição não importa qual seja.
num.sort() // ordena os elementos em ordem.
console.log(`nossos vetores são ${num}`)*/

