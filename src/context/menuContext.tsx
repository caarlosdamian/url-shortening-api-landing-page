'use client';
import { createContext, useState } from 'react';

interface ContextI {
  handleClosed: { (): void } | null;
  handleOpen: { (): void } | null;
  isOpen: boolean;
}

export const MenuContext = createContext<ContextI>({
  handleClosed: null,
  isOpen: false,
  handleOpen: null,
});

export const MenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClosed = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <MenuContext.Provider
      value={{
        handleClosed,
        handleOpen,
        isOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
