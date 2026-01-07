let contar = document.querySelector('#contar')

contar.addEventListener('click', ()=> {
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    let contando = document.querySelector('.contando')
    contando.innerHTML = ''
    if (inicio <= 0) {
        window.alert('[3RR0]Esse número não é valido, automaticamente mudamos para 1!')
        inicio = 1

    } if (passo <= 0) {
        contando.textContent = 'Não é possivel resolver, pois o passo é invalido!'
        passo = 1
    }
    //contagem crescente
    if (inicio < fim) {
        for (let i = inicio; i <= fim; i += passo) {
            contando.innerHTML += `${i}👉`
        }
        //contagem decrescente
    } else
        for (let i = inicio; i >= fim; i -= passo) {
            contando.innerHTML += `${i}👉`
        }
    contando.innerHTML += '🏁'
})