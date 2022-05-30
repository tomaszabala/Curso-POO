class Cuenta {
    constructor(_titular, _cantidad){

    }

    set estableceTitular(titular){
        this._titular = titular;
    }

    get regresaTitular(){
        return this._titular;
    }

    set estableceCantidad(cantidad){
        this._cantidad = cantidad;        
    }

    get regresaCantidad(){
        return this._cantidad;
    }

    mostrar(){
        console.log("El titular es: " + this._titular + " y la cantidad es: " + this._cantidad);        
    }

    ingresarCantidad(_cantidad){
        if (_cantidad<0) {
            console.log("Error");
        }
        if (_cantidad>0) {
            console.log(_cantidad);
        }
    }
}

let objetoCuenta = new Cuenta();
objetoCuenta._titular = "Tomas Zabala";
objetoCuenta._cantidad = 25;
objetoCuenta.ingresarCantidad(5);
objetoCuenta.ingresarCantidad(20);
objetoCuenta.ingresarCantidad(-1);      //No se como hacer para q el atributo se modifique SÓLO ingresando o retirando dinero.
//"se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada." como se hace esto?
objetoCuenta.mostrar();
