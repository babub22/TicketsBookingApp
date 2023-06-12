import { useContext } from "react";
import { useParams } from "react-router-dom";

import { TicketsContext } from "../App";

export function useGetSpecificTicket() {
  const { getTicketById } = useContext(TicketsContext);
  const { number: id } = useParams();

  return { ticket: getTicketById(Number(id)) };
}
