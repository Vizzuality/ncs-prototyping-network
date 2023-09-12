import Image from 'next/image';

import { HiOutlineBookmark } from 'react-icons/hi';

import { cn } from '@/utils/cn';
import { Project } from 'types/project';

const Card = ({ data }: { data: Project }): JSX.Element => {
  const { country, description, pathway, mitigation, phase, area } = data;

  const COLORS = {
    'Coastal Wetland': 'bg-rust',
    Agroforestry: 'bg-iris',
    Peatlands: 'bg-cirrus',
  };

  return (
    <div className="relative shadow-md">
      <Image
        alt={description}
        src="https://dummyimage.com/700x300/000/fff&text=+"
        style={{ objectFit: 'cover' }}
        width={330}
        height={100}
      />
      <div className="absolute top-2 left-2 z-10">
        <div
          className={cn({
            'inline-flex space-x-1 rounded-3xl bg-black px-2 py-1': true,
            [COLORS[pathway]]: pathway,
          })}
        >
          <HiOutlineBookmark className="stroke-white" size={16} />
          <p className="font-serif text-xs uppercase text-white">{pathway}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2 p-3">
        <p className="font-serif text-xl font-medium text-indigo">{country}</p>
        <p className="max-w-xs font-serif text-xs font-light text-text">{description}</p>
        <p className="max-w-xs font-serif text-xs font-light text-text">
          <span className="font-semibold uppercase">Mitigation potencial:</span> {''}
          {mitigation}
        </p>
        <p className="max-w-xs font-serif text-xs font-light text-text">
          <span className="font-semibold uppercase">Project phase:</span> {''}
          {phase}
        </p>
        <p className="max-w-xs font-serif text-xs font-light text-text">
          <span className="font-semibold uppercase">Area impacted:</span> {''}
          {area}
        </p>
      </div>
    </div>
  );
};

export default Card;
