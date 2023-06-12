import React, { useContext } from "react";

import { getNormalDate } from "../../utils/getNormalDate";

const TicketInfo = React.createContext();

export function Ticket({ ticket }) {
  return (
    <div className="flex flex-row w-8/12 pt-4">
      <TicketInfo.Provider value={{ ticket }}>
        <From />
        <Direction />
        <To />
      </TicketInfo.Provider>
    </div>
  );
}

function From() {
  const { ticket } = useContext(TicketInfo);

  return (
    <div className="rounded-l-2xl	bg-customTeal text-customLightGray flex-auto pt-1">
      <span className="alignToCenter">{ticket.from}</span>
      <span className="alignToCenter">{getNormalDate(ticket.departure)}</span>
    </div>
  );
}

function To() {
  const { ticket } = useContext(TicketInfo);

  return (
    <div className="rounded-r-2xl bg-customTeal text-customLightGray flex-auto pt-1">
      <span className="alignToCenter">{ticket.to}</span>
      <span className="alignToCenter">{getNormalDate(ticket.arrival)}</span>
    </div>
  );
}

function Direction() {
  const { ticket } = useContext(TicketInfo);

  return (
    <div className="bg-customLightGray flex-auto flex alignToCenter">
      <div className="flex-col flex flex-nowrap">
        <img className="w-9 h-9" src="/reservation/arrow.svg" alt="" />
        <span className="alignToCenter">{ticket.duration}</span>
      </div>
    </div>
  );
}
