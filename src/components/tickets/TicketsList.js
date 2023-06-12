import { isArrayEmpty } from "../../utils/isArrayEmpty";
import { Price } from "../common/Price";
import { Ticket } from "../common/Ticket";

export function TicketsList({ availableTickets }) {
  const areThereTicketsAvailable = !isArrayEmpty(availableTickets);

  if (!areThereTicketsAvailable) {
    return <div className="pt-0"> Use the search to find tickets </div>;
  }

  return (
    <div className="flex flex-col flex-wrap">
      {availableTickets.map((ticket, index) => (
        <TicketContent ticket={ticket} index={index} key={index}/>
      ))}
    </div>
  );
}

function TicketContent({ ticket }) {
  return (
    <div className="pl-4 bg-slate-100 mt-10">
      <Ticket ticket={ticket} />
      <div className="pt-6">
        <Price data={ticket} />

        <a className="button ml-6" href={"/" + ticket.id}>
          <span>Reserve</span>
        </a>
      </div>
    </div>
  );
}
