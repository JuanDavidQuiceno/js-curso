class Persona {
    static _contadorPersonas = 0;

    static get contadorPersonas() {
        return `Contador Personas: ${Persona._contadorPersonas}`;
    }

    nombre = '';
    apellido = '';
    edad = '';
    sexo = '';

    constructor(nombre = 'Sin Nombre', apellido = 'Sin Apellido', edad = 'Sin Edad', sexo = 'Sin Sexo') {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;

        Persona._contadorPersonas++;
    }
    // set y get
    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        // capitalizar el nombre entrante
        this.nombre = nombre.toUpperCase();
    }

    get getApellido() {
        return this.apellido;
    }

    set setApellido(apellido) {
        // capitalizar el apellido entrante
        this.apellido = apellido.toUpperCase();
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Edad: ${this.edad}, Sexo: ${this.sexo}`);
    }
}

class Hero extends Persona {
    poder = '';
    constructor(nombre, apellido, edad, sexo, poder) {
        super(nombre, apellido, edad, sexo);
        this.poder = poder;
    }
    mostrarDatos() {
        super.mostrarDatos();
        console.log(`Poder: ${this.poder}`);
    }
}

const juan = new Hero('Juan', 'Perez', 30, 'M');
// const pepito = new Persona('Pepito', 'Perez', 25, 'M');
juan.mostrarDatos();
// pepito.mostrarDatos();

// console.log('Contador Personas: ', Persona._contadorPersonas);
console.log(Persona.contadorPersonas);
