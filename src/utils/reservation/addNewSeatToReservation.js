export function addNewSeatToReservation(reservationInfo, seat) {
  const reservedSeats = reservationInfo?.seats;

  if (!reservedSeats) {
    return [];
  }

  const seatNumber = seat.number;
  const isSeatAlreadyReserved = reservedSeats.includes(seatNumber);

  if (isSeatAlreadyReserved) {
    return reservedSeats.filter((f) => f !== seatNumber);
  }

  return reservedSeats.concat(seatNumber);
}
