// Calculadora de indice de masa corporal
let peso = document.getElementById("peso");
let estatura = document.getElementById("estatura");
function indiceMasaCorporal (peso, estatura) {
    imc = peso/(estatura*estatura);
    if (imc<=15) {        
        document.getElementById("demo").innerHTML = 'Rango: delgadez muy severa';  
    } 
    else if (imc>15 & imc<15,9) {
        document.getElementById("demo").innerHTML = 'Rango: delgadez severa';  
    }
    else if (imc>16 & imc<18,4) {
        document.getElementById("demo").innerHTML = 'Rango: delgadez';  
    }
    else if (imc>18,5 & imc<24,9) {
        document.getElementById("demo").innerHTML = 'Rango: peso saludable';  
    }
    else if (imc>25 & imc<29,9) {
        document.getElementById("demo").innerHTML = 'Rango: sobrepeso';  
    }
    else if (imc>30 & imc<34,9) {
        document.getElementById("demo").innerHTML = 'Rango: obesidad severa';  
    }
    else if (imc>=40) {
        document.getElementById("demo").innerHTML = 'Rango: obesidad morbida';  
    }
    else {
        document.getElementById("demo").innerHTML = 'los datos no concuerdan con el rango';  
    }    
} 
// Recorre la serie escogiendo pares e impares 
let numero = prompt ('Ingrese un numero para terminar la serie');
function parImpar (numero) {
    for ( i=1; i<=numero; i++){
        if (!(i % 2 == 0)){    
            console.log(i + 'es impar'); 
        } else {
            console.log(i + 'es par');
        }            
    } 
}
parImpar (numero);
// Escribe un programa que muestre por pantalla una tabla de multiplicar.
function tabla (multiplo) {
    let multiplicacion= [];
    console.log('tabla del'+ multiplo);
    if (multiplo>=2 && multiplo<=10){    
        console.log('hola');
        
        for ( let n = 1; n <= 10; n ++){
            console.log('hola');
            multiplicacion[n - 1] = multiplo*n;
            document.getElementById("tablaMultiplicar").innerHTML = multiplicacion[n-1];              
            console.log(multiplicacion[n-1]);
        } 
    } else {
        var multiplo = prompt ('Ingrese un numero entre 2 y 10');
    }    
}
    
