import { useState } from "react";

import { SearchField } from "../components/search/SearchField.js";
import { TicketsList } from "../components/tickets/TicketsList";
import { useGetAvailableTickects } from "../hooks/search/useGetAvailableTickets.js";

export function Home() {
  const [tickets, setTickets] = useState([]);

  const getTickets = (tickets) => {
    setTickets(tickets);
  };

  const { availableTickets } = useGetAvailableTickects(tickets);

  return (
    <div>
      <span className="text-2xl">Booking plane tickets</span>

      <SearchField getTickets={getTickets} />

      <TicketsList availableTickets={availableTickets} />
    </div>
  );
}
