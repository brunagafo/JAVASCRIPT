function calcular() {
    let txtnum = document.querySelector('#num')
    let tab = document.querySelector('#seltab')

    if (txtnum.value.length == 0) {
        alert('Ops! Você precisa digitar um número.')
    } else {
        let num = Number(txtnum.value)
        //limpando a tela antes de novo teste lógico
        tab.innerHTML = ''

        for (c = 1; c <= 10; c++) {
        //criando novos elementos <option> dentro do <select> por js
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        //item.value p/ outras linguagens identificarem qual option está selecionada
        item.value = `tab${c}`
        tab.appendChild(item)
        }
    }

}