
function maiorNumero(n1,n2){
let maior;
    n1>n2 ? maior = n1 : maior=n2;
    return maior

}

console.log(maiorNumero(100,300));
// Fizz Buzz n divisil por 3 = fizz // n divisivel por 5 = buzz 
// pelos dois = fizzBuzz 
// por nenhum = entrada
// n não for uma numero retornar não é um número
function fizzBuzz(entrada){
if(typeof(entrada)=="number"){
if(entrada%3===0){
    console.log('Fizz')
}else if(entrada%5===0){
    console.log('Buzz');
}else{
    console.log(entrada);
}

}else{
    console.log('Não é um número');
}
}
fizzBuzz(101);

function verificarVelocida(velocidade){
   
    if(velocidade <= 70)
        console.log('OK');
    else
        // const pontos = Math.floor(((velocidade-70)/5));
        if(pontos >=12)
            console.log('Carteira suspensa');
        else
            console.log('Pontos', pontos);
    
}

// Factory Functions ( Função de fábrica)
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
   return{
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar () {
        console.log("Fazendo ligação...")
    }

}
}
const celular1 = criarCelular('IphoneX',5.9,1000);
console.log(celular1);

// Clonar um objecto

const novoObject = Object.assign({},celular1);

console.log(novoObject);

// outra forma de clonar 
const objecto2 = {...celular1};
console.log(objecto2);
