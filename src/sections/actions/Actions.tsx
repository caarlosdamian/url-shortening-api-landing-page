'use client';
import { Button, Card, Feature, Input } from '@/components';
import { sampleFeature } from '@/constants';
import { Link } from '@/constants/types';
import { useFetch } from '@/hooks/useFetch';
import { useForm } from '@/hooks/useForm';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Image from 'next/image';
import { useEffect } from 'react';

export const Actions = () => {
  const { form, onChangeHandler } = useForm();
  const [value, setValue] = useLocalStorage({ key: 'items', initValue: [] });
  const { handleResponse } = useFetch(setValue);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleResponse(form);
  };

  useEffect(() => {
    return () => {
      setValue(
        value.map((item: Link) => {
          return { ...item, isCopy: false };
        })
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="col-start-1 col-end-4 pb-20 bg-primary-flashWhite min-h-screen mt-40 lg:mt-0 md:px-[165px] lg:pb-32 md:max-h-fit">
      <div className="relative">
        <form
          onSubmit={handleSubmit}
          className="absolute rounded-[10px] bg-no-repeat top-[-80px] left-0 right-0 mx-auto flex flex-col gap-4 bg-primary-jacarta w-[327px] min-h-[160px] overflow-hidden p-6 sm:w-full sm:max-w-[1110px] sm:flex-row sm:items-center"
        >
          <Input
            placeholder="Shorten a link here..."
            otherClassName="sm:w-full sm:h-[64px]"
            onChange={(e) => onChangeHandler(e)}
            name="url"
          />
          <Button
            label="Shorten It!"
            otherClassNames="z-30 sm:max-w-[188px] sm:p-[18px] sm:min-h-[64px]"
            type="submit"
          />
          <Image
            src="/images/bg-shorten-mobile.svg"
            alt="test"
            width={0}
            height={0}
            className="absolute sm:hidden z-0 w-full h-full  right-[-100px] top-[-40px]"
          />
          <Image
            src="/images/bg-shorten-desktop.svg"
            alt="test"
            width={0}
            height={0}
            className="hidden sm:inline sm:absolute z-0 w-full h-full right-0 top-0"
          />
        </form>
      </div>
      <div className="w-full pt-[128px] flex flex-col gap-12 break-words px-6 md:gap-32 md:items-center">
        <div className="flex flex-col gap-6 w-full">
          {value.map((link: Link) => (
            <Card key={link.id} {...link} />
          ))}
        </div>
        <section
          id="Features"
          className="flex flex-col gap-4 h-full md:max-w-[540px]"
        >
          <h3 className="h3-bold text-primary-onyx text-center md:text-[40px] leading-[48px]">
            Advanced Statistics
          </h3>
          <h4 className="text-center text-[16px] font-medium text-primary-manate leading-[28px] tracking-[0.109px] md:text-lg md:max-[540px]">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </h4>
        </section>
        <div className="flex flex-col gap-[92px] mt-[44px] md:flex-row md:gap-[30px]">
          {sampleFeature.map((item) => (
            <Feature key={item.id} feature={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
