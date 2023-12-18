import Image from 'next/image';
import React from 'react';

export const Actions = () => {
  return (
    <section className="col-start-1 col-end-4 md:col-start-2 md:col-end-3 bg-primary-flashWhite min-h-screen mt-40 sm:mt-0">
      <div className="relative">
        <div className="rounded-[10px] absolute bg-no-repeat top-[-80px] left-0 right-0 mx-auto bg-primary-jacarta w-[327px] h-[160px] overflow-hidden">
          <Image
            src="/images/bg-shorten-mobile.svg"
            alt="test"
            width={0}
            height={0}
            className="w-full h-full absolute right-[-100px] top-[-40px]"
          />
        </div>
      </div>
    </section>
  );
};
