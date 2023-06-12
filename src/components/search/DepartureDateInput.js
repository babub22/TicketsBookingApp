import { useContext } from "react";

import { ErrorForm } from "../common/ErrorForm";
import { InputProps } from "./SearchField";

export function DepartureDateInput() {
  const { searchQuery, setSearchQuery, validationErrors } =
    useContext(InputProps);

  return (
    <div className="m-2">
      <ErrorForm name={"Departure"} validationErrors={validationErrors}>
        <span className="searchInput">Date:</span>
        <input
          className="h-6"
          type="date"
          value={searchQuery.departure ?? ""}
          onChange={(e) =>
            setSearchQuery({ ...searchQuery, departure: e.target.value })
          }
        ></input>
      </ErrorForm>
    </div>
  );
}
