import { useContext } from "react";

import { ReservationInfo } from "../../pages/Reservation";
import { ErrorForm } from "../common/ErrorForm";

export function SurnameInput() {
  const { validationErrors, setReservationInfo, reservationInfo } =
    useContext(ReservationInfo);

  return (
    <ErrorForm name={"Surname"} validationErrors={validationErrors}>
      <div className="flex flex-row py-4 justify-between">
        <span>Your surname:</span>
        <input
          className="ml-4"
          value={reservationInfo.surname ?? ""}
          onChange={(event) =>
            setReservationInfo({
              ...reservationInfo,
              surname: event.target.value,
            })
          }
          type="text"
        />
      </div>
    </ErrorForm>
  );
}
