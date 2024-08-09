let campoQuantidade = document.getElementById('quantidade');
let campoInicio = document.getElementById('de');
let campoFim = document.getElementById('ate');
let botaoReiniciar = document.getElementById('btn-reiniciar');

function gerarNumeroEntreInicioEFim(inicio,fim){
    return Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
}

function sortear() {
    let quantidade = parseInt(campoQuantidade.value);
    let inicio = parseInt(campoInicio.value);
    let fim = parseInt(campoFim.value);

    console.log(gerarNumeroEntreInicioEFim(inicio,fim));
}