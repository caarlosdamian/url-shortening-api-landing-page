import { Button, Input } from '@/components';
import Image from 'next/image';
import React from 'react';

export const Actions = () => {
  return (
    <section className="col-start-1 col-end-4 bg-primary-flashWhite min-h-screen mt-40 lg:mt-0">
      <div className="relative">
        <div className="absolute rounded-[10px] bg-no-repeat top-[-80px] left-0 right-0 mx-auto flex flex-col gap-4 bg-primary-jacarta w-[327px] h-[160px] overflow-hidden p-6 sm:w-full sm:max-w-[1110px] sm:flex-row sm:items-center">
          <Input
            placeholder="Shorten a link here..."
            otherClassName="z-30 sm:w-full sm:h-[64px]"
          />
          <Button
            label="Shorten It!"
            otherClassNames="z-30 sm:max-w-[188px] sm:p-[18px] sm:min-h-[64px]"
          />
          <Image
            src="/images/bg-shorten-mobile.svg"
            alt="test"
            width={0}
            height={0}
            className="absolute sm:hidden z-0 w-full h-full  right-[-100px] top-[-40px]"
          />
          <Image
            src="/images/bg-shorten-desktop.svg"
            alt="test"
            width={0}
            height={0}
            className="hidden sm:inline sm:absolute z-0 w-full h-full right-0 top-0"
          />
        </div>
      </div>
      <div className="w-full pt-[128px] flex flex-col gap-12 break-words px-6">
        <div className="bg-blue-500 h-10"></div>
        <div className="flex flex-col gap-4 h-full">
          <h3 className='h3-bold text-primary-onyx text-center'>Advanced Statistics</h3>
          <h4 className='text-center text-[16px] font-medium text-primary-manate leading-[28px] tracking-[0.109px]'>Track how your links are performing across the web with our advanced statistics dashboard.</h4>
        </div>
        <div className="bg-pink-500 h-10"></div>
      </div>
    </section>
  );
};
