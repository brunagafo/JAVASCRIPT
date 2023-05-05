
function carregar() {
    var msg = document.querySelector('#msg')
    var msghora = document.querySelector('#msghora')
    var img = document.querySelector('#pic') 
    var data = new Date()
    var hora = data.getHours()
    msghora.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 5) {
        img.src = 'noite.png'
        msg.innerHTML = ('Ei! É de madrugada, vá dormir.')
        document.body.style.background = '#020A21'
        document.getElementById('sect').style.background ='#8797c1'
    } else if (hora >= 5 && hora <= 12) {
        img.src = 'manha.png'
        msg.innerHTML = ('Bom dia!')
        document.body.style.background = '#ffa95e'
        document.getElementById('sect').style.background ='#f9e8d9'
    } else if (hora >= 13 && hora <=18) {
        img.src = 'tarde.png'
        msg.innerHTML = ('Boa tarde!')
        document.body.style.background = '#B84200'
        document.getElementById('sect').style.background ='#fcb97e'
    } else {
        img.src = 'noite.png'
        msg.innerHTML = ('Boa noite!')
        document.body.style.background = '#020A21'
        document.getElementById('sect').style.background ='#8797c1'
    }

}