export function calcucatePrice({ price }, numberOfReservedSeats) {
  if (numberOfReservedSeats === 0) {
    return price;
  }

  return price * numberOfReservedSeats;
}
