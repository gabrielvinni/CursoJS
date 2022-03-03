function tabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        alert("[ERRO!!] Por favor digie um número.")  
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}