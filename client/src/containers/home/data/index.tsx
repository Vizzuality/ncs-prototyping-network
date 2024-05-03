import { useGetProjects } from '@/types/generated/project';

import { useSyncLocale } from '@/hooks/query/sync-query';

import Wrapper from 'containers/wrapper';

const Data = (): JSX.Element => {
  const [locale] = useSyncLocale();

  const { data, isFetched } = useGetProjects({ populate: '*', locale });

  const countriesArray = data?.data?.data.map(
    (project) => project.attributes.country.data.attributes.name
  );
  const countries = countriesArray?.filter((c, idx) => countriesArray.indexOf(c) === idx).length;

  const partnersArray = data?.data?.data
    .map((project) => project.attributes.primary_partners)
    .flat();

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
      {isFetched && (
        <Wrapper>
          <div className="mx-6 flex justify-between py-7 xl:mx-20">
            {data?.data?.data && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {data?.data?.data.length || 'TBD'}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  Projects to Date
                </p>
              </div>
            )}

            <div className="flex flex-col items-center space-y-2">
              <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                {countries || 'TBD'}
              </p>
              <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                Countries Across the World
              </p>
            </div>

            {partners && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {partners || 'TBD'}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  Partners Working Together
                </p>
              </div>
            )}

            {!isNaN(total_hectares_impacted) && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {total_hectares_impacted !== 0
                    ? Intl.NumberFormat().format(total_hectares_impacted)
                    : 'TBD'}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  Project Area (ha)
                </p>
              </div>
            )}

            {!isNaN(total_people_supported) && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {total_people_supported !== 0
                    ? Intl.NumberFormat().format(total_people_supported)
                    : 'TBD'}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  People Supported
                </p>
              </div>
            )}

            {!isNaN(total_carbon_mitigation) && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {total_carbon_mitigation !== 0
                    ? Intl.NumberFormat().format(total_carbon_mitigation)
                    : 'TBD'}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  Mitigation Potential (tCO<sub>2</sub>e)<sup>*</sup>
                </p>
              </div>
            )}
          </div>
          <p className="pb-3 text-right text-xs text-text/50">
            <span className="text-sm">*</span> Mitigation values presented may or may not be
            equivalent to carbon credit potential depending on methodology and timeframe.
          </p>
        </Wrapper>
      )}
    </section>
  );
};

export default Data;
