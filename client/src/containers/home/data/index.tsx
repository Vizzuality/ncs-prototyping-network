import Wrapper from 'containers/wrapper';
import { useProjects } from 'hooks/projects';

const Data = (): JSX.Element => {
  const projectsQuery = useProjects();

  const countriesArray = projectsQuery.data?.map((project) => project.country);
  const countries = countriesArray.filter((c, idx) => countriesArray.indexOf(c) === idx).length;

  const partnersArray = projectsQuery?.data?.map((project) => project.primary_partners);
  const partners = partnersArray.filter((c, idx) => partnersArray.indexOf(c) === idx).length;

  const total_people_supported = projectsQuery.data?.reduce(
    (acc, p) => acc + parseInt(p.people_supported),
    0
  );

  const total_hectares_impacted = projectsQuery.data?.reduce(
    (acc, p) => acc + parseInt(p.hectares_impacted),
    0
  );

  const total_carbon_mitigation = projectsQuery.data?.reduce(
    (acc, p) => acc + parseInt(p.carbon_mitigation),
    0
  );

  return (
    <section className="bg-background">
      <Wrapper>
        <div className="mx-6 flex justify-between py-7 xl:mx-20">
          {projectsQuery?.data && !!projectsQuery?.data.length && (
            <div className="flex flex-col items-center space-y-2">
              <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                {projectsQuery?.data.length}
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

          {!isNaN(total_hectares_impacted) && (
            <div className="flex flex-col items-center space-y-2">
              <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                {Intl.NumberFormat('en-IN').format(total_hectares_impacted)}
              </p>
              <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                Hectares Impacted
              </p>
            </div>
          )}

          {!isNaN(total_carbon_mitigation) && (
            <div className="flex flex-col items-center space-y-2">
              <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                {Intl.NumberFormat('en-IN').format(total_carbon_mitigation)}
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
