let txtn = document.querySelector('#n')
let screen = document.querySelector('#screen')
let res = document.querySelector('#res')
let valores = []

//Verificando se o número digitado é válido (entre 1 e 100, diferente de 0)
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

//Verificando se o número digitado já está na array (não permite repetição de n°)
//-1 significa que não está na array, já que a posição não existe
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {    
        return false
    }
}

//Function do botão enviar n° e inserí-lo na array e no screen
function enviar() {
    if (isNumero(txtn.value) && !inLista(txtn.value, valores)){
        
        let num = Number(txtn.value)

        valores.push(num)
        /*let xvalores = document.createElement('option')
        xvalores.text = (`Somando todos os valores temos ${valores[]}}`)
        screen.appendChild(xvalores)*/

        let item = document.createElement('option')
        item.text = (`Você inseriu o número ${num}`)
        screen.appendChild(item)
        res.innerHTML = ''
     } else {
        alert('Número inválido!')
    }
    txtn.value = ''
    txtn.focus()
}

function finalizar() {

    if (valores.length == 0) {
        alert('Você não adicionou valores para finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

            //for...of itera sobre os VALORES dentro dos elementos da array
            for(let valor of valores) {
                soma += valor
                if (valor > maior){
                maior = valor;
                }
                if (valor < menor) {
                menor = valor;
                }
            }
            media = soma/valores.length
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}</p>` 
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}


function limparDados() {
    screen.innerHTML = ''
    res.innerHTML = ''
    valores = []
}

