'use client';
import React, { ButtonHTMLAttributes, useMemo } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  buttonType?: 'rounded' | 'md' | 'sm' | 'rounded-sm';
  otherClassNames?: string;
}

export const Button = ({
  label,
  otherClassNames,
  buttonType = 'sm',
  ...props
}: Props) => {
  const btnType = useMemo(
    () =>
      buttonType === 'rounded'
        ? 'btn-rounded'
        : buttonType === 'md'
        ? 'btn-md'
        : buttonType === 'rounded-sm'
        ? 'btn-rounded-sm'
        : undefined,
    [buttonType]
  );
  return (
    <button className={`btn ${btnType} ${otherClassNames}`} {...props}>
      {label}
    </button>
  );
};
