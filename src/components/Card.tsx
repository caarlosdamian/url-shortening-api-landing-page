import { Link } from '@/constants/types';
import { Button } from '.';

export const Card = ({ isCopy, shortUrl, url }: Link) => {
  return (
    <div className="flex flex-col gap-[6px] justify-between bg-white rounded-smXl min-[327px] min-h-[155px] py-4">
      <h3 className="pb-[6px] px-4 border-primary-manate border-b border-opacity-25 text-base font-medium text-primary-onyx">
        {url}
      </h3>
      <div className="flex flex-col gap-2 px-4">
        <h4 className="text-base font-medium text-primary-blueGreen">
          {shortUrl}
        </h4>
        <Button
          label={isCopy ? 'Copied!' : 'Copy'}
          otherClassNames={`${isCopy ? 'btn-active' : ''}`}
        />
      </div>
    </div>
  );
};
