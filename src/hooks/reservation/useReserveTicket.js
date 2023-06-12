import { useEffect, useState } from "react";

import { calcucatePrice } from "../../utils/reservation/calcucatePrice";

export function useReserveTicket({ loading, ticket }) {
  const [reservationInfo, setReservationInfo] = useState({});

  useEffect(() => {
    if (loading) {
      return;
    }

    const initialState = { ...ticket, seats: [] };

    setReservationInfo(initialState);
  }, [ticket, loading]);

  useEffect(() => {
    const reservedSeats = reservationInfo?.seats;

    if (!reservedSeats || loading) {
      return;
    }

    const numberOfReservedSeats = reservedSeats.length;

    setReservationInfo({
      ...reservationInfo,
      price: calcucatePrice(ticket, numberOfReservedSeats),
    });
    // eslint-disable-next-line
  }, [reservationInfo.seats, loading, ticket]);

  return { reservationInfo, setReservationInfo };
}
