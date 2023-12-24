'use client';
import { useEffect, useState } from 'react';

export const useLocalStorage = ({
  key,
  initValue,
}: {
  key: string;
  initValue: any;
}) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue =
        typeof window !== 'undefined'
          ? window.localStorage.getItem(key)
          : undefined;
      return storedValue ? JSON.parse(storedValue) : initValue;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  });

  useEffect(() => {
    try {
      typeof window !== 'undefined' &&
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
};
