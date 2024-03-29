import Wrapper from 'containers/wrapper';

const Hero = (): JSX.Element => {
  return (
    <section className=" bg-[url('/images/home/hero.png')] bg-cover bg-no-repeat">
      <div className="absolute right-4 bottom-96 z-50">
        <div className="bg-white/40 py-2" style={{ writingMode: 'vertical-lr' }}>
          <p className="whitespace-nowrap text-xs text-black">© Geoffrey Lipsett-Moore/TNC</p>
        </div>
      </div>
      <Wrapper>
        <div className="mb-64 mt-44 flex flex-col items-center space-y-8 py-10 text-white">
          <h2 className="font-serif text-4xl font-semibold">15 Projects. Limitless Potential.</h2>
          <p className="max-w-4xl text-center text-xl leading-9 xl:text-2xl">
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
