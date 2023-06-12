import { useContext } from "react";

import { ErrorForm } from "../common/ErrorForm";
import { InputProps } from "./SearchField";

export function FinishAirportInput() {
  const { searchQuery, setSearchQuery, validationErrors } =
    useContext(InputProps);

  return (
    <div className="m-2">
      <ErrorForm name={"To"} validationErrors={validationErrors}>
        <span className="searchInput">To:</span>
        <input
          className="h-6"
          type="text"
          value={searchQuery.to ?? ""}
          onChange={(e) =>
            setSearchQuery({ ...searchQuery, to: e.target.value })
          }
        ></input>
      </ErrorForm>
    </div>
  );
}
