// Seleciona os elementos HTML com IDs específicos e atribui-os a variáveis.
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let res = document.getElementById("res");

// Função para somar
function somar() {
    res.innerHTML += `<p>O resultado da soma entre ${n1.value} e ${n2.value} é ${Number(n1.value) + Number(n2.value)}</p>`;
}

// Função para subtrair
function subtrair() {
    res.innerHTML += `<p>O resultado da subtração entre ${n1.value} e ${n2.value} é ${Number(n1.value) - Number(n2.value)}</p>`;
}

// Função para multiplicar
function multiplicar() {
    res.innerHTML += `<p>O resultado da multiplicação entre ${n1.value} e ${n2.value} é ${Number(n1.value) * Number(n2.value)}</p>`;
}

// Função para dividir
function dividir() {
    if (Number(n2.value) !== 0) {
        res.innerHTML += `<p>O resultado da divisão entre ${n1.value} e ${n2.value} é ${Number(n1.value) / Number(n2.value)}</p>`;
    } else {
        res.innerHTML += `<p>Divisão por zero não é permitida.</p>`;
    }
}

// Função para calcular potência
function potencia() {
    res.innerHTML += `<p>${n1.value} elevado a ${n2.value} é ${Math.pow(Number(n1.value), Number(n2.value))}</p>`;
}

// Função para calcular rz quadrada
function raizQuadrada() {
    res.innerHTML += `<p>A raiz quadrada de ${n1.value} é ${Math.sqrt(Number(n1.value))}</p>`;
}

// Limpar
function limpar() {
    res.innerHTML = "Aqui irá aparecer o resultado...";
}