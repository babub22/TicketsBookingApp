import { useContext } from "react";

import { ErrorForm } from "../common/ErrorForm";
import { InputProps } from "./SearchField";

export function StartAirportInput() {
  const { searchQuery, setSearchQuery, validationErrors } =
    useContext(InputProps);
    
  return (
    <div className="m-2">
      <ErrorForm name={"From"} validationErrors={validationErrors}>
        <span className="searchInput">From:</span>
        <input
          className="h-6"
          type="text"
          value={searchQuery.from ?? ""}
          onChange={(e) =>
            setSearchQuery({ ...searchQuery, from: e.target.value })
          }
        ></input>
      </ErrorForm>
    </div>
  );
}
