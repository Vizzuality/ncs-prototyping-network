/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image';
import Link from 'next/link';

import Icon from '@/components/icon';
import { cn } from '@/utils/cn';
import { Project } from 'types/project';

import { COLORS, ICONS } from './constants';

const Card = ({ data }: { data: Project }): JSX.Element => {
  const { country, long_title, pathways, carbon_mitigation, project_phase, hectares_impacted, id } =
    data;

  return (
    <div className="relative w-[330px] cursor-pointer shadow-lg transition-shadow hover:shadow-2xl">
      <Link href={`/projects/${id}`}>
        <Image
          alt={long_title}
          src="https://dummyimage.com/700x300/000/fff&text=+"
          style={{ objectFit: 'cover' }}
          width={330}
          height={130}
        />
        <div className="absolute top-2 left-2 z-10">
          {pathways.map((pathway, idx) => (
            <div
              key={idx}
              className={cn({
                'inline-flex items-center space-x-1 rounded-3xl bg-black px-2.5 py-0.5': true,
                [COLORS[pathway]]: pathway,
              })}
            >
              <Icon icon={ICONS[pathway]} className="h-7 w-7" />
              <p className="font-serif text-xs uppercase text-white">{pathway}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-2 p-[18px]">
          <p className="font-serif text-2xl font-semibold text-indigo">{country}</p>
          <p className="max-w-xs font-sans text-2xs font-light text-text">{long_title}</p>
          <p className="max-w-xs font-sans text-2xs font-light text-text">
            <span className="font-medium uppercase">Mitigation potencial:</span> {''}
            {carbon_mitigation}
          </p>
          <p className="max-w-xs font-sans text-2xs font-light text-text">
            <span className="font-medium uppercase">Project phase:</span> {''}
            {project_phase}
          </p>
          <p className="max-w-xs font-sans text-2xs font-light text-text">
            <span className="font-medium uppercase">Area impacted:</span> {''}
            {hectares_impacted}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
