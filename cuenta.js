var cuenta = {
    titular: "alex",
    saldo: 0,
    ingresar: function (monto) {
        console.log("Se consigna: " + monto );  
        this.saldo= this.saldo+monto;
    },
    estraer: function (monto) {
        console.log("Se retira: " + monto );  
        this.saldo= this.saldo-monto;    
    },
    informar: function () {
        console.log("Nombre del Titular: ", this.titular);
        console.log("El saldo de su cuenta es: " + this.saldo );  
    }
};
console.log(cuenta.titular);
console.log(cuenta.saldo);
console.log('------------');
console.log(cuenta.ingresar(80));
console.log(cuenta.estraer(20));
console.log(cuenta.informar());  