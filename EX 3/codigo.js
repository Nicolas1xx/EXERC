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
