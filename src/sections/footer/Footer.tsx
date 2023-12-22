import { FooterLinkSection } from '@/components';
import { footerLinks, footerSocials } from '@/constants';
import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <div className="flex items-center flex-col justify-center col-start-1 col-end-4 bg-[#232127] py-14 px-[104px gap-12 md:flex-row md:justify-between md:px-[165px] md:py-[74px] md:items-start">
      <Image
        src="/images/logo-white.svg"
        alt="footer-logo"
        width={120}
        height={32}
      />
      <div className="flex flex-col gap-6 md:flex-row md:gap-28">
        {footerLinks.map((link) => (
          <FooterLinkSection key={link.id} item={link} />
        ))}
      </div>
      <div className="flex items-center gap-6">
        {footerSocials.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.alt}
            width={24}
            height={24}
          />
        ))}
      </div>
    </div>
  );
};
