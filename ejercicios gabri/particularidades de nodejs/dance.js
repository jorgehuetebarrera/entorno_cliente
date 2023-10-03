const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin) {
  if (pin.length !== 4 || !/^\d{4}$/.test(pin)) {
    return "Invalid input";
  }

  const danceEquivalent = [];
  for (let i = 0; i < 4; i++) {
    const digit = parseInt(pin[i]);
    const moveIndex = (digit + i) % MOVES.length;
    danceEquivalent.push(MOVES[moveIndex]);
  }

  return danceEquivalent;
}