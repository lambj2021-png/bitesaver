import { useState, useEffect } from 'react';
import { loadData } from '../utils/loadData';

export function useFetchData<T>(dataset: string, fallbackData: T) {
  const [data, setData] = useState<T>(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await loadData(dataset, fallbackData);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [dataset, fallbackData]);

  return { data, loading, error };
}
