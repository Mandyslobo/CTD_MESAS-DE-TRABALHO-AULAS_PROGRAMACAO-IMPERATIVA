console.log( Math.random() );

function cumprimentar() {
    console.log("Olá, Seja bem vindo!");
}
cumprimentar()

function cumprimentarA(nome) {
    const mensagem = "ola, seja bem vinda! "
    console.log (mensagem + nome)
}
cumprimentarA("Amanda");

function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5;
}

multiplicarPorDoisESomarCinco(1);
multiplicarPorDoisESomarCinco(5);
multiplicarPorDoisESomarCinco('Amanda');

const Amanda = 5;
multiplicarPorDoisESomarCinco(Amanda);

console.log(multiplicarPorDoisESomarCinco(Amanda));

const valor = multiplicarPorDoisESomarCinco(Amanda)
console.log(valor);

//Trabalhando com Funções
//Micro Desafio 1
function calculoMenos(x, y) {
    return x - y
}

console.log(calculoMenos(10,40));

//Micro Desafio 2
function calculoMultiplicar(x, y) {
    return x * y
    console.log(x);
    return x / 2
}

console.log(calculoMultiplicar(10));

// Funções Simples
//1.
function polegadaParaCentimetro(polegada) {
    return polegada * 4;
}
console.log(polegadaParaCentimetro(10));

//2.
function enderecoUrl(url) {
    return 'https://www.' + url + '.com'
}
console.log(enderecoUrl('google'));

//3.
function exclamacao(frase) {
    return frase + '!'
}

console.log(exclamacao('Olá mundo'))

//4.
function idadeCachorro(idade) {
    return idade * 7
}
console.log(idadeCachorro(11));

//5.
function salarioHora(salario) {
    return salario / 160
}
console.log(salarioHora(2400))

//6.
function calculoIMC(altura, peso) {
    let altura2 = altura **2;
    return peso / altura2;
}
console.log(calculoIMC(1.77, 74))

//7.
function paraMaiuscula(texto) {
    return texto.toUpperCase()
}
console.log(paraMaiuscula('Amanda'))

//8.
function tipoString(parametro) {
    console.log(typeof parametro);
}

tipoString(4)

//9.
function retornarCircunferencia(raio) {
    return 2 * Math.PI * raio;
}
console.log(retornarCircunferencia(70));