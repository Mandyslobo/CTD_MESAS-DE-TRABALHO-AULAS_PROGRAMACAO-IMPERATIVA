const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a, b) {
        let pontoP1= 0;
        let pontoP2 = 0;

    for (let i = 0; i < a.length; i++) {
        
        if (a[i] > b[i]) { pontoP1++ }
        else if (a[i] < b[i]) {pontoP2++}
        else {
            pontosPart1 = pontosPart1;
            pontosPart2 = pontosPart2;
        }
    }  

    if (pontoP1 > pontoP2) { vencedor = 'Participante 1 venceu!'; }
    else if (pontoP1 < pontoP2) { vencedor = 'Participante 2 venceu'; }
    else { vencedor = 'empate'}

    return vencedor
};

console.log("O ganhador é: " + encontrarGanhador(alicia, bob))
