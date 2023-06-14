import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (defaultUrl = "") => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState(defaultUrl);

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          setIsLoading(true);

          const { data: apiData } = await axios.get(url);

          setError(false);
          setIsLoading(false);
          setData(apiData);
        } catch (error) {
          setData();
          setIsLoading(false);
          setError(true);
        }
      };

      fetchData();
    }
  }, [url]);

  return {
    data,
    isLoading,
    error,
    setUrl,
  };
};
