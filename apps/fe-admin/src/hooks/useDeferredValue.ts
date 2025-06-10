import { useEffect, useState } from 'react';

export function useDeferredValue<T>(value: T, delay = 300): T {
  const [deferredValue, setDeferredValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDeferredValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return deferredValue;
}
