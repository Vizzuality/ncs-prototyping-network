import { MouseEventHandler } from 'react';

import Slider from 'react-slick';

import Image from 'next/image';

import Wrapper from 'containers/wrapper';

import { PROJECTS } from './constants';

const HomeProjects = (): JSX.Element => {
  const SampleNextArrow = ({ onClick }: { onClick?: MouseEventHandler<HTMLButtonElement> }) => {
    return (
      <button
        className="absolute right-0 z-10 h-16 w-8 cursor-pointer bg-spring"
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = ({ onClick }: { onClick?: MouseEventHandler<HTMLButtonElement> }) => {
    return (
      <button
        className="absolute left-0.5 z-10 h-16 w-8 cursor-pointer bg-spring"
        onClick={onClick}
      />
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
      <section className="flex flex-col space-y-12 py-10">
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-4xl  text-indigo">NCS Prototyping Projects</h4>
          <p className="pt-3 text-xl font-light leading-8 text-text">Each of the...</p>
        </div>
        <div className="">
          <Slider {...settings}>
            {PROJECTS.map((project) => (
              <div key={project.id} className="relative">
                <Image alt="Brasil Agroforestry" src={project.image} width={320} height={200} />
                <div className="absolute top-0 flex flex-col !items-start space-y-2 px-8 py-4 text-white">
                  <h3 className="font-serif text-base font-semibold uppercase">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
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
