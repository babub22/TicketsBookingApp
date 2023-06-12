import axios from "axios";
import { useEffect, useState } from "react";

import { isArrayEmpty } from "../utils/isArrayEmpty";

export function useFetchTicketsData() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (isArrayEmpty(tickets)) {
      axios
        .get("http://localhost:8000/tickets")
        .then((response) => {
          setTickets(response.data);
        })
        .catch((e) => console.log(e));
    }
  }, [tickets]);

  return { tickets };
}
