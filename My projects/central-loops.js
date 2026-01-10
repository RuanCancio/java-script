let alunos = ["Ana", "Carlos", "Bruna", "Diego", "Elisa"]
let notas  = [7, 5, 9, 4, 8]

for(let a = 0; a < alunos.length; a++) {
   console.log(`${alunos[a]} -> ${notas[a]}`)
} 

   for(let a in alunos) {
    console.log(`Posição ${a} -> ${alunos[a]}`)

}
for(let a of alunos) {
    console.log(a)
}

alunos.forEach(function(item, index) {
        console.log(`${item} tirou nota ${notas[index]}`)
})