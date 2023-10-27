import Image from 'next/image';
import Link from 'next/link';

import { useGetPathways } from 'types/generated/pathway';
import { cn } from 'utils/cn';

const Card = ({ data }: { data }): JSX.Element => {
  const { data: pathwaysData, isFetched } = useGetPathways();
  const pathways = isFetched ? pathwaysData?.data.data.map((p) => p.attributes.name) : [];

  const COLORS = {
    [pathways[0]]: 'bg-rust',
    [pathways[1]]: 'bg-cirrus',
    [pathways[2]]: 'bg-cirrus',
    [pathways[3]]: 'bg-iris',
    [pathways[4]]: 'bg-iris',
  };

  const ICONS = {
    [pathways[0]]: '/images/icons/pathways/agroforestry.svg',
    [pathways[1]]: '/images/icons/pathways/coastal-wetlands.svg',
    [pathways[2]]: '/images/icons/pathways/coastal-wetlands.svg',
    [pathways[3]]: '/images/icons/pathways/peatlands.svg',
    [pathways[4]]: '/images/icons/pathways/peatlands.svg',
  };

  return (
    <div className="relative w-[330px] cursor-pointer shadow-lg transition-shadow hover:shadow-2xl">
      <Link href={`/projects/${data.id}`}>
        <Image
          alt={data.attributes.header_photo.data.attributes.formats.medium.name || 'Project image'}
          src={
            data.attributes.header_photo.data.attributes.formats.medium.url ||
            'https://dummyimage.com/700x300/000/fff&text=+'
          }
          style={{ objectFit: 'cover', height: '140px', width: '360px' }}
          height={140}
          width={360}
        />

        <div className="absolute top-2 left-2 z-20 flex flex-wrap gap-1">
          {data.attributes.pathways.data
            .map((p) => p.attributes.name)
            ?.map((pathway, idx) => (
              <div
                key={idx}
                className={cn({
                  'mr-1 inline-flex items-center space-x-2 rounded-3xl bg-black pr-2.5 pl-1': true,
                  [COLORS[pathway]]: pathway,
                })}
              >
                <Image alt={pathway} src={ICONS[pathway]} width={24} height={24} />
                <p className="font-serif text-xs uppercase text-white">{pathway}</p>
              </div>
            ))}
        </div>

        <div className="flex h-[235px] flex-col justify-between bg-white p-[18px]">
          <div className="flex flex-col space-y-2">
            <p className="font-serif text-2xl font-semibold text-indigo line-clamp-2">
              {data.attributes.project_name}
            </p>
            <p className="h-10 max-w-xs font-sans text-2xs font-light text-text line-clamp-2">
              {data.attributes.long_title}
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="max-w-xs font-sans text-2xs font-light text-text">
              <span className="font-medium uppercase">Mitigation potential:</span> {''}
              {data.attributes.carbon_mitigation}
            </p>
            <div className="max-w-xs font-sans text-2xs font-light text-text">
              <span className="font-medium uppercase">Project phase:</span> {''}
              {data.attributes.project_phases.data.map((pp) => pp.attributes.name).join(', ')}
            </div>
            <p className="max-w-xs font-sans text-2xs font-light text-text">
              <span className="font-medium uppercase">Area impacted:</span> {''}
              {data.attributes.hectares_impacted}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
