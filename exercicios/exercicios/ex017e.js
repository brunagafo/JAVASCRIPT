//Recursividade (function dentro de function)

function fatorial(x) {
    if (x == 1) {
        return 1
    } else {
        return x = x * fatorial(x-1)
    }
}

console.log(fatorial(5))