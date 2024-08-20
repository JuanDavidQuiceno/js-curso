import _ from 'underscore';
// Esta función crea un nuevo deck
/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposCartas 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} retorna un deck de cartas
 */

export const crearDeck = (tiposCartas, tiposEspeciales) => {
    if (!tiposCartas || !tiposEspeciales) {
        throw 'Se requieren los tipos de cartas y los tipos especiales';
    }
    if (tiposCartas.length === 0 || tiposEspeciales.length === 0) {
        throw 'Los tipos de cartas y los tipos especiales no pueden estar vacios';
    }

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCartas) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposCartas) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}