// Classe MATH
Math.random();

console.log(Math.max(3,4,5,6,10));

const mensagem = 'Minha primeira mensagem';

const outraMensagem = new String('Bom dia');
console.log(mensagem.includes('Minha')); // Verificar se uma palava existe na string
console.log(mensagem.startsWith('primeira')); // Verificar se a string começa com uma palavra
console.log(mensagem.endsWith('mensagem')); // Verificar se a string termina com uma palavra
console.log(mensagem.trim()); // Tira os espaços no inicio e final da string
 // Template Literal

 const mensagem1 = 'Oi isso é a minha\n \'primeira\' mensagem';

 const outra = `Oi isso é a minha 'segunda' mensagem`;

 // datas 
 const data1 = new Date();
 const date2 = new Date('April 09 1999 05:10');
 const date3 = new Date(2019,02,06,9,30);

 // Criar um objecto postagem 
 function Postagem(titulo,mensagem,autor){
     this.titulo = titulo,
     this.mensagem = mensagem,
     this.autor = autor,
     this.vizualizacoes = 0,
     this.comentarios = [],
     this.estaAoVivo = false
 }

 let postagem = new Postagem('a','b','c');
 console.log(postagem);

 const numeros = [1,2,3];
 console.log(numeros.includes(2));
 numeros.unshift(0); // inclui um elemnto no inicio do array
 console.log(numeros);
 numeros.splice(2,0,1.5); // insere no meio (indice, valor a remover,valor a incluir)
 console.log(numeros);
 numeros.push(4); // adiciona um elemento no final do array
 console.log(numeros);

console.log(numeros.indexOf(2)); // Descobrir se um elemnto existe no array (retorna o indice do elemento se existir)
// Achar um elemento em um array de um object 
const marcas = [
     {id:1, nome: 'a'},
     {id:2, nome: 'b'},
 ];
 const marca = marcas.find(function(marca){
     return marca.nome === 'a';
 });
 console.log(marca);
 
// Remover elemntos no array 
numeros.pop(); // remover no fim do array
console.log(numeros);
numeros.shift(); // remover no inicio do array
console.log(numeros);
numeros.splice(2,1);
console.log(numeros);

// Esvaziando um array
let numero = [1,2,3,4];
// solução 1 
numero = []; // se usando um let com um const não dá
console.log(numero);
// solução 2 
numeros.length = 0;
console.log(numeros);

// Combinar e dividir arrays 
const n = [1,2,3,4,5,6,7,8];
const n1 = [9,10,11,12,13,14,15];

const combinado = n.concat(n1);
console.log(combinado);

const dividido = combinado.slice(0,9);
console.log(dividido);
// usando o spread 
const combinar = [...n,'%'];
console.log(combinar);

// FOREACH
const pares = [2,4,6,8,10,12,14];

pares.forEach(function(par){
    console.log(par);
})


 