import React, { useState } from "react";

import { Ticket } from "../components/common/Ticket";
import { ReservationConfirmation } from "../components/reservation/ReservationConfirmation";
import { ReservationForm } from "../components/reservation/ReservationForm";
import { useReserveTicket } from "../hooks/reservation/useReserveTicket";
import { useDataValidation } from "../hooks/useDataValidation";
import { useGetSpecificTicket } from "../hooks/useGetSpecificTicket";
import { useLoading } from "../hooks/useLoading";
import { validateReservationInfo } from "../utils/reservation/validateReservationInfo";

export const ReservationInfo = React.createContext();

export function Reservation() {
  const { ticket } = useGetSpecificTicket();
  const { loading } = useLoading(ticket);
  const { reservationInfo, setReservationInfo } = useReserveTicket({
    loading,
    ticket,
  });

  const [reservationReceipt, setReservationReceipt] = useState();

  const { validationErrors, handleSearchButton } = useDataValidation({
    data: reservationInfo,
    validatorFunction: validateReservationInfo,
    functionAfterValidation: setReservationReceipt,
  });

  if (loading) {
    return <>Loading</>;
  }

  const { seats } = ticket;

  return (
    <ReservationInfo.Provider
      value={{
        handleSearchButton,
        validationErrors,
        reservationInfo,
        setReservationInfo,
        seats,
      }}
    >
      <span>Reservation</span>
      
      <Ticket ticket={reservationInfo} />
      <ReservationForm />

      <ReservationConfirmation reservationReceipt={reservationReceipt} />
    </ReservationInfo.Provider>
  );
}
