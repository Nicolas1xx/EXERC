function calcularCusto() {
    let funcionarios = parseInt(document.getElementById("funcionarios").value);
    let dias = parseInt(document.getElementById("dias").value);
    let precoPorDia;

    if (funcionarios < 50) {
        precoPorDia = 4.50;
    } else if (funcionarios < 100) {
        precoPorDia = 4.10;
    } else if (funcionarios < 150) {
        precoPorDia = 3.80;
    } else {
        precoPorDia = 3.60;
    }

    let custoTotal = funcionarios * dias * precoPorDia;
    document.getElementById("resultado").innerText = `Custo mensal: R$ ${custoTotal.toFixed(2)}`;
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
