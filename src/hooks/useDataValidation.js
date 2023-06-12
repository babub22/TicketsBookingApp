import { useEffect, useState } from "react";

import { isArrayEmpty } from "../utils/isArrayEmpty";

export function useDataValidation({
  data,
  validatorFunction,
  functionAfterValidation,
}) {
  const [validationErrors, setValidationErrors] = useState([]);
  const [isCorrectReservationInfo, setIsCorrectReservationInfo] =
    useState(false);

  useEffect(() => {
    if (!isCorrectReservationInfo) {
      return;
    }

    functionAfterValidation?.(data);

    setIsCorrectReservationInfo(false);
  }, [isCorrectReservationInfo, data, functionAfterValidation]);

  const handleSearchButton = () => {
    const errors = validatorFunction(data);

    setValidationErrors(errors);
    setIsCorrectReservationInfo(isArrayEmpty(errors));
  };

  return { validationErrors, handleSearchButton };
}
