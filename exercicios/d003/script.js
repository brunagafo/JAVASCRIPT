
function calcular(){

var txtini = document.querySelector('#inicio')
var txtfim = document.querySelector('#fim')
var txtfreq = document.querySelector('#frequencia')
var res = document.querySelector('#res')

    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtfreq.value.length == 0) {
        window.alert("ERRO! Faltam informações...")
    } else {
        var ini = Number(txtini.value)
        var fim = Number(txtfim.value)
        var freq = Number(txtfreq.value)
        if (freq == 0) {
            window.alert('A frequência não pode ser 0!')
            freq = 1
        }
        res.innerHTML = `A contagem de ${ini} até ${fim}, pulando de ${freq} em ${freq} número(s) é: `
        //Contagem progressiva
        if (ini < fim) {
            for (var c = ini; c <= fim; c += freq)
            res.innerHTML += `<strong> ${c} </strong>-> `
        } else {
        //Contagem regressiva
            for (var c = ini; c >= fim; c -= freq)
            res.innerHTML += `<strong> ${c} </strong>-> `
        }
        res.innerHTML += `FIM!`
    }
}
 