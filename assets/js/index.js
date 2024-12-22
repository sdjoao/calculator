
const clear = document.getElementById('clear');
var screen = document.getElementById('result');


function ClearScreen(){
    screen.value = "";
}

function insertInScreen(num){
    screen.value += num;
}

function callResult(){

    try{
        screen.value = eval(screen.value);
    }catch(error){
        alert("Não é possível adicionar dois operadores lado a lado!")
    }
}

// Math Tips 
const mathTips = [
    "Sempre resolva operações dentro dos parênteses primeiro.",
    "Ao multiplicar ou dividir números negativos, o resultado será positivo se os sinais forem iguais.",
    "Use a propriedade distributiva para simplificar cálculos: a(b + c) = ab + ac.",
    "Multiplicar qualquer número por zero sempre dá zero.",
    "Dividir qualquer número por 1 sempre resulta no próprio número.",
    "Frações equivalentes são criadas multiplicando ou dividindo o numerador e o denominador pelo mesmo número.",
    "Ao somar ou subtrair frações, iguale os denominadores antes de calcular.",
    "Para encontrar porcentagens, converta a porcentagem para decimal e multiplique pelo número.",
    "A ordem das operações é: parênteses, expoentes, multiplicação, divisão, adição e subtração (PEMDAS).",
    "Ao somar números inteiros positivos e negativos, mantenha o sinal do maior número.",
    "Sempre arredonde para o dígito desejado verificando o próximo número.",
    "Divida números decimais movendo a vírgula para transformar o divisor em um número inteiro.",
    "Ao elevar um número negativo a uma potência ímpar, o resultado será negativo.",
    "Para converter uma fração em decimal, divida o numerador pelo denominador.",
    "Multiplicar por 10, 100 ou 1.000 é só mover a vírgula decimal para a direita.",
    "Para encontrar o valor de x em uma equação, isole-o em um dos lados.",
    "O produto de dois números primos sempre será único.",
    "O quadrado de qualquer número inteiro é sempre positivo.",
    "Ao comparar frações, transforme-as para um denominador comum.",
    "A soma dos ângulos internos de um triângulo sempre será 180°."
];

function displayMathTipsIntercalated() {
    const tipsContainer = document.getElementById('tipsMath'); // pego a tag <p> pelo ID = tipsMath
    let currentTipIndex = 0;  // crio uma variavel para armazenar o "index/posição"

    setInterval(() => { //função anônima para setar um intervalo de tempo 
        tipsContainer.textContent = mathTips[currentTipIndex]; //adiciona uma dica no elemento <p> conforme o index

        currentTipIndex++; // incrementa +1 no index pra trocar a dica

        //Zera o index para as dicas reiniciarem
        if (currentTipIndex >= mathTips.length) {
            currentTipIndex = 0;
        }
    }, 5000); 
}

displayMathTipsIntercalated();


