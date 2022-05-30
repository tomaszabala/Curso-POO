class Persona {
    constructor(_nombre, _edad, _dni){      //Puedo dejar los datos vacíos ya que utilizo SET y GET.
    
    }

    set estableceDni(dni){
        this._dni = dni;
    }

    get regresaDni(){
        return this._dni;
    }

    set estableceNombre(nombre){
        this._nombre = nombre;
    }

    get regresaNombre(){
        return this._nombre;
    }

    set estableceEdad(edad){
        this._edad = edad;
    }

    get regresaEdad(){
        return this._edad;
    }

    mostrar(){
        console.log("Mi nombre es " + this._nombre + " tengo " + this._edad + " y mi dni es: " + this._dni);
    }

    esMayorDeEdad(_edad){
        if (this._edad < 18) {
            console.log("No es mayor de edad");
        }
        if (this._edad >= 18) {
            console.log("Es mayor");
        }
    }
    
}

let objetoPersona = new Persona("Tomas zabala", 23);        //Creo la instancia del obj
objetoPersona.estableceNombre = "Tomas zabala";     //Seteo los atributos
objetoPersona.estableceEdad = 23;
objetoPersona.estableceDni = "41254532";
objetoPersona.mostrar();        
// console.log(objetoPersona);
objetoPersona.esMayorDeEdad();