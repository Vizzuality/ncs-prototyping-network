import { useRecoilState } from 'recoil';

import { useGetActionTypes } from '@/types/generated/action-type';
import { useGetPathways } from '@/types/generated/pathway';
import { useGetProjectCategories } from '@/types/generated/project-category';
import { useGetProjectPhases } from '@/types/generated/project-phase';

import MultiSelect from 'components/ui/multiselect';
import { filtersAtom } from 'store';

const Filters = (): JSX.Element => {
  const [filters, setFilters] = useRecoilState(filtersAtom);

  const { data: pathwaysData, isFetched: pathwaysIsFetched } = useGetPathways();
  const pathways = pathwaysIsFetched ? pathwaysData?.data.data.map((p) => p.attributes.name) : [];

  const { data: phasesData, isFetched: phasesIsFetched } = useGetProjectPhases();
  const phases = phasesIsFetched ? phasesData?.data.data.map((p) => p.attributes.name) : [];

  const { data: categoriesData, isFetched: categoriesIsFetched } = useGetProjectCategories();
  const categories = categoriesIsFetched
    ? categoriesData?.data.data.map((p) => p.attributes.name)
    : [];

  const { data: actionsData, isFetched: actionsIsFetched } = useGetActionTypes();
  const actions = actionsIsFetched ? actionsData?.data.data.map((p) => p.attributes.name) : [];

  const PATHWAYS_OPTIONS = pathways.map((p) => {
    return {
      label: p,
      value: p,
    };
  });

  const P_PHASE_OPTIONS = phases.map((p) => {
    return {
      label: p,
      value: p,
    };
  });

  const P_CATEGORY_OPTIONS = categories.map((c) => {
    return {
      label: c,
      value: c,
    };
  });

  const ACTION_TYPES_OPTIONS = actions.map((at) => {
    return {
      label: at,
      value: at,
    };
  });

  return (
    <div className="flex w-9/12 flex-col space-y-1">
      <p className="text-xs uppercase text-text">Filter by:</p>
      <div className="flex items-center space-x-1">
        <MultiSelect
          id="pathways"
          placeholder="Pathway(s)"
          options={PATHWAYS_OPTIONS}
          values={filters.pathways}
          onSelect={(v) => setFilters({ ...filters, pathways: v })}
        />
        <MultiSelect
          id="action"
          placeholder="Action type(s)"
          options={ACTION_TYPES_OPTIONS}
          values={filters.action_types}
          onSelect={(v) => setFilters({ ...filters, action_types: v })}
        />
        <MultiSelect
          id="phase"
          placeholder="Project phase"
          values={filters.project_phases}
          options={P_PHASE_OPTIONS}
          onSelect={(v) => setFilters({ ...filters, project_phases: v })}
        />

        <MultiSelect
          id="category"
          placeholder="Project category"
          values={filters.project_categories}
          options={P_CATEGORY_OPTIONS}
          onSelect={(v) => setFilters({ ...filters, project_categories: v })}
        />
      </div>
    </div>
  );
};

export default Filters;
