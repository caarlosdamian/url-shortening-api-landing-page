'use client';
import { navLinks } from '@/constants';
import { Button } from '.';
import { useMenuContext } from '@/hooks/useMenuContext';
import Link from 'next/link';

export const Menu = () => {
  const { isOpen, handleClosed } = useMenuContext();
  return (
    <div className={`${isOpen ? '' : 'hidden'}`}>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-transparent z-10"
        onClick={handleClosed as () => void}
      ></div>

      <div
        className={` flex flex-col gap-8 bg-primary-jacarta h-[383px] w-[327px] fixed top-[96px] left-0 right-0 mx-auto z-[999999999] rounded-[10px] py-10 px-6`}
      >
        <div className="flex flex-col items-center gap-[30px]">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.label}`}
              className="text-white text-lg font-bold leading-normal"
              onClick={handleClosed as () => void}
            >
              {link.label}
            </Link>
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
    </div>
  );
};
