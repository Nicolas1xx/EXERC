// Seleciona os elementos do formulário
let salario = document.getElementById("salario");
let res = document.getElementById("res");

// Função para calcular o aumento de salário
function calcular() {
    let salarioAtual = Number(salario.value);
    let novoSalario;

    if (salarioAtual <= 1200) {
        novoSalario = salarioAtual * 1.16;
    } else if (salarioAtual <= 2100) {
        novoSalario = salarioAtual * 1.13;
    } else if (salarioAtual <= 3000) {
        novoSalario = salarioAtual * 1.10;
    } else {
        novoSalario = salarioAtual * 1.05;
    }

    res.innerHTML = `<p>O novo salário após o aumento é R$ ${novoSalario.toFixed(2)}</p>`;
}

// Função para limpar os campos
function limpar() {
    salario.value = "";
    res.innerHTML = "Aqui irá aparecer o novo salário...";
}
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

