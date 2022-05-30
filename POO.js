function persona(nombre, edad) {         //Esto es una clase del objeto "persona"
    this.nombre = nombre;                //Variable pública, se puede llamar desde afuera a esta propiedad con la palabra reservada "this"
    this.edad = edad;
    let dni = "41150436";                //Variable privada, nadie externo puede llamar a esta propiedad 

    this.getDni = function () {          //Esto es un método, siempre se crea con "this." y el nombre del método
        return dni;
    }

    this.saludar = function () {
        console.log("Hola soy " + nombre + " tengo " + edad + " años, mi dni es " + this.getDni());
    }
}

let objetoPersona = new persona("Tomas zabala", 23);               //Esta es una instancia de la clase, siempre hay q instanciar la clase para trabajar con el objeto
let objPersona = new persona("Camila Castro", 25);

objetoPersona.saludar();
objPersona.saludar();