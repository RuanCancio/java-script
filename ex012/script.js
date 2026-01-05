
function carregar() {
    let data = new Date()
    let image = document.querySelector('img#image')
    let hora = data.getHours()
    document.querySelector('div#horas').innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        image.src = 'imagens/manha-p.jpg'
        document.body.style.background = '#F8CF8F'
    } else if (hora >= 12 && hora < 18) {
        image.src = 'imagens/tarde-p.jpg'
        document.body.style.background = '#f79550ff'
    } else {
        image.src = 'imagens/noite-p.jpg'
        document.body.style.background = '#A180B5'
    }
}