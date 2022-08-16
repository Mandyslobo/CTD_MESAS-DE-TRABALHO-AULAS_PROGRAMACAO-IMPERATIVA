//EXERCICIO 1 
let y = 9;
let x = 5;
console.log( (x < 10) && (x !==5) );
console.log( (x > 9) || (x === 5) );
console.log(!(x===y));
//1.
console.log(!true);
//Resposta: false

//2.
console.log(!false);
//Resposta: true

//3.
console.log(!!false, true);
//Resposta: false true

//4.
console.log(!!true);
//Resposta: true

//5.
console.log(!1);
//Resposta: false

//6.
console.log(!!1);
//Resposta: true

//7.
console.log(!0);
//Resposta: true

//8.
console.log(!!0);
//Resposta: false

//9.
console.log(!!"");
//Resposta: false

//10.
console.log(x = 5);
//Resposta: 5

//EXERCICIO 2 
//1. Resposta Amanda: True
let x = 10;
let y = "a";
console.log(y=== "b" || x >= 10);
//Resposta console: True

//2. Resposta Amanda: False
let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y)
//Resposta console: False

//3. Resposta Amanda: False
let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito)
//Resposta console: False
