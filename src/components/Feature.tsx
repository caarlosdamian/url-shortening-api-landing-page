import { FeatureType } from '@/constants/types';
import React from 'react';

interface Props {
  feature: FeatureType;
}

export const Feature = ({ feature }: Props) => {
  return (
    <div className='bg-white pt-[77px] px-8 pb-[41px]'>
      <h3>{feature.title}</h3>
      <h4>{feature.desc}</h4>
    </div>
  );
};
