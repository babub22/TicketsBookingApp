import { useContext } from "react";

import { TicketsContext } from "../../App";
import { getAvailableTickets } from "../../utils/search/getAvailableTickets";

export function useGetAvailableTickects(searchQuery) {
  const { tickets } = useContext(TicketsContext);

  const availableTickets = getAvailableTickets(tickets, searchQuery);

  return { availableTickets };
}
