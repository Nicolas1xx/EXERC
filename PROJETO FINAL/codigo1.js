// Seleciona os elementos HTML com IDs específicos e atribui-os a variáveis.
let salario = document.getElementById("salario");
let horasNormais = document.getElementById("horasNormais");
let horasFinaisSemana = document.getElementById("horasFinaisSemana");
let res = document.getElementById("res");

// Função para calcular o valor das horas extras
function calcular() {
    let valorHora = Number(salario.value) / 200;
    let valorHorasNormais = valorHora * Number(horasNormais.value);
    let valorHorasFinaisSemana = valorHora * 1.5 * Number(horasFinaisSemana.value);
    let valorTotal = valorHorasNormais + valorHorasFinaisSemana;

    res.innerHTML = `<p>O valor total a receber pelas horas extras é R$ ${valorTotal.toFixed(2)}</p>`;
}

// Função para limpar os resultados
function limpar() {
    salario.value = "";
    horasNormais.value = "";
    horasFinaisSemana.value = "";
    res.innerHTML = "Aqui irá aparecer o valor a receber...";
}

// Função para exibir a data e a hora atualizada a cada segundo
function atualizarDataHora() {
    let agora = new Date();

    let dia = agora.getDate();
    let mes = agora.getMonth() + 1; // Janeiro é 0, então somamos 1
    let ano = agora.getFullYear();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adiciona zero à esquerda se for necessário
    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    let dataHoraFormatada = `Data: ${dia}/${mes}/${ano} - Hora: ${horas}:${minutos}:${segundos}`;

    document.getElementById("dataHora").innerHTML = dataHoraFormatada;
}

// Atualiza a cada segundo
setInterval(atualizarDataHora, 1000);

// Chama a função ao carregar a página
atualizarDataHora();
