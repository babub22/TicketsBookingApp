import React, { useState } from "react";

import { useDataValidation } from "../../hooks/useDataValidation";
import { validateSearchQuery } from "../../utils/search/validateSearchQuery";
import { Button } from "../common/Button";
import { DepartureDateInput } from "./DepartureDateInput";
import { FinishAirportInput } from "./FinishAirportInput";
import { StartAirportInput } from "./StartAirportInput";

export const InputProps = React.createContext();

export function SearchField({ getTickets }) {
  const [searchQuery, setSearchQuery] = useState({});

  const { validationErrors, handleSearchButton } = useDataValidation({
    data: searchQuery,
    validatorFunction: validateSearchQuery,
    functionAfterValidation: getTickets,
  });

  return (
    <div className="flex flex-row pl-4 bg-slate-100 mt-7 mb-2 py-4">
      <InputProps.Provider
        value={{ setSearchQuery, validationErrors, searchQuery }}
      >
        <StartAirportInput />
        <FinishAirportInput />
        <DepartureDateInput />
      </InputProps.Provider>

      <div className="pl-7">
        <Button text={"Search"} handleFunction={handleSearchButton} />
      </div>
    </div>
  );
}
