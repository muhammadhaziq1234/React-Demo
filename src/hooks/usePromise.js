import { useCallback, useEffect, useRef, useState } from "react";

/** usePromise Hook  Use For Call Async API's*/
export const usePromise = (fn, defaultValue) => {

  const ran = useRef(false);
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const refetch = useCallback(() => {
    if (ran) ran.current = false;
  }, []);

  const ranFn = useCallback(() => {
    if (!ran.current) {
      fn()
        .then(setValue)
        .catch(setError)
        .finally(() => {
          setLoading(false);
        });

      ran.current = true;
    }
  }, [fn]);

  useEffect(() => {
    ranFn();
  }, [ranFn]);

  /** Return data error refech function and loading state */

  return { data: value, error, loading, refetch };
};
