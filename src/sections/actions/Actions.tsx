import { Button, Input } from '@/components';
import Image from 'next/image';
import React from 'react';

export const Actions = () => {
  return (
    <section className="col-start-1 col-end-4 md:col-start-2 md:col-end-3 bg-primary-flashWhite min-h-screen mt-40 sm:mt-0">
      <div className="relative">
        <div className="absolute rounded-[10px] bg-no-repeat top-[-80px] left-0 right-0 mx-auto flex flex-col gap-4 bg-primary-jacarta w-[327px] h-[160px] overflow-scroll p-6">
          <Input placeholder="Shorten a link here..." otherClassName="z-30" />
          <Button label="Shorten It!" otherClassNames="z-30" />
          <Image
            src="/images/bg-shorten-mobile.svg"
            alt="test"
            width={0}
            height={0}
            className="absolute z-0 w-full h-full  right-[-100px] top-[-40px]"
          />
        </div>
      </div>
      <div className="">

      </div>
      <div className=""></div>
    </section>
  );
};
