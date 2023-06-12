import { isArrayEmpty } from "../isArrayEmpty";

export function validateReservationInfo(reservationInfo) {
  if (!reservationInfo) {
    return [];
  }

  const { seats, name, surname } = reservationInfo;

  let error = [];

  if (isArrayEmpty(seats)) {
    error.push({ type: "Seats", text: "Choose seats" });
  }
  if (!name) {
    error.push({ type: "Name", text: "Write your name" });
  }
  if (!surname) {
    error.push({ type: "Surname", text: "Write your surname" });
  }

  return error;
}
