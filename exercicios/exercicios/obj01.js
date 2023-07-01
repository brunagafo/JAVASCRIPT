let amigo = {nome: 'marcinho', sexo:'M', peso: 72.3, 
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }}

amigo.engordar(2)
console.log(amigo.peso)

let num = 8
console.log(num **= 2)
//console.log(typeof amigo)