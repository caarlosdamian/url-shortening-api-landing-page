import React, { InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  otherClassName?: string;
}

export const Input = ({ otherClassName, ...props }: Props) => {
  return (
    <input
      {...props}
      className={`bg-white py-[6px] px-4 min-h-[46px] rounded-smXl outline-none text-base text-primary-onyx placeholder:text-opacity-50 ${otherClassName}`}
    />
  );
};
