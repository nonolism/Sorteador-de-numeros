let campoQuantidade = document.getElementById('quantidade');
let campoInicio = document.getElementById('de');
let campoFim = document.getElementById('ate');
let botaoReiniciar = document.getElementById('btn-reiniciar');
let mensagemResultado = document.getElementById('resultado').querySelector('.texto__paragrafo');

function gerarNumeroEntreInicioEFim(inicio,fim){
    return Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
}

function gerarVariosNumeros(quantidade,inicio,fim){
    let contador = 0;
    let listaDeNumerosGerados = [];
    while (contador < quantidade){
        listaDeNumerosGerados.push(gerarNumeroEntreInicioEFim(inicio,fim));
        contador++;
    }
    return listaDeNumerosGerados;
}

function alterarMensagemResultado(numerosSorteados = []){
    let mensagem = 'Números sorteados:  nenhum até agora';
    if (numerosSorteados.length != 0 ){
        mensagem = `Números sorteados: ${numerosSorteados}`;
        mensagemResultado.innerHTML = mensagem;
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        mensagemResultado.innerHTML = mensagem;
    }
}

function sortear(){
    let quantidade = parseInt(campoQuantidade.value);
    let inicio = parseInt(campoInicio.value);
    let fim = parseInt(campoFim.value);
    let numerosSorteados = gerarVariosNumeros(quantidade,inicio,fim);
    alterarMensagemResultado(numerosSorteados);
}

function reiniciar(){
    campoQuantidade.value = null;
    campoInicio.value = null;
    campoFim.value = null;
    alterarMensagemResultado();
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
}
