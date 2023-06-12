import { isArrayEmpty } from "../isArrayEmpty";
import { isEqual } from "../isEqual";
import { isEqualDates } from "../isEqualDates";

export function getAvailableTickets(tickets, searchQuery) {
  if (isArrayEmpty(tickets)) {
    return [];
  }

  return tickets.filter(
    ({ from, to, departure }) =>
      isEqual(from, searchQuery.from) && isEqual(to, searchQuery.to) && isEqualDates(departure,searchQuery.departure)
  );
}

