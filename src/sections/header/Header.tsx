import Image from 'next/image';
import { navLinks } from '@/constants';
import { Button } from '@/components';

export const Header = () => {
  return (
    <div className="flex justify-between w-full pb-6 pt-10 col-start-2 col-end-3 lg:pb-20">
      <div className="lg:flex gap-11 lg:items-center">
        <Image
          src='/images/logo.svg'
          width={120}
          height={32}
          alt="logo"
          className="cursor-pointer"
        />
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <span
              key={link.id}
              className="text-[15px] font-bold leading-normal text-primary-manate"
            >
              {link.label}
            </span>
          ))}
        </div>
      </div>
      <div className="lg:flex lg:gap-9 lg:items-center">
        <Image
          src='/images/hamburger.svg'
          width={24}
          height={21}
          alt="hamburger"
          className="cursor-pointer lg:hidden"
        />
        <span className="hidden lg:flex text-[15px] font-bold leading-normal text-primary-manate">
          Login
        </span>
        <Button label='Sign Up' buttonType='rounded-sm' otherClassNames='hidden lg:flex' />
      </div>
    </div>
  );
};
