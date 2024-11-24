function carregar() {
    const msg = document.getElementById('mensagem');
    const img = document.getElementById('imagem');
    const agora = new Date();
    const hora = agora.getHours();

    if (hora >= 0 && hora < 12) {
        document.body.style.backgroundColor = '#f3d9a2';
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`;
        img.src = 'assets/dia.jpeg'; 
    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundColor = '#ffa95d';
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`;
        img.src = 'assets/tarde.jpg'; 
    } else {
        document.body.style.backgroundColor = '#292b45';
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`;
        img.src = 'assets/noite.jpg'; 
    }
}

window.onload = carregar;
