function contar() {
    const inicio = Number(document.getElementById('inicio').value);
    const fim = Number(document.getElementById('fim').value);
    const passo = Number(document.getElementById('passo').value || 1);
    const resultado = document.getElementById('resultadoContagem');

    if (inicio === 0 || fim === 0 || passo <= 0) {
        resultado.textContent = 'Valores inválidos!';
        return;
    }

    let contagem = '';
    if (inicio < fim) {
        for (let i = inicio; i <= fim; i += passo) {
            contagem += `${i} 👉 `;
        }
    } else {
        for (let i = inicio; i >= fim; i -= passo) {
            contagem += `${i} 👉 `;
        }
    }
    resultado.textContent = `${contagem} 🏁`;
}
