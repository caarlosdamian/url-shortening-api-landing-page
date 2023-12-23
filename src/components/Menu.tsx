'use client';
import { navLinks } from '@/constants';
import React from 'react';
import { Button } from '.';
import { useMenuContext } from '@/hooks/useMenuContext';

export const Menu = () => {
  const { isOpen } = useMenuContext();
  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      }  flex-col gap-8 bg-primary-jacarta h-[383px] w-[327px] fixed top-[96px] left-0 right-0 mx-auto z-50 rounded-[10px] py-10 px-6`}
    >
      <div className="flex flex-col items-center gap-[30px]">
        {navLinks.map((link) => (
          <span
            key={link.id}
            className="text-white text-lg font-bold leading-normal"
          >
            {link.label}
          </span>
        ))}
      </div>
      <div className="bg-primary-manate h-[1px] w-full opacity-25"></div>
      <div className="flex flex-col items-center gap-6 w-full">
        <span className="text-white text-lg font-bold leading-normal">
          Login
        </span>
        <Button
          label="Sign Up"
          buttonType="rounded-sm"
          otherClassNames="pt-[12px] pb-[9px] min-w-full"
        />
      </div>
    </div>
  );
};
