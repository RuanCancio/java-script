function soma(a, b) {
    return a + b
}
 function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
    
 }

 function maiorNumero(a, b) {
    if(a > b) {
        return a
    } else {
        return b
    }
 }

 function media(n1, n2, n3) {
    let total = n1 + n2 + n3
    return total / 3
 }

 function situacaoAluno(media) {
    if(media >= 7) {
        return 'aprovado'
    } else if (media >= 5) {
        return 'recuperação'
    } else {
        return 'reprovado'
    }
 }
let m = media(6, 7, 8)

console.log("Soma:", soma(4, 6))
console.log("Par ou ímpar:", parOuImpar(9))
console.log("Maior número:", maiorNumero(15, 30))
console.log("Média:", m)
console.log("Situação:", situacaoAluno(m))
