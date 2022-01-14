    function verificar(){
        var inicio = Number(document.getElementById('txtinicio').value)
        var fim = Number(document.getElementById('txtfim').value)
        var passo = Number(document.getElementById('txtpasso').value)
        var res = document.getElementById('res')
        if(passo.value.length == 0|| inicio.value.length == 0 || fim.value.length){
            alert('[ERRO] Considerando Passo 1.')
            passo = 1;
        }
    
        if(inicio < fim){
            res.innerHTML = ('Contando: <br>')
            while(inicio <= fim){
                res.innerHTML += (`${inicio}&#x1F449`)
                inicio = inicio + passo;
            }
            res.innerHTML += ('&#x1F3F4')
            
        }else if(inicio > fim){
            res.innerHTML = ('Contando: <br>')
            while(inicio >= fim){
                res.innerHTML += (`${inicio}&#x1F449`)
                inicio = inicio - passo;
            }
            res.innerHTML += ('&#x1F3F4')
        }
    }
    
    
