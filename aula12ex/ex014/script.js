function carregar() {
    
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'fotomanha.png'
        msg.innerHTML += ' da manhã.'
        document.body.style.background = '#f1eb9b'
    
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = 'fototarde.png'
        msg.innerHTML += ' da tarde.'
        document.body.style.background = '#f5b16a'
    
    }else {
        // Boa noite
        img.src = 'fotonoite.png'
        msg.innerHTML += ' da noite.'
        document.body.style.background = '#3d3d3d'
    }
}
