import { useContext } from "react";

import { ReservationInfo } from "../../pages/Reservation";
import { Button } from "../common/Button";
import { Price } from "../common/Price";
import { ChooseSeatsInput } from "./ChooseSeatsInput";
import { NameInput } from "./NameInput";
import { SurnameInput } from "./SurnameInput";

export function ReservationForm() {
  const { handleSearchButton, reservationInfo, seats } =
    useContext(ReservationInfo);

  return (
    <div className="bg-slate-100 p-3 my-5 ">
      <div className="flex flex-row my-5 ">
        <ChooseSeatsInput seats={seats} />

        <div className="basis-1/8">
          <NameInput />
          <SurnameInput />
        </div>
      </div>

      <div className="py-4 font-bold">
        <Price data={reservationInfo} />
      </div>
      <Button text={"Reserve!"} handleFunction={handleSearchButton} />
    </div>
  );
}
