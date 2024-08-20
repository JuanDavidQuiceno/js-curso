
class Retangulo {
    #area = 0;

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;

        this.#area = this.base * this.altura;
    }

    calcularArea() {
        console.log(`Area: ${this.#area}`);
    }

}
const retangulo = new Retangulo(10, 15);
// retangulo.#area = 100;

console.log(retangulo);