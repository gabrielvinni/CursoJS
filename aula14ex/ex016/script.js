function contar() {
    var res = document.querySelector('div#res')

    var numi = document.getElementById('txtnumi')
    var numf = document.querySelector('input#txtnumf')
    var passo = document.querySelector('input#txtpasso')

    var ni = Number(numi.value)
    var nf = Number(numf.value)
    var pas = Number(passo.value)

    if (numi.value.length == 0 || numf.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'inpossível contar'
        alert('[ERRO!!] Preencha os dados corretamente.')      
    }else {
        res.innerHTML = 'Contando: <br>'
        if(pas <= 0) {
            alert("Passo Inválido. Considerando passo 1")
            pas = 1
        }
        if(ni < nf) {
            for(var c = ni ; c <= nf ; c += pas) {
                res.innerHTML += `${c} \u{1F449} `
            }          
        }else {
            for(var c = ni ; c >= nf ; c -= pas) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }    
}