function tabuada() {
    let num = document.getElementById('number')
    let tab = document.getElementById('tabu')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let ita = document.createElement('option')
            ita.text = `${n} x ${c} = ${n * c}`
            ita.value = `tab${c}`
            tab.appendChild(ita)
            c++
        }
    }
}
