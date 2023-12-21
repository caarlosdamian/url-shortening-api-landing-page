import React, { InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  otherClassName?: string;
  error?: string;
}

export const Input = ({ otherClassName, error, ...props }: Props) => {
  return (
    <div className="z-30 w-full flex flex-col gap-1">
      <input
        {...props}
        className={`bg-white border-[3px] py-[6px] px-4 min-h-[46px] rounded-smXl outline-none text-base text-primary-onyx placeholder:text-opacity-50 ${
          error ? 'border-[#F46363] placeholder:text-[#F46363]' : ''
        } ${otherClassName}`}
      />
      {error && (
        <pre className="text-[#F46363] text-xs font-medium leading-[18px]">
          {error}
        </pre>
      )}
    </div>
  );
};
