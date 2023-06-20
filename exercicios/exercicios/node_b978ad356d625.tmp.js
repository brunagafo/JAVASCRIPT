//Function calculando fatorial!

function fatorial(x) {
    for (let fat = x; fat > 1; fat--) {
        fat*=x
    }
    return fat
}

console.log(fatorial(5))