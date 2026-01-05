function enviar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var result = document.getElementById('result')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        let fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/h-bb.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/h-jovem.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'imagens/h-adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/h-velho.jpg')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/m-bb.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/m-jovem.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'imagens/m-adulta.jpg')
            }
            else {
                img.setAttribute('src', 'imagens/m-velha.jpg')
            }
        }
        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        result.appendChild(img)
    }
}
