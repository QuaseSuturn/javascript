//5! = 5 x 4 x 3 x 2 x 1

function fatorial(x){
    let fat = 1
    for(let n = x; n > 1; n--){
        fat *= n 
    }
    return fat
}

console.log(fatorial(5))