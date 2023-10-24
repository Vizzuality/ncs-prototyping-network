/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image';
import Link from 'next/link';

import Icon from 'components/icon';
import { Project } from 'types/project';
import { cn } from 'utils/cn';

import { COLORS, ICONS } from './constants';

const Card = ({ data }: { data: Project }): JSX.Element => {
  const {
    id,
    project_name,
    fallback_photo,
    long_title,
    pathways,
    carbon_mitigation,
    project_phases,
    hectares_impacted,
  } = data;

  return (
    <div className="relative w-[330px] cursor-pointer shadow-lg transition-shadow hover:shadow-2xl">
      <Link href={`/projects/${id}`}>
        <Image
          alt={fallback_photo?.caption || 'Project image'}
          src={fallback_photo?.url || 'https://dummyimage.com/700x300/000/fff&text=+'}
          style={{ objectFit: 'cover', height: '140px', width: '360px' }}
          height={140}
          width={360}
        />

        <div className="absolute top-2 left-2 z-20 flex flex-wrap gap-1">
          {pathways.map((pathway, idx) => (
            <div
              key={idx}
              className={cn({
                'mr-1 inline-flex items-center space-x-2 rounded-3xl bg-black pr-2.5 pl-1': true,
                [COLORS[pathway]]: pathway,
              })}
            >
              <Icon icon={ICONS[pathway]} className="h-6 w-6" />
              <p className="font-serif text-xs uppercase text-white">{pathway}</p>
            </div>
          ))}
        </div>
        <div className="flex h-[235px] flex-col justify-between bg-white p-[18px]">
          <div className="flex flex-col space-y-2">
            <p className="font-serif text-2xl font-semibold text-indigo line-clamp-2">
              {project_name}
            </p>
            <p className="h-10 max-w-xs font-sans text-2xs font-light text-text line-clamp-2">
              {long_title}
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="max-w-xs font-sans text-2xs font-light text-text">
              <span className="font-medium uppercase">Mitigation potencial:</span> {''}
              {carbon_mitigation}
            </p>
            <div className="max-w-xs font-sans text-2xs font-light text-text">
              <span className="font-medium uppercase">Project phase:</span> {''}
              {project_phases.join(', ')}
            </div>
            <p className="max-w-xs font-sans text-2xs font-light text-text">
              <span className="font-medium uppercase">Area impacted:</span> {''}
              {hectares_impacted}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
