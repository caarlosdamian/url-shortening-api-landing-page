'use client';

import { Link } from '@/constants/types';
import { Dispatch } from 'react';

export const useClipBoard = ({
  setNewValue,
  currentValue,
}: {
  setNewValue: Dispatch<any>;
  currentValue: any[];
}) => {
  const handleCopy = (id: string) => {
    const newArr = [...currentValue].map((item: Link) => {
      if (item.id === id) {
        navigator.clipboard.writeText(item.url);
        return { ...item, isCopy: true };
      }

      return { ...item };
    });
    setNewValue(newArr);
  };

  return { handleCopy };
};
