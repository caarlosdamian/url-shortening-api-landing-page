import { Link } from '@/constants/types';
import { Button } from '.';

interface Props {
  item: Link;
  handleCopy: (id: string) => void;
}

export const Card = ({
  item: { id, isCopy, shortUrl, url },
  handleCopy,
}: Props) => {
  return (
    <div className="flex flex-col gap-[6px] justify-between bg-white rounded-smXl min-[327px] min-h-[155px] py-4 md:flex-row md:items-center md:min-h-[72px] md:justify-between">
      <h3 className="pb-[6px] px-4 border-primary-manate border-b border-opacity-25 text-base font-medium text-primary-onyx md:border-none">
        {url}
      </h3>
      <div className="flex flex-col gap-2 px-4 md:flex-row md:items-center md:gap-6">
        <h4 className="text-base font-medium text-primary-blueGreen">
          {shortUrl}
        </h4>
        <Button
          label={isCopy ? 'Copied!' : 'Copy'}
          otherClassNames={`${
            isCopy ? 'btn-active' : ''
          } md:px-[21px] md:min-w-[103px]`}
          onClick={() => handleCopy(id)}
        />
      </div>
    </div>
  );
};
