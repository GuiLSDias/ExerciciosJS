function gerarTabuada() {
    const numero = Number(document.getElementById('numero').value);
    const resultado = document.getElementById('resultadoTabuada');
    resultado.innerHTML = '';

    if (!numero) {
        resultado.innerHTML = '<li>Insira um número válido!</li>';
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const item = document.createElement('li');
        item.textContent = `${numero} x ${i} = ${numero * i}`;
        resultado.appendChild(item);
    }
}