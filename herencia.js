class Persona {
    constructor(nombre, edad) {
        this.nombrePersona = nombre;
        this.edadPersona = edad;
    }

    datosPersona () {
        return ("Nombre: " + this.nombrePersona + " " + "Edad: " + this.edadPersona);
    }
}

class Alumno extends Persona {
    constructor(nombre, edad, matricula) {
        super(nombre, edad);
        this.matriculaAlumno = matricula;
    }

    mostrarDatos(){
        console.log("Alumno" + super.datosPersona() + " Matricula " + this.matriculaAlumno);
    }
}

class Profesor extends Persona {
    constructor(nombre, edad){
        super(nombre, edad);
    }
    set sDepartamento(valor){
        this.departamento = valor;
    }
    get gDepartamento() {
        return this.departamento;
    }

    mostrarDatos() {
        console.log("Profesor " + super.datosPersona() + "Departamento " + this.departamento);
    }
}

// let ObjPersona = new Persona("Tomas Zabala", 34);
// console.log(ObjPersona.datosPersona());

let ObjAlumno = new Alumno("Tomas Zabala", 23, "1392848");
console.log(ObjAlumno.datosPersona());
ObjAlumno.mostrarDatos();

let ObjProfesor = new Profesor("Juan Perez", 40);
ObjProfesor.sDepartamento = "TIC";
ObjProfesor.mostrarDatos();

class Pava{
    constructor(marca, material){
        this.marca = marca;
        this.material = material;
    }

    presentacionPava(){
        console.log("La marca de esta pava es: " + this.marca + " y el material es: " + this.material);
    }
}

let objPava = new Pava("Liliana", "acero");
objPava.presentacionPava();