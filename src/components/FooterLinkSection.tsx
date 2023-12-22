import { FooterLinkType } from '@/constants/types';
import React from 'react';

interface props {
  item: FooterLinkType;
}

export const FooterLinkSection = ({ item: { links, title } }: props) => {
  return (
    <div className="flex items-center flex-col gap-6 md:items-start">
      <h3 className="text-white text-base font-bold">{title}</h3>
      <div className="flex flex-col items-center gap-[10px] md:items-start">
        {links.map((link) => (
          <span
            className="text-[15px] font-medium text-[#BFBFBF] hover:text-primary-blueGreen cursor-pointer"
            key={link.id}
          >
            {link.title}
          </span>
        ))}
      </div>
    </div>
  );
};
