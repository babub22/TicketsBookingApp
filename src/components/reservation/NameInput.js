import { useContext } from "react";

import { ReservationInfo } from "../../pages/Reservation";
import { ErrorForm } from "../common/ErrorForm";

export function NameInput() {
  const { validationErrors, setReservationInfo, reservationInfo } =
    useContext(ReservationInfo);

  return (
    <ErrorForm name={"Name"} validationErrors={validationErrors}>
      <div className="flex flex-row justify-between">
        <span>Your name:</span>
        <input
          className="ml-4"
          value={reservationInfo.name ?? ""}
          onChange={(event) =>
            setReservationInfo({
              ...reservationInfo,
              name: event.target.value,
            })
          }
          type="text"
        />
      </div>
    </ErrorForm>
  );
}
