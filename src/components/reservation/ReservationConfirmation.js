import React, { useContext } from "react";

import { getNormalDate } from "../../utils/getNormalDate";
import { Price } from "../common/Price";

const ReservationReceipt = React.createContext();

export function ReservationConfirmation({ reservationReceipt }) {
  if (!reservationReceipt) {
    return;
  }

  return (
    <div className="flex flex-col">
      <span>Reservation has been made successfully!</span>
      <span>Your ticket information:</span>

      <div className="bg-slate-100 py-3 pl-2">
        <ReservationReceipt.Provider value={{ reservationReceipt }}>
          <Route />
          <Seats />
          <PassengerName />
        </ReservationReceipt.Provider>
        <Price data={reservationReceipt} />
      </div>
    </div>
  );
}

function PassengerName() {
  const { reservationReceipt } = useContext(ReservationReceipt);

  return (
    <div className="pb-1">
      <span>
        Name and surname:
        {" " + reservationReceipt.name + " " + reservationReceipt.surname}
      </span>
    </div>
  );
}

function Seats() {
  const { reservationReceipt } = useContext(ReservationReceipt);

  return (
    <div className="pb-1">
      <span>Your seats: {reservationReceipt.seats.map((seat) => seat)}</span>
    </div>
  );
}

function Route() {
  const { reservationReceipt } = useContext(ReservationReceipt);

  return (
    <div className="flex flex-row">
      <span>
        {reservationReceipt.from} {getNormalDate(reservationReceipt.departure)}
      </span>
      <img className="w-6 h-7 mx-2" src="/reservation/arrow.svg" alt="" />
      <span>
        {reservationReceipt.to} {getNormalDate(reservationReceipt.arrival)}
      </span>
    </div>
  );
}
