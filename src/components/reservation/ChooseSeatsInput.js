import { useContext } from "react";

import { ReservationInfo } from "../../pages/Reservation";
import { addNewSeatToReservation } from "../../utils/reservation/addNewSeatToReservation";
import { isSeatReserved } from "../../utils/reservation/isSeatReserved";
import { ErrorForm } from "../common/ErrorForm";

export function ChooseSeatsInput() {
  const { validationErrors, setReservationInfo, reservationInfo, seats } =
    useContext(ReservationInfo);

  return (
    <div className="basis-1/4">
      <span>Choose seats: </span>
      <ErrorForm name={"Seats"} validationErrors={validationErrors}>
        {seats.map((seat) => (
          <div key={seat.id}>
            <input
              type="checkbox"
              checked={isSeatReserved(reservationInfo, seat)}
              onChange={() =>
                setReservationInfo({
                  ...reservationInfo,
                  seats: addNewSeatToReservation(reservationInfo, seat),
                })
              }
              disabled={seat.available}
            />
            {seat.number}
          </div>
        ))}
      </ErrorForm>
    </div>
  );
}
