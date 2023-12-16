'use client'
import React, { ButtonHTMLAttributes, useMemo } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  buttonType?: 'rounded' | 'md' | 'sm';
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
        : buttonType === 'md' ? 'btn-rounded' : undefined,
    [buttonType]
  );
  return (
    <button className={`btn ${btnType}`} {...props}>
      {label}
    </button>
  );
};
