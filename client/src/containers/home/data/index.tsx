import { useGetProjects } from '@/types/generated/project';

import Wrapper from 'containers/wrapper';

const Data = (): JSX.Element => {
  const { data, isFetched } = useGetProjects({ populate: '*' });

  const countriesArray = data?.data?.data.map(
    (project) => project.attributes.country.data.attributes.name
  );
  const countries = countriesArray?.filter((c, idx) => countriesArray.indexOf(c) === idx).length;

  const partnersArray = data?.data?.data.map((project) => project.attributes.primary_partners);

  const partners = partnersArray?.filter((c, idx) => partnersArray.indexOf(c) === idx).length;

  const total_people_supported = data?.data?.data?.reduce(
    (acc, p) => acc + p.attributes.people_supported,
    0
  );

  const total_hectares_impacted = data?.data?.data?.reduce(
    (acc, p) => acc + p.attributes.hectares_impacted,
    0
  );

  const total_carbon_mitigation = data?.data?.data?.reduce(
    (acc, p) => acc + p.attributes.carbon_mitigation,
    0
  );

  return (
    <section className="bg-background">
      <Wrapper>
        {isFetched && (
          <div className="mx-6 flex justify-between py-7 xl:mx-20">
            {data?.data?.data && !!data?.data?.data.length && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {data?.data?.data.length}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  Projects to Date
                </p>
              </div>
            )}

            {countries && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">{countries}</p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  Countries Across the World
                </p>
              </div>
            )}

            {partners && (
              <div className="flex flex-col items-center space-y-2">
                <p className="xl:4xl font-sans text-3xl font-bold text-spring">{partners}</p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  Partners Working Together
                </p>
              </div>
            )}

            {!isNaN(total_hectares_impacted) && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {Intl.NumberFormat('en-IN').format(total_hectares_impacted)}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  Area Impacted (ha)
                </p>
              </div>
            )}

            {!isNaN(total_people_supported) && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {Intl.NumberFormat('en-IN').format(total_people_supported)}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  People Supported
                </p>
              </div>
            )}

            {!isNaN(total_carbon_mitigation) && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {Intl.NumberFormat('en-IN').format(total_carbon_mitigation)}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  Mitigation Potential (tCO<sub>2</sub>e)<sup>*</sup>
                </p>
              </div>
            )}
          </div>
        )}
        <p className="pb-3 text-xs text-text/70">
          <span className="text-sm">*</span> Mitigation values presented may or may not be
          equivalent to carbon credit potential depending on methodology and timeframe.
        </p>
      </Wrapper>
    </section>
  );
};

export default Data;
