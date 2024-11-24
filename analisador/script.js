const numeros = [];

function adicionar() {
    const input = document.getElementById('numero');
    const num = Number(input.value);

    if (!num || numeros.includes(num)) {
        alert('Número inválido ou já adicionado!');
        input.value = '';
        return;
    }

    numeros.push(num);
    const lista = document.getElementById('numeros');
    const item = document.createElement('li');
    item.textContent = `Número ${num} adicionado.`;
    lista.appendChild(item);

    input.value = '';
    input.focus();
}

function analisar() {
    const resultado = document.getElementById('resultado');

    if (numeros.length === 0) {
        resultado.textContent = 'Nenhum número adicionado!';
        return;
    }

    const soma = numeros.reduce((a, b) => a + b, 0);
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    const media = soma / numeros.length;

    resultado.innerHTML = `
        <p>Total de números: ${numeros.length}</p>
        <p>Maior número: ${maior}</p>
        <p>Menor número: ${menor}</p>
        <p>Soma dos números: ${soma}</p>
        <p>Média: ${media.toFixed(2)}</p>
    `;
}
