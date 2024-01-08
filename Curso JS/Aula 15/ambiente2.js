let valores  = [8,1,7,4,2,9]

/*for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}*/

//maneira simplificada do for para arrays

for(let pos in valores.sort()){
    console.log(`a posição ${pos} tem o valor de ${valores[pos]}`)
}