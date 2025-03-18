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
