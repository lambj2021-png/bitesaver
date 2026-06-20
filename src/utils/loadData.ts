const cache: Record<string, any> = {};

export async function loadData<T>(dataset: string, fallbackData: T): Promise<T> {
  const path = `/data/${dataset}.json`;
  
  if (cache[path]) {
    return cache[path];
  }

  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const jsonData = await response.json();
    cache[path] = jsonData;
    return jsonData;
  } catch (err) {
    console.error(`Error loading data from ${path}, using fallback:`, err);
    return fallbackData;
  }
}

export interface MetaData {
  last_scraped: string;
  scraper_version: string;
  sources: Record<string, string>;
}

export async function loadMeta(): Promise<MetaData | null> {
  const path = '/data/_meta.json';
  if (cache[path]) return cache[path];

  try {
    const response = await fetch(path);
    if (!response.ok) return null;
    const meta = await response.json();
    cache[path] = meta;
    return meta;
  } catch {
    return null;
  }
}
