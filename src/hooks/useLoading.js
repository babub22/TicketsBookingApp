import { useEffect, useState } from "react";

export function useLoading(data) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!data);
  }, [data]);

  return { loading };
}
