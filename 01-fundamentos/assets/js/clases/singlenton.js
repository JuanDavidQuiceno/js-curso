
class Singlenton {

    static instance;
    nombre = '';

    constructor(nombre = '') {
        if (!!Singlenton.instance) {
            return Singlenton.instance;
        }
        Singlenton.instance = this;
        this.nombre = nombre;
        console.log(Singlenton.instance);
        return this;
    }
}

const intancia1 = new Singlenton('Ironman');
const intancia2 = new Singlenton('Juan');
console.log('nombre intancia1:', intancia1.nombre);
console.log('nombre intancia2:', intancia1.nombre);