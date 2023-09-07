import Wrapper from 'containers/wrapper';

const Hero = (): JSX.Element => {
  return (
    <section className="bg-[url('https://placebear.com/1200/500')] bg-cover bg-no-repeat">
      <Wrapper>
        <div className="mb-64 mt-44 flex flex-col items-center space-y-4 py-10 text-white">
          <h2 className="font-serif text-4xl font-semibold">15 Projects. Limitless Potencial.</h2>
          <p className="max-w-4xl text-center text-2xl">
            The Nature Conservancy is partnering with on-the-ground practitioners to help activate
            natural climate solutions (NCS). This Prototyping Network is field testing and
            evaluating high-impact strategies to be scaled around the world.
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
