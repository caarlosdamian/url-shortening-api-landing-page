import Image from 'next/image';
import logo from '../../images/logo.svg';
import hamburger from '../../images/hamburger.svg';

export const Header = () => {
  return (
    <div className="flex justify-between w-full px-6 pb-6 pt-10">
      <div className="">
        <Image
          src={logo}
          width={120}
          height={32}
          alt="logo"
          className="cursor-pointer"
        />
      </div>
      <div className="">
        <Image
          src={hamburger}
          width={24}
          height={21}
          alt="hamburger"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};
