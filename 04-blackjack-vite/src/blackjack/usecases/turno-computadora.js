import { pedirCarta, valorCarta, crearCartaHTML } from './';

/**
 * 
 * @param {Number} puntosMinimos  Puntos mínimos para ganar la computadora
 * @param {Array<HTMLElement>} puntosHTML Puntos de la computadora y del jugador
 * @param {HTMLElement} divCartasComputadora Div donde se mostrarán las cartas de la computadora
 * @param {Array<String>} deck Deck de cartas
 * 
 */
// turno de la computadora
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck) => {
    if (!puntosMinimos) {
        throw 'Se requieren los puntos mínimos para la computadora';
    }
    if (!puntosHTML) {
        throw 'Se requieren los puntos de la computadora y del jugador';
    }

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}