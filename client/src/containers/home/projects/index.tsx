import { MouseEventHandler } from 'react';

import Slider from 'react-slick';

import Image from 'next/image';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import Wrapper from 'containers/wrapper';
import { useProjects } from 'hooks/projects';

const HomeProjects = (): JSX.Element => {
  const projectsQuery = useProjects();
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
        <div className="">
          <Slider {...settings}>
            {projectsQuery.data?.map((project) => (
              <div key={project.id} className="relative">
                <Image
                  alt="Project sample photo"
                  src="https://dummyimage.com/330x290/000/fff&text=+"
                  width={333}
                  height={200}
                />
                <div className="absolute top-0 flex flex-col !items-start space-y-2 px-8 py-4 text-white">
                  <h3 className="font-serif text-xs font-bold uppercase">{project.project_name}</h3>
                  <p className="font-sans text-m font-light leading-5 line-clamp-6 xl:text-lg xl:leading-6">
                    {project.long_title}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Wrapper>
  );
};

export default HomeProjects;
