function repetidorTexto(texto, vezes) {
    if (vezes <= 0) {
        return 'Número de repetições deve ser maior que zero.';
    }

    let resultado = '';
    for (let i = 0; i < vezes; i++) {
        resultado += texto + '\n';
    }
    return resultado;
}

let texto = prompt("Digite o texto que deseja repetir;");
let vezes = parseInt(prompt("Quantas vezes deseja repetir o texto?"), 10);

if (!isNaN(vezes)) {
    let repetido = repetidorTexto(texto, vezes);
    document.getElementById("repetidor").innerText = `Palavra a repetir: ${repetido}`;
    
} else {
    alert("Por favor, insira um número válido para as repetições.");
}