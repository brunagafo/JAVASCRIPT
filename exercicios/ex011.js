// ANINHAMENTO

var idade = 22
console.log(`Você tem ${idade} anos`)
if  (idade < 16){
    console.log('Não pode votar!')
} else if (idade < 18 || idade > 65){
    console.log('O voto é opcional!')
    //Se na 1° condição a idade se tornou < 16, é lógico que para executar 2° if ela é >= 16
    //Se quiser escrever a expressão completa idade >= 16 && idade < 18 (sem necessidade)
} else {
    console.log('O voto é obrigatório!')
}