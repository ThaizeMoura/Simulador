const calcular = document.getElementById('calcular');
const copiar = document.getElementById('copiar');
const limpar = document.getElementById('limpar');

function simular() {
    const parcela = parseFloat(document.getElementById('parcela').value);
    const prazo = parseFloat(document.getElementById('prazo').value);
    const lanceLivre = parseFloat(document.getElementById('lanceLivre').value);
    const lanceCarta = parseFloat(document.getElementById('lanceCarta').value);
    const resultado = document.getElementById('resultado');

    // Verificar se os campos estão preenchidos corretamente
    if (isNaN(parcela) || isNaN(prazo) || isNaN(lanceLivre) || isNaN(lanceCarta)) {
        resultado.innerText = "Por favor, preencha todos os campos corretamente!!!";
        return;
    }

    const totalLance = lanceLivre + lanceCarta;
    const valorSimulador = (prazo * parcela) - totalLance;
    const valorParcelas = valorSimulador / 79;
    const valorParcela = valorSimulador / parcela;

    resultado.innerHTML = `
    <p><strong>Proposta de Simulação</strong></p>
        <p><strong>Valor total a pagar:</strong> R$ ${valorSimulador.toFixed(2)}</p>
        <p><strong>Entrada:</strong> R$ ${lanceLivre.toFixed(2)}</p>
        <p><strong>Lance da Carta:</strong> R$ ${lanceCarta.toFixed(2)}</p>
        <p><strong>Valor de cada parcela:</strong> R$ ${valorParcelas.toFixed(2)}</p>
        <p><strong>Parcelas restantes:</strong> ${valorParcela.toFixed(0)}</p>
    `;
}

// Função para copiar a proposta
function copiarProposta() {
    const resultado = document.getElementById('resultado').innerText;
    if (resultado.trim() === "") {
        alert("Nada para copiar! Gere uma proposta primeiro.");
        return;
    }

    navigator.clipboard.writeText(resultado)
        .then(() => alert("Proposta copiada com sucesso!"))
        .catch(() => alert("Erro ao copiar!"));
}

// Função para limpar os campos
function limparCampos() {
    document.getElementById('parcela').value = "";
    document.getElementById('prazo').value = "";
    document.getElementById('lanceLivre').value = "";
    document.getElementById('lanceCarta').value = "";
    document.getElementById('resultado').innerHTML = "";
}

// Eventos
calcular.addEventListener("click", simular);
copiar.addEventListener("click", copiarProposta);
limpar.addEventListener("click", limparCampos);
