import Markdown from 'react-markdown';

import { useGetMessages } from '@/types/generated/message';
import { useGetProjects } from '@/types/generated/project';

import { useSyncLocale } from '@/hooks/query/sync-query';

import Wrapper from 'containers/wrapper';

const Data = (): JSX.Element => {
  const [locale] = useSyncLocale();

  const { data, isFetched } = useGetProjects({ populate: '*', locale });
  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({ locale });

  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

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

  const someTotalData =
    messages.projects_to_date ||
    messages.total_countries ||
    messages.total_partners ||
    messages.project_area_unit ||
    messages.people_supported ||
    messages.mitigation_potencial_unit;

  return (
    someTotalData && (
      <section className="bg-background">
        {isFetched && (
          <Wrapper>
            <div className="mx-6 flex justify-between py-7 xl:mx-20">
              {data?.data?.data && messages.projects_to_date && messages.tbd && (
                <div className="flex flex-col items-center space-y-2">
                  <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                    {data?.data?.data.length || messages.tbd}
                  </p>
                  <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                    {messages.projects_to_date}
                  </p>
                </div>
              )}

              {countries && messages.total_countries && messages.tbd && (
                <div className="flex flex-col items-center space-y-2">
                  <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                    {countries || messages.tbd}
                  </p>

                  <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                    {messages.total_countries}
                  </p>
                </div>
              )}

              {partners && messages.total_partners && messages.tbd && (
                <div className="flex flex-col items-center space-y-2">
                  <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                    {partners || messages.tbd}
                  </p>
                  <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                    {messages.total_partners}
                  </p>
                </div>
              )}

              {!isNaN(total_hectares_impacted) && messages.project_area_unit && (
                <div className="flex flex-col items-center space-y-2">
                  <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                    {total_hectares_impacted !== 0
                      ? Intl.NumberFormat().format(total_hectares_impacted)
                      : messages.tbd}
                  </p>
                  <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                    {messages.project_area_unit}
                  </p>
                </div>
              )}

              {!isNaN(total_people_supported) && messages.people_supported && messages.tbd && (
                <div className="flex flex-col items-center space-y-2">
                  <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                    {total_people_supported !== 0
                      ? Intl.NumberFormat().format(total_people_supported)
                      : messages.tbd}
                  </p>
                  <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                    {messages.people_supported}
                  </p>
                </div>
              )}

              {!isNaN(total_carbon_mitigation) &&
                messages.mitigation_potencial_unit &&
                messages.tbd && (
                  <div className="flex flex-col items-center space-y-2">
                    <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                      {total_carbon_mitigation !== 0
                        ? Intl.NumberFormat().format(total_carbon_mitigation)
                        : messages.tbd}
                    </p>
                    <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                      {messages.mitigation_potencial_unit}
                    </p>
                  </div>
                )}
            </div>

            <div className="flex w-full justify-end pb-3">
              <span className="mr-1 h-full text-xs font-normal text-text/50">*</span>
              <Markdown className="prose prose-link max-w-3xl text-xs font-normal text-text/50">
                {messages.disclaimer}
              </Markdown>
            </div>
          </Wrapper>
        )}
      </section>
    )
  );
};

export default Data;
