let pessoas = [
    {
        altura: 1.65,
        sexo: 'F'
    },
    {
        altura: 1.80,
        sexo: 'M'
    },
    {
        altura: 1.82,
        sexo: 'M'
    },
    {
        altura: 1.73,
        sexo: 'F'
    },
    {
        altura: 1.50,
        sexo: 'F'
    },
    {
        altura: 1.71,
        sexo: 'F'
    },
    {
        altura: 1.89,
        sexo: 'M'
    },
    {
        altura: 2.03,
        sexo: 'M'
    },
    {
        altura: 1.62,
        sexo: 'F'
    },
    {
        altura: 1.51,
        sexo: 'F'
    },
    {
        altura: 1.78,
        sexo: 'F'
    },
    {
        altura: 1.85,
        sexo: 'M'
    },
    {
        altura: 1.77,
        sexo: 'F'
    },
    {
        altura: 1.97,
        sexo: 'M'
    },
    {
        altura: 1.90,
        sexo: 'M'
    }
]

//maior e a menor altura do grupo;
const maiorMenorAltura = array => {
    let maior = 0;
    let menor = array[0].altura;

    for (let i = 0; i < array.length; i++) {
        let auxAlt = array[i];
        if (auxAlt.altura < menor) {
            menor = auxAlt.altura
        } else if (auxAlt.altura > maior) {
            maior = auxAlt.altura
        }
    };
    console.log('A maior altura do grupo é  ' + maior);
    console.log('A menor altura do grupo é  '  + menor);
};

maiorMenorAltura(pessoas)

//média de altura das mulheres;
const mediaAltura = array => {
    let media = 0;
    let qtdSex = 0;
    let altSoma = 0;

    for (i = 0; i < array.length; i++) {
        var sexAux = array[i];
        if (sexAux.sexo === 'F') {
            qtdSex++;
            altSoma += sexAux.altura;
        }
    }
    media = altSoma / qtdSex;
    return media
};

console.log('A média de altura das mulheres é de ' + mediaAltura(pessoas));

//número de homens.
const qtdHomens = array => {
    let qtd = 0;
    for (i = 0; i < array.length; i++) {
        var sexAux = array[i];
        if (sexAux.sexo === 'M') {
            qtd++
        }
    }
    return qtd;
};
console.log('A quantidade de homens no grupo é: ' + qtdHomens(pessoas))





