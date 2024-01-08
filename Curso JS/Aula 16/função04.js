/*function fatorial(n) {
    var fat = 1
    for(let c = n; c > 1; c--)
    return fat *= c

}
console.log(fatorial(3))*/

//usando recursividade
/*function fatorial(n) {
    if ( n == 1) {
        return 1
    } else {
        return n*(n-1)
    }
}
console.log(`O Fatorial desse numero é ${fatorial(3)}`)*/

function fatorial(n){
    var product = 1
    while (n>1) {

        product *= n
        n--
    }
    return product
}
console.log(fatorial(4))

