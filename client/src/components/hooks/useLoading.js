import { useState } from "react";

const useLoading = (time = 10000) => {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, time);

  return loading;

};

export default useLoading;
