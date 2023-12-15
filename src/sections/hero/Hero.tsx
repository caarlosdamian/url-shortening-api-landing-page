import { ResponsiveImg } from '@/components';
import Working from '../../images/illustration-working.svg';
import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-full w-full pt-[400px] sm:pt-20 gap-3 col-start-2 col-end-3"
    >
      <Image
        src={Working}
        alt="working"
        className="absolute object-contain top-[-120px] right-[-150px] min-w-[510px] h-full  sm:top-0 sm:right-[-200px] lg:min-w-[733px]"
      />
      <div className="flex items-center justify-center flex-col gap-4 sm:px-0 sm:items-start sm:max-w-[350px] lg:max-w-[563px]">
        <h1 className="text-[42px] font-bold leading-[48px] tracking-[-1.05px] text-primary-onyx text-center sm:text-start lg:text-[80px] lg:leading-[90px] lg:tracking-[-2px]">
          More than just shorter links
        </h1>
        <h3 className="h3-medium text-primary-manate text-center sm:text-start">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </h3>
        <button>Get Started</button>
      </div>
    </section>
  );
};
