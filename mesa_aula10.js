//let numbers =[22, 33, 54, 66, 72]
 //console.log(numbers[numbers.length]); // indefinido

 //let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
 //console.log(grupoDeAmigos[1][0]); // spiderman

 //let str = "uma string qualquer"
 //let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
 //console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]); // erro


 // ARRAY INVERTIDO
let array = ['Amanda', 'Laura', 'Flavio', 'Ligia', 'Danilo'];
console.log(array);

//1.ImprimirInverso
function imprimirInverso(array) {
    let length = array.length;
    for (var x = length - 1; x >= 0; x --) {
        console.log(array[x]);
    }
    return ''
}
console.log(imprimirInverso(array));

//2.Inverter
function inverter(array) {
    let inverter = array.reverse();
    return inverter
}
console.log(inverter(array));

//SOMAR ARRAY
let somarA = [1,2,3]
let somarB = [10,3,10,4]
let somarC = [-5,100]
function somarArray(array) {
    let arraySoma = array;
    let somar = 0;
    for (var x = 0; x < arraySoma.length; x ++) {
        somar += arraySoma[x];
    }
    return somar
}
console.log(somarArray(somarA), somarArray(somarB), somarArray(somarC));

//ARRAY.JOIN
let arrayJoin = ['a','m','a','n','d','a']
console.log(arrayJoin.join(''));

//COLEÇÕES DE FILMES
//1.
var filmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

//2.
function arrayToUpperCase(array) { 
    let upper = array.map(element => {
        return element.toUpperCase();
      });
    return upper
}
console.log(arrayToUpperCase(filmes));

//3.
var animacao = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];
function juntaArray(array0, array1) {
    let arr0 = arrayToUpperCase(array0);
    let arr1 = arrayToUpperCase(array1);
    for (var x = 0; x < arr1.length; x ++) {
        arr0.push(arr1[x]);
    }
    return arr0
}
console.log(juntaArray(filmes, animacao));

let arrayJunta = juntaArray(filmes, animacao);

//4.
var jogoIntruso = arrayJunta.pop()
console.log(jogoIntruso);
console.log(arrayJunta)

//5.
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparaArray(arr0,arr1) {
    if (arr0.length != arr1.length){
        return "False";
    } else {
        for (var x = 0; x < arr0.length; x ++)
        if (arr0[x] != arr1[x])
         return "False";
         return "True";
    } 
}

console.log(comparaArray(asiaScores, euroScores));