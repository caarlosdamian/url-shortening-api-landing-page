'use client';

import { Dispatch, useState } from 'react';

export const useFetch = (setItems: Dispatch<any>) => {
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
          shortUrl: body.url,
          isCopy: true,
        },
      ]);
      return data;
    } catch (error) {
      return error;
    }
  };

  return { handleResponse };
};
