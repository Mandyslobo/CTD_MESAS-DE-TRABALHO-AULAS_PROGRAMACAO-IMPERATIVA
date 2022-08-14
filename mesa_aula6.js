//CALCULADORA - NÍVEL I
//2.
function adicionar (a, b){
    return a + b;
}

console.log(adicionar(6,6));

//3.
function subtracao(a, b){
    return a - b;
}

console.log(subtracao(8,6));

//4.
function multiplicacao(a, b){
    return a * b;
}

console.log(multiplicacao(7,7));

//5.
function divisao(a, b){
    return a / b;
}

console.log(divisao(10,2));


//CALCULADORA - NÍVEL II
//1.
console.log("-----------Teste de Operações / Calculadora-----------");

//2.
console.log(adicionar(4,4));
console.log(subtracao(4,4));

//3.
console.log(multiplicacao(4,4));

//4.
console.log(divisao(4,4));

//5.
console.log(divisao(4,0));


//CALCULADORA - NÍVEL III - Funções Extras
//1.
function quadradoDoNumero(n){
    return multiplicacao(n,n);
}

console.log(quadradoDoNumero(6));

//2.
function mediaDeTresNumeros(x, y, z){
    return divisao((adicionar(x,y) + z), 3);
}

console.log(mediaDeTresNumeros(2,3,4));

//3.
function calculaPorcentagem (a, b){
    return divisao(multiplicacao(a, b), 50);
}

console.log(calculaPorcentagem(20, 30));

//4.
function geradorDePorcentagens(a, b) {
    return multiplicacao(divisao(a, b), 50)
}

console.log(geradorDePorcentagens(4, 400) + "%");
