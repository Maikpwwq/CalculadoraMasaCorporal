function indiceMasaCorporal (peso, estatura) {
    imc = peso/(estatura*estatura);
    if (imc<=15) {
        Rango= console.log ('Rango: delgadez muy severa');
        alert('Rango: delgadez muy severa');        
    } 
    else if (imc>15 & imc<15,9) {
        console.log ('Rango: delgadez severa');
        alert('Rango: delgadez severa');        
    }
    else if (imc>16 & imc<18,4) {
        console.log ('Rango: delgadez');
        alert('Rango: delgadez');  
    }
    else if (imc>18,5 & imc<24,9) {
        console.log ('Rango: peso saludable');
        alert('Rango: peso saludable');       
    }
    else if (imc>25 & imc<29,9) {
        console.log ('Rango: sobrepeso');
        alert('Rango: sobrepeso');            
    }
    else if (imc>30 & imc<34,9) {
        console.log ('Rango: obesidad severa');
        alert('Rango: obesidad severa');        
    }
    else if (imc>=40) {
        console.log ('Rango: obesidad morbida');
        alert('Rango: obesidad morbida');       
    }
    else {
        console.log ('los datos no concuerdan con el rango');
        alert('los datos no concuerdan con el rango');        
    }    
} 