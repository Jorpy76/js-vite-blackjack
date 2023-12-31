/**NOTE:
   "Esta función permite tomar una carta"
    @param {array<String>} deck es un arreglo del deck
    @returns {String} retorna la carta del deck
*/

export const pedirCarta = (deck) => {

  // let deck = []

  if (!deck || deck.length === 0) {
    throw new Error('No hay cartas en el deck');
  }
  const carta = deck.pop();
  return carta;
}
