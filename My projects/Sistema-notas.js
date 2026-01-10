let alunos = [
   { nome: "Ana", nota: 7 },
   { nome: "Carlos", nota: 5 },
   { nome: "Bruna", nota: 9 },
   { nome: "Diego", nota: 4 },
   { nome: "Elisa", nota: 8 }
]

function mediaDaTurma() {
    let total = 0 
alunos.forEach(aluno => {
    total += aluno.nota
})
return total / alunos.length
}

console.log(mediaDaTurma())


function alunosAprovados(alunos) {
    alunos.forEach(element => {
        if(element.nota >= 7) {
            console.log(`${element.nome} - ${element.nota}`)
        }
    }) 
}
alunosAprovados(alunos) 

function maiorNota() {
    let comparar = alunos[0]
    alunos.forEach(element => {
        if (comparar.nota > element.nota) {
            comparar = element
        }
}) 
return `${comparar.nome} - pior nota`}
console.log(maiorNota())