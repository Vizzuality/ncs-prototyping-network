'use client';
import { useEffect, useState } from 'react';

import { useLocale } from 'next-intl';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { useGetMessages } from '@/types/generated/message';
import { useGetPathways } from '@/types/generated/pathway';
import { useGetProjects } from '@/types/generated/project';

import { useSyncPathway } from '@/hooks/query/sync-query';

import Filters from 'containers/projects/filters';
import MapView from 'containers/projects/map-view';
import MetricsView from 'containers/projects/metrics-view';
import Tabs from 'containers/projects/tabs';
import Wrapper from 'containers/wrapper';
import { filtersAtom, headerStyleAtom, projectsViewAtom } from 'store';

const ProjectsPage = (): JSX.Element => {
  const locale = useLocale();
  const [pathway] = useSyncPathway();

  const { data: pathwaysData, isFetched } = useGetPathways({ locale });

  const {
    data: projectsData,
    isFetching: projectsIsFetching,
    isFetchedAfterMount: projectsIsFetched,
  } = useGetProjects({ populate: '*', locale });

  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({
    populate: '*',
    locale,
  });
  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

  const setHeaderStyle = useSetRecoilState(headerStyleAtom);
  const projectsView = useRecoilValue(projectsViewAtom);
  const [filters, setFilters] = useRecoilState(filtersAtom);

  const [dataFiltered, setDataFiltered] = useState(projectsData?.data.data || []);

  useEffect(() => {
    setHeaderStyle('dark');
  }, [setHeaderStyle]);

  useEffect(() => {
    if (pathway) {
      const pathways = isFetched ? pathwaysData?.data.data.map((p) => p.attributes.name) : [];
      const pathway_1 = pathwaysData?.data?.data[0]?.attributes.name;
      const pathway_2 = pathwaysData?.data.data[1]?.attributes.name
        .replace(/\([^()]*\)/g, '')
        .trim();
      const pathway_3 = pathwaysData?.data.data[3]?.attributes.name
        .replace(/\([^()]*\)/g, '')
        .trim();

      const getSpecificPathwayName = (pathway) => {
        switch (pathway) {
          case pathway_1:
            return [pathways[0]];
          case pathway_2:
            return [pathways[1], pathways[2]];
          case pathway_3:
            return [pathways[3], pathways[4]];
        }
      };

      setFilters({ ...filters, pathways: getSpecificPathwayName(pathway) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathwaysData?.data?.data, pathway]);

  useEffect(() => {
    const activedFilters = Object.values(filters).some((f) => f?.length > 0);
    const dataFinalFiltered = () => {
      const data = projectsData?.data?.data?.filter((project) => {
        if (filters.pathways.length > 0) {
          if (
            !filters.pathways.some((pw) =>
              project.attributes.pathways.data.map((pa) => pa.attributes.name).includes(pw)
            )
          )
            return false;
        }
        if (filters.project_phases.length > 0) {
          if (
            !filters.project_phases.some((pp) =>
              project.attributes.project_phases.data.map((pa) => pa.attributes.name).includes(pp)
            )
          )
            return false;
        }
        if (filters.action_types.length > 0) {
          if (
            !filters.action_types.some((at) =>
              project.attributes.action_types.data.map((pa) => pa.attributes.name).includes(at)
            )
          )
            return false;
        }
        if (filters.project_categories.length > 0) {
          if (
            !filters.project_categories.some((pc) =>
              project.attributes.project_categories.data
                .map((pa) => pa.attributes.name)
                .includes(pc)
            )
          )
            return false;
        }
        return true;
      });
      return data;
    };

    if (activedFilters) return setDataFiltered(dataFinalFiltered());

    if (!activedFilters) return setDataFiltered(projectsData?.data?.data || []);
  }, [filters, projectsData?.data?.data]);

  return (
    <Wrapper>
      <div className="sticky top-16 z-40 mt-16 flex items-center space-x-6 bg-white py-9">
        <Tabs />
        <Filters />
      </div>

      {!projectsIsFetched && projectsIsFetching && (
        <div className="flex h-64 w-full items-center justify-center">
          <p className="font-serif text-lg font-semibold text-indigo">{messages.loading}</p>
        </div>
      )}
      {projectsView === 'map' && projectsIsFetched && <MapView data={dataFiltered} />}
      {projectsView === 'metrics' && projectsIsFetched && <MetricsView data={dataFiltered} />}
    </Wrapper>
  );
};

export default ProjectsPage;
