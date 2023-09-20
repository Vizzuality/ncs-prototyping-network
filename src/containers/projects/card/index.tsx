/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image';

import Icon from '@/components/icon';
import { cn } from '@/utils/cn';
import { Project } from 'types/project';

import AGROFORESTRY_SVG from 'svgs/pathways/agroforestry.svg?sprite';
import COASTAL_WETLANDS_SVG from 'svgs/pathways/coastal-wetlands.svg?sprite';
import PEATLANDS_SVG from 'svgs/pathways/peatlands.svg?sprite';

const Card = ({ data }: { data: Project }): JSX.Element => {
  const { country, description, pathway, mitigation, phase, area } = data;

  const COLORS = {
    'Coastal Wetlands': 'bg-rust',
    Agroforestry: 'bg-iris',
    Peatlands: 'bg-cirrus',
  };

  const ICONS = {
    'Coastal Wetlands': COASTAL_WETLANDS_SVG,
    Agroforestry: AGROFORESTRY_SVG,
    Peatlands: PEATLANDS_SVG,
  };

  return (
    <div className="relative w-[330px] shadow-lg">
      <Image
        alt={description}
        src="https://dummyimage.com/700x300/000/fff&text=+"
        style={{ objectFit: 'cover' }}
        width={330}
        height={130}
      />
      <div className="absolute top-2 left-2 z-10">
        <div
          className={cn({
            'inline-flex items-center space-x-1 rounded-3xl bg-black px-2.5 py-0.5': true,
            [COLORS[pathway]]: pathway,
          })}
        >
          <Icon icon={ICONS[pathway]} className="h-7 w-7" />
          <p className="font-serif text-xs uppercase text-white">{pathway}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2 p-[18px]">
        <p className="font-serif text-2xl font-semibold text-indigo">{country}</p>
        <p className="max-w-xs font-sans text-2xs font-light text-text">{description}</p>
        <p className="max-w-xs font-sans text-2xs font-light text-text">
          <span className="font-medium uppercase">Mitigation potencial:</span> {''}
          {mitigation}
        </p>
        <p className="max-w-xs font-sans text-2xs font-light text-text">
          <span className="font-medium uppercase">Project phase:</span> {''}
          {phase}
        </p>
        <p className="max-w-xs font-sans text-2xs font-light text-text">
          <span className="font-medium uppercase">Area impacted:</span> {''}
          {area}
        </p>
      </div>
    </div>
  );
};

export default Card;
