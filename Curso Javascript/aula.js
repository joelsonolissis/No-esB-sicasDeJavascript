// variaveis declaração 
let idade = 5;
var nome = "Joelson";

// Mostrar valor da variavel na tela 
console.log(idade);
console.log(nome);

// Constantes 
const valorIngressoAdulto = 20;

// Tipos primitivos do javascript
// string, int, float...
let corSelcionado = null // redefinir um valor 

// Objectos
let pessoa = {
    Nome: 'Joelson Morais',
    Idade: 20,
    estadoCivil: 'Solteiro',
    Altura: 1.69

};

// Arrays
let familia = [17,18,20,16,44];
console.log(familia);
console.log(familia.length);

//functions
let corSite = "azul";
function resetaCor(){
corSite = "";
};

console.log(corSite);
resetaCor();
console.log(corSite);

// Tipos de funções
// 1 - Realiza uma tarefa e não devolve nada 
function mostrarNome(){
    console.log('Joelson');
};
mostrarNome();
// 2 - Realiza uma tarefa e retorna  um valor
function somarNumeros(){
    let n = 20;
    let n1 = 20;
    return n1+n;
};
let resultado = somarNumeros();
console.log(resultado);

//Operadores de Igualdade 
// === compara o valor e o tipo do valor
console.log(1 === 1);
console.log('1'===1);
// == compara o valor apenas das váriaveis
console.log('1'==1);

// operador ternário
let pontos = 100;
let tipo = pontos >100 ? 'premin' : 'comum';
console.log(tipo);

let a = 'vermelho';
let b = 'azul';
let c;

c = a;
a = b;
b = c;
console.log(a);
console.log(b);

// Switch
let permissao = 'diretor';

switch(permissao){
    case 'comum':
        console.log('usuário comum');
    break;
    case 'gerente':
        console.log('usuário gerente');
    break;
    case 'diretor':
        console.log('usuário diretor');
    break;
    default:
        console.log('Usuário não reconhecido');
}

// FOR...IN

const pessoaTres = {
    nome: 'Joelson',
    idade:20,
    altura: 1.70
}
for(let chave in pessoaTres){
    console.log(chave,pessoaTres['nome']);
}

const cores = ['Azul','Vermelho','Verde'];
for(let indice in cores){
    console.log(indice, cores[indice]);
}

//FOR...OF
for(let cor of cores){
    console.log(cor);
}