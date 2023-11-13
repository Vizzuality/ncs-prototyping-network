import { MouseEventHandler } from 'react';

import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { useGetProjects } from '@/types/generated/project';

import Wrapper from 'containers/wrapper';
import { toSlug } from 'utils/data';

const HomeProjects = (): JSX.Element => {
  const { data, isFetched } = useGetProjects({ populate: '*' });

  const SampleNextArrow = ({ onClick }: { onClick?: MouseEventHandler<HTMLButtonElement> }) => {
    return (
      <button
        className="absolute right-0 z-10 flex h-16 w-8 cursor-pointer items-center bg-spring"
        onClick={onClick}
      >
        <HiChevronRight color="white" size={40} />
      </button>
    );
  };

  const SamplePrevArrow = ({ onClick }: { onClick?: MouseEventHandler<HTMLButtonElement> }) => {
    return (
      <button
        className="absolute left-0 z-10 flex h-16 w-8 cursor-pointer items-center bg-spring"
        onClick={onClick}
      >
        <HiChevronLeft color="white" size={40} />
      </button>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const shuffleProjects = (array) => {
    return array?.sort(() => Math.random() - 0.5);
  };

  return (
    <Wrapper>
      <section className="flex flex-col space-y-12 py-14">
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-4xl font-semibold text-indigo">
            NCS Prototyping Projects
          </h4>
          <p className="pt-2 text-lg font-light leading-7 text-text">
            The NCS Prototyping Network strengthens the bridge between global NCS science and local
            NCS implementation. The network provides a cross-project community of learning and
            collaboration, and facilitates a constant feedback loop to improve implementation
            through adaptive management. Additional data and case studies from around the world are
            available through naturebase.
          </p>
        </div>
        <div>
          {isFetched && (
            <Slider {...settings}>
              {shuffleProjects(data?.data?.data)?.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${toSlug(project.attributes.project_name)}`}
                  className="relative"
                >
                  <Image
                    alt={project.attributes.header_photo.data.attributes.formats.large?.name}
                    src={
                      project.attributes.header_photo.data.attributes.formats.large?.url ||
                      'https://dummyimage.com/330x290/000/fff&text=+'
                    }
                    width={600}
                    height={600}
                    className="h-[250px] object-cover xl:h-[339px]"
                  />

                  <div className="absolute top-0 h-full w-full bg-black/25 text-white">
                    <div className="absolute top-0 flex flex-col !items-start space-y-2 px-8 py-4">
                      <h3 className="font-serif text-xs font-bold uppercase">
                        {project.attributes.project_name}
                      </h3>
                      <p className="font-sans text-m font-light leading-5 line-clamp-6 xl:text-lg xl:leading-6">
                        {project.attributes.long_title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          )}
        </div>
      </section>
    </Wrapper>
  );
};

export default HomeProjects;
