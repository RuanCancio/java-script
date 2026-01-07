/*let valores = [2, 5, 6, 21, 12, 2, 4 , 5, 7]
valores.sort()
for(let num = 0;num < valores.length; num++) {
    console.log (`A posição ${num} tem o valor ${valores[num]}`)
}*/

let num = [2, 5, 6, 3, 1, 9, 4 , 5, 7]
/*num.sort()
for(let pos in num) {
    console.log(`O valor é ${pos} e dentro do conjunto é o ${num[pos]}`)
}
*/
let enc = num.indexOf(2)
if(enc == -1) {
    console.log('não existe')
} else {

    console.log(`O valor da posição é ${enc}`)
}