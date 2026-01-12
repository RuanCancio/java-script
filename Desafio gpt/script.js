const btnaprovados = document.getElementById('botao-aprovados')
const result = document.querySelector('#lista')

function alunos(){
async function carregardados() {
        let atr = await fetch("dados.json")
        let dado = await atr.json()
        
        result.innerHTML = ''

        dado.forEach(a => {
            let li = document.createElement("li")
             li.textContent = `${a.nome} - Nota: ${a.nota}`
            result.appendChild(li)
        })

}
carregardados()
}

btnaprovados.addEventListener('click', ()=> {
async function carregardados() {
        let atr = await fetch("dados.json")
        let dado2 = await atr.json()
        
        result.innerHTML = ''

        dado2.forEach(a => {
           if(a.nota >= 7) {
            let li = document.createElement("li")
            li.textContent = `${a.nome} - Nota: ${a.nota} (Aprovado)`
            result.appendChild(li)
           } else {
            let li = document.createElement("li")
            li.textContent = `${a.nome} - Nota: ${a.nota} (Reprovado)`
            result.appendChild(li)
           }
        })

}
carregardados()
})

