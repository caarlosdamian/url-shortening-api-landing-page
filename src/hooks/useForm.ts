'use client';
import { useState } from 'react';

export const useForm = () => {
  const [form, setForm] = useState<{
    [key: string]: any;
  }>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return {
    onChangeHandler,
    form,
  };
};
