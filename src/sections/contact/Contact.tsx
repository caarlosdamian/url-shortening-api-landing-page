import { Button } from '@/components';
import React from 'react';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="col-start-1 col-end-4 bg-primary-jacarta bg-boostMobile md:bg-boostDesktop h-[250px] flex items-center flex-col justify-center gap-4 md:gap-8"
    >
      <h3 className="text-white text-[28px] font-bold leading-[48px]">
        Boost your links today
      </h3>
      <Button label="Get Started" buttonType="rounded" />
    </section>
  );
};
