//PERCURSO TRADICIONAL PARA EXIBIÇÃO DE ARRAY

let num = [2,3,1] 
num.sort()
num[3] = 30
num.push(15)

console.log(num)
//console.log(`O array é composto dos elementos ${num}`)
//console.log(`O vetor tem ${num.length} posições`)

//Array com loop de for
for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) 
}
