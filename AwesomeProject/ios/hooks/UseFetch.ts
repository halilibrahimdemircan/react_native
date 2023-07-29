import {useState, useEffect} from 'react';

// type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface Options {
  method: string;
  headers?: {[key: string]: string};
  data?: any;
}

const useFetch = <T>(url: string, options: Options, skip = false) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (skip) return;
      try {
        const requestOptions: RequestInit = {
          method: options.method,
          headers: {
            'Content-Type': 'application/json',
            ...options.headers,
          },
        };

        if (options.data) {
          requestOptions.body = JSON.stringify(options.data);
        }

        const result = await fetch(url, requestOptions);

        if (!result.ok) {
          throw new Error('Network response was not ok.');
        }

        const responseData: T = await result.json();
        setResponse(responseData);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return {response, error, loading};
};

export default useFetch;
