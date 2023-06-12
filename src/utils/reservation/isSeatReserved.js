export function isSeatReserved(reservationInfo, seat) {
  const reservedSeats = reservationInfo?.seats;

  if (!reservedSeats) {
    return false;
  }

  const seatNumber = seat.number;
  const isSeatAlreadyReserved = reservedSeats.includes(seatNumber);

  if (!isSeatAlreadyReserved) {
    return false;
  }

  return true;
}
