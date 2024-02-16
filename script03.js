const calculadoraDemedia = (numeros) =>{
    let soma = 0;
    for(let numero of numeros){
        soma += numero;
    }
    let media = soma/numeros.length;
    return media;
}

let numeros =[10,7,8,10];

console.log(calculadoraDemedia(numeros));