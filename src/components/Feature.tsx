import { FeatureType } from '@/constants/types';
import Image from 'next/image';
import React from 'react';

interface Props {
  feature: FeatureType;
}

export const Feature = ({ feature }: Props) => {
  return (
    <div className="bg-white pt-[77px] px-8 pb-[41px] relative text-center flex flex-col gap-3 rounded-smXl">
      {feature.extraBorder && (
        <>
          <div className="absolute top-[-92px] right-[160px] h-12 w-2 bg-primary-blueGreen"></div>
          <div className="absolute bottom-[-48px] right-[160px] h-12 w-2 bg-primary-blueGreen"></div>
        </>
      )}
      <div className="absolute flex items-center p-5 justify-center top-[-44px] h-[88px] w-[88px right-[120px] bg-primary-jacarta rounded-full">
        <Image
          src={feature.img}
          alt={feature.title}
          width={0}
          height={0}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-[22px] font-bold text-primary-onyx">
        {feature.title}
      </h3>
      <h4 className="text-primary-manate text-[15px] font-medium">
        {feature.desc}
      </h4>
    </div>
  );
};
