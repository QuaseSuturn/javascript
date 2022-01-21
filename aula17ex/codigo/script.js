    var txtnumero = document.getElementById('valor')
    var res = document.getElementById('res')
    var num = []
    var lista = document.getElementById('tabela_valores')

function isNumero(x){
    if(Number(x) >= 1 && Number(x) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(x,l){
    if (l.indexOf(Number(x)) == -1){
        return true
    } else{
        return false
    }
}

function Adicionar(){
    
    if(isNumero(txtnumero.value) && inLista(txtnumero.value, num)){
        num.push(Number(txtnumero.value))
        let item = document.createElement('option')
        item.text = `Valor ${txtnumero.value} adicionado.`
        lista.appendChild(item)
    }else{
        alert('Nùmero inválido, ou já encontrado na lista.')
    }
    txtnumero.value = ''
    txtnumero.focus()
}

function finalizar(){
    var menor_numero = 100
    var maior_numero = 0
    for(let pos in num){
        if(num > maior_numero){
            maior_numero = num
        }else if(menor_numero > num){
            menor_numero = num
        }
    }

    res.innerHTML += `Total de números encontrados: ${num.length} <br>`
    res.innerHTML += `O Maior número encontrado é ${maior_numero} <br>`
    res.innerHTML += `O menor número encontrado é ${menor_numero}`
}


    
