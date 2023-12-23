'use client'
import { MenuContext } from '@/context/menuContext';
import { useContext } from 'react';

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('Use context should be used inside a context provider');
  }
  return context;
};
