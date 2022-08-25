const alice = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a, b) {
        let pontoAlice= 0;
        let pontoBob = 0;

    for (let x = 0; x < a.length; x++) {
        
        if (a[x] > b[x]) { pontoAlice++ }
        else if (a[x] < b[x]) {pontoBob++}
        else {
            pontoAlice = pontoAlice;
            pontoBob = pontoBob;
        }
    }  

    if (pontoAlice > pontoBob) { vencedor = 'Alice venceu!'; }
    else if (pontoAlice < pontoBob) { vencedor = 'Bob venceu'; }
    else { vencedor = 'empate'}

    return vencedor
};

console.log("O ganhador é: " + encontrarGanhador(alice, bob))
