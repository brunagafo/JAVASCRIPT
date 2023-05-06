function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (fano.value.length < 4 || fano.value > ano || Number(fano.value) < 1890) {
        window.alert('ERRO! Verifique o ano selecionado e tente novamente.')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero =  ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criancamasc.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemmasc.png')
            } else if (idade < 50) {
                img.setAttribute('src','adulto.png')
            } else {
                img.setAttribute('src', 'senhor.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','criancafem.png')
            } else if (idade < 21) {
                img.setAttribute('src','jovemfem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta.png')
            } else {
                img.setAttribute('src', 'senhora.png')
            }

        } else if (fsex[2].checked) {
            genero = 'Pessoa não binária'
            img.setAttribute('src', 'x.png')
        }

        //if (idade == 0) {
        //    res.innerHTML = `Detectamos ${genero} com menos de 1 ano de idade.`
        //}

        res.innerHTML = `Detectamos ${genero} com ${idade} ano(s) de idade.`
        res.appendChild(img)
    }
}