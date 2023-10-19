import Wrapper from 'containers/wrapper';
import { useTotalData } from 'hooks/projects';

const Data = (): JSX.Element => {
  const totalDataQuery = useTotalData({});

  return (
    <section className="bg-background">
      <Wrapper>
        <div className="mx-6 flex justify-between py-7 xl:mx-20">
          {totalDataQuery.data?.projects && (
            <div className="flex flex-col items-center space-y-2">
              <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                {totalDataQuery.data?.projects}
              </p>
              <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                Projects to Date
              </p>
            </div>
          )}

          {totalDataQuery.data?.countries && (
            <div className="flex flex-col items-center space-y-2">
              <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                {totalDataQuery.data?.countries}
              </p>
              <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                Countries Across the World
              </p>
            </div>
          )}

          {totalDataQuery.data?.partners && (
            <div className="flex flex-col items-center space-y-2">
              <p className="xl:4xl font-sans text-3xl font-bold text-spring">
                {totalDataQuery.data?.partners}
              </p>
              <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                Partners Working Together
              </p>
            </div>
          )}

          {totalDataQuery.data?.total_people_supported && (
            <div className="flex flex-col items-center space-y-2">
              <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                {totalDataQuery.data?.total_people_supported}
              </p>
              <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                People Supported
              </p>
            </div>
          )}

          {totalDataQuery.data?.total_area_ha_impacted && (
            <div className="flex flex-col items-center space-y-2">
              <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                {totalDataQuery.data?.total_area_ha_impacted}
              </p>
              <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                Hectares Impacted
              </p>
            </div>
          )}

          {totalDataQuery.data?.total_carbon_mitigation && (
            <div className="flex flex-col items-center space-y-2">
              <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                {totalDataQuery.data?.total_carbon_mitigation}
              </p>
              <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                Million Tons of Carbon Sequestered
              </p>
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  );
};

export default Data;
