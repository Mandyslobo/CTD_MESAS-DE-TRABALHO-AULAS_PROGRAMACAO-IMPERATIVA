//CICLOS E REPETIÇÕES
//1.
let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "a vida é bela"];

for (var x = 0; x < filmes.length; x ++) {
    filmes[x] = filmes[x].toUpperCase()
};

console.log(filmes);

//2.
let animacao = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];
let arrayJunto = null;
function juntarArray(arrey0, arrey1) {
    for (var x = 0; x < arrey1.length; x ++) {
        arrey0.push(arrey1[x].toUpperCase())
    };
    return arrayJunto = arrey0;
};
juntarArray(filmes, animacao);
console.log(arrayJunto);

//3.
let tiraFilme = arrayJunto.pop();
console.log(tiraFilme);
console.log(arrayJunto);

//4.
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
function comparar(arr0, arr1) {
    let resultadoCompara = [];
    for (let x = 0; x < arr1.length; x ++) {
        resultadoCompara[x] = arr0[x] === arr1[x]
    };
    return resultadoCompara;
}
console.log(comparar(asiaScores, euroScores));

//APLICATIVO PARA UM CONCURSO
//1.
let participanteA = [5, 8, 4, 9, 5];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];

//2.
function pontuacaoMedia(participante) {
    let media = 0;
    let soma = 0;

    for (let x = 0; x < participante.length; x++) {
        soma += participante[x]
    };
    return soma / participante.length;
}

console.log(pontuacaoMedia(participanteA));
console.log(pontuacaoMedia(participanteB));
console.log(pontuacaoMedia(participanteC));

//3.
function pontuacaoMaior(participante) {
    let valorAtual = 0;

    for (let x = 0; x < participante.length; x ++) {
        if (participante[x] > valorAtual) {
            valorAtual = participante[x]
        };
    };
    return valorAtual;
}

console.log(pontuacaoMaior(participanteA));
console.log(pontuacaoMaior(participanteB));
console.log(pontuacaoMaior(participanteC));

//4.
function competicao(participanteA, participanteB, participanteC) {
    const participantes = [
        ["Participante A", participanteA],
        ["Participante B", participanteB],
        ["Participante C", participanteC],
    ];
    let vencedorMedia = 0;
    let vencedorMediaNome = "";
    let vencedorNotaMaior = 0;
    let vencedorNotaMaiorNome = "";
    for (let x = 0; x < participantes.length; x ++) {
        const participanteMedia = pontuacaoMedia(participantes[x][1]);
        if (participanteMedia > vencedorMedia) {
            vencedorMedia = participanteMedia
            vencedorMediaNome = participantes[x][0]
        };
        const participanteNotaMaior = pontuacaoMaior(participantes[x][1]);
        if (participanteNotaMaior > vencedorNotaMaior) {
            vencedorNotaMaior = participanteNotaMaior
            vencedorNotaMaiorNome = participantes[x][0]
        };
    };
    console.log(
        "Na categoria Melhor Média o ganhador foi " +
        vencedorMediaNome +
        " com a pontuação de: " +
        vencedorMedia
    );

    console.log(
        "Na categoria Maior e-tip o ganhador foi " +
        vencedorNotaMaiorNome +
        " com a pontuação de: " +
        vencedorNotaMaior
    );
}

competicao(participanteA, participanteB, participanteC);

