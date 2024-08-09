let campoQuantidade = document.getElementById('quantidade');
let campoInicio = document.getElementById('de');
let campoFim = document.getElementById('ate');
let botaoReiniciar = document.getElementById('btn-reiniciar');
let containerResultado = document.getElementById('resultado')
let mensagemResultado = containerResultado.querySelector('.texto__paragrafo')

function gerarNumeroEntreInicioEFim(inicio,fim){
    return Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
}

function gerarVariosNumeros(quantidade,inicio,fim){
    let contador = 0;
    let listaDeNumerosGerados = [];
    while (contador < quantidade){
        listaDeNumerosGerados.push(gerarNumeroEntreInicioEFim(inicio,fim))
        contador++
    }
    return listaDeNumerosGerados
}

function alterarMensagemResultado(numerosSorteados) {
    if (numerosSorteados.length != 0 ){
        let textoResultado = `Números sorteados: ${numerosSorteados}`;
        mensagemResultado.innerHTML = textoResultado;
    } else {
        mensagemResultado.innerHTML = 'Números sorteados:  nenhum dessa vez';
    }
}
function sortear() {
    let quantidade = parseInt(campoQuantidade.value);
    let inicio = parseInt(campoInicio.value);
    let fim = parseInt(campoFim.value);
    let numerosSorteados = gerarVariosNumeros(quantidade,inicio,fim);
    alterarMensagemResultado(numerosSorteados);
}