import { MouseEventHandler } from 'react';

import Markdown from 'react-markdown';
import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';

import Wrapper from 'containers/wrapper';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import remarkGfm from 'remark-gfm';

import { useGetProjects } from '@/types/generated/project';

import { useSyncLocale } from '@/hooks/locale/sync-query';

const HomeProjects = (): JSX.Element => {
  const [locale] = useSyncLocale();
  const { data, isFetched } = useGetProjects({ populate: '*', locale });

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
                  href={`/projects/${project.attributes.slug}`}
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

                  <div className="to-black-0 absolute top-0 h-2/3 w-full bg-gradient-to-b from-black/50 text-white">
                    <div className="absolute top-0 flex flex-col !items-start space-y-2 px-8 py-4">
                      <Markdown
                        remarkPlugins={[remarkGfm]}
                        className="font-serif text-xs font-bold uppercase"
                      >
                        {project.attributes.project_name}
                      </Markdown>

                      <Markdown
                        remarkPlugins={[remarkGfm]}
                        className="font-sans text-m font-light leading-5 line-clamp-6 xl:text-lg xl:leading-6"
                      >
                        {project.attributes.long_title}
                      </Markdown>
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
