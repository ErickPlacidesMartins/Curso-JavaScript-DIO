/*function comparaNumeros(num1, num2) {
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

    if(sãoIguais) {
        return "São Iguais";
    }

    return "Não São Iguais";
} */

// Ternário = return saoIguais ? "São Iguais" : "Não são iguais"

function comparaNumeros(num1, num2) {
const primeiraFrase = criaPrimeiraFrase(num1, num2);
const segundaFrase = criaSegundaFrase(num1, num2);

return '${primeiraFrase}${segundaFrase}';
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2)  {
        saoIguais = 'Não';
    }

    return 'Os numeros ${num1} e ${num2} ${soaIguais} São iguais.'
};

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma < 20;


    if(compara10) {
        resultado10 ='Maior';
    }

    if(compara20) {
        resultado20 ='Maior';   
    }

    return 'Sua soma é $(soma), que é ${resultado10} que e ${resultado20} que 20.';
}
console.log(comparaNumeros(1, 2));

