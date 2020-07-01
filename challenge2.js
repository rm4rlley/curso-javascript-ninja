// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(num1, num2){
    return num1 + num2
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var total = soma(1,2) + 5

// Qual o valor atualizado dessa variável?
console.log(total)

// Declare uma nova variável, sem valor.
var newVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionarValor(){
    newVar = 2
    return `O valor da variável agora é ${newVar}`
}

// Invoque a função criada acima.
console.log(adicionarValor())

// Qual o retorno da função? (Use comentários de bloco).
/**
 * O valor da variável agora é 2
 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function novaFuncao(arg1, arg2, arg3){
    if(arg1 === undefined || arg2 === undefined || arg3 === undefined){
        return 'Preencha todos os valores corretamente!'
    } else {
        return ( arg1 * arg2 * arg3 ) + 2
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(novaFuncao(1,2))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(novaFuncao(1,2,3))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function testeLogico(arg1, arg2, arg3){
    
    var result;

    switch (arguments.length) {
        case 0:
            result = false;
            break;
        case 1:
            result = arguments[0];
            break;
        case 2:
            var result = Object.values(arguments).reduce((total, arg) => total + arg);
            break;
        case 3:
            var result = (arg1 + arg2) / arg3;
        default:
            var result = null;
            break;
    }

    return result
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(testeLogico()) //false

console.log(testeLogico(1)) //1

console.log(testeLogico(1,2)) //3

console.log(testeLogico(1,2,3)) //3

