import _ from "underscore";

/**NOTE:
    "Esta funcion crea un nuevo deck"
    @param {array<String>} tiposDeCarta
    @param {array<String>} tiposEspeciales
    @returns {array<String>} retorna un nuievo deck de cartas
*/
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error('Tipodecarta es obligatorio');

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
}
