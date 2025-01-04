function calcular(num1, num2, operacao) {
    let resultado;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operacao) {
        case '+': 
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Erro: Divisão por zero";
            }
            break;
        default:
            resultado = "Operador invalido";
    }
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
let numero1 = prompt("Digite o primeiro numero: ");
let numero2 = prompt("Digite o segundo numero: ");
let operacao = prompt("Digite o operador: ");

calcular(numero1, numero2, operacao);
