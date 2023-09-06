import Wrapper from 'containers/wrapper';

import Carousel from '@/components/carousel/component';

const HomeProjects = (): JSX.Element => {
  return (
    <Wrapper>
      <section className="flex flex-col space-y-12 py-10">
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-4xl  text-indigo">What we do</h4>
          <p className="text-xl font-semibold">Local and global teams work together to: </p>
        </div>
        <Carousel
          slide={0}
          slides={[
            {
              id: 1,
              content: (
                <div
                  className="relative w-full"
                  style={{
                    paddingBottom: '56.25%',
                  }}
                >
                  <div
                    className="absolute h-full w-full rounded-3xl bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: 'url(https://dummyimage.com/466x250/000/fff.png&text=01)',
                    }}
                  />
                </div>
              ),
            },
            {
              id: 2,
              content: (
                <div
                  className="relative w-full"
                  style={{
                    paddingBottom: '56.25%',
                  }}
                >
                  <div
                    className="absolute h-full w-full rounded-3xl bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: 'url(https://dummyimage.com/466x250/000/fff.png&text=02)',
                    }}
                  />
                </div>
              ),
            },
            {
              id: 3,
              content: (
                <div
                  className="relative w-full"
                  style={{
                    paddingBottom: '56.25%',
                  }}
                >
                  <div
                    className="absolute h-full w-full rounded-3xl bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: 'url(https://dummyimage.com/466x250/000/fff.png&text=03)',
                    }}
                  />
                </div>
              ),
            },
            {
              id: 4,
              content: (
                <div
                  className="relative w-full"
                  style={{
                    paddingBottom: '56.25%',
                  }}
                >
                  <div
                    className="absolute h-full w-full rounded-3xl bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: 'url(https://dummyimage.com/466x250/000/fff.png&text=04)',
                    }}
                  />
                </div>
              ),
            },
          ]}
        />
      </section>
    </Wrapper>
  );
};

export default HomeProjects;
