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
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initValue;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
};
