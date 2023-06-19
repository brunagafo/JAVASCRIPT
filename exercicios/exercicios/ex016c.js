//PERCURSO OTIMIZADO PARA ARRAYS
//Esse for especial só funciona para arrays e objetos

let num = [7, 1, 9, 0]

//Busca de valor na array
//console.log(`O valor 7 está na posição ${num.indexOf(7)}`)

for(let n in num) {
    console.log(`A posição ${n} tem o valor ${num[n]}`)
}

  
