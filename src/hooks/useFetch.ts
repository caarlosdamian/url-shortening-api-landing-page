'use client';

import { useState } from 'react';

export const useFetch = () => {
  const [items, setItems] = useState<{ [key: string]: any }[]>([]);
  const handleResponse = async (body: any) => {
    const url =
      process.env.API_LINK || 'https://is.gd/create.php?format=json&url=';
    try {
      const res = await fetch(`${url}${encodeURIComponent(body.url)}`);

      const data = await res.json();
      setItems((prev) => [
        ...prev,
        {
          id: `${prev.length + 1}-${data.shorturl}`,
          url: data.shorturl,
        },
      ]);
      return data;
    } catch (error) {
      return error;
    }
  };

  return { handleResponse, items };
};
