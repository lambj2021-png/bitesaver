import { useState, useEffect } from 'react';
import { loadMeta, MetaData } from '../utils/loadData';

export function useMeta() {
  const [meta, setMeta] = useState<MetaData | null>(null);

  useEffect(() => {
    loadMeta().then(setMeta);
  }, []);

  return meta;
}
