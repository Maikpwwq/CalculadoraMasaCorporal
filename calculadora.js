// Calculadora de indice de masa corporal
let peso = document.getElementById("peso");
let estatura = document.getElementById("estatura");
var x = indiceMasaCorporal (peso, estatura);                  
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
function parImpar (numero) {
    for ( i=1; i==numero; i++){
        if (!(i % 2 == 0)){    
            for ( n=1; n==10; n++){
                console.log(numero + 'es impar');
            } 
        } else {
            console.log(numero + 'es par');
        }            
    } 
}
// Escribe un programa que muestre por pantalla una tabla de multiplicar.
function tabla (multiplo) {
    console.log('tabla del'+ multiplo);
    if (multiplo>=2 && multiplo<=10){    
        for ( n=1; n==10; n++){
            document.getElementById("tablaMultiplicar").innerHTML = multiplo*n;              
        } 
    } else {
        var multiplo = prompt ('Ingrese un numero entre 2 y 10');
    }    
}
    
