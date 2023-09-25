import { useRecoilState } from 'recoil';

import MultiSelect from 'components/ui/multiselect';
import { filtersAtom } from 'store';

import {
  PATHWAYS_OPTIONS,
  ACTION_TYPES_OPTIONS,
  P_PHASE_OPTIONS,
  P_CATEGORY_OPTIONS,
} from './constants';

const Filters = (): JSX.Element => {
  const [filters, setFilters] = useRecoilState(filtersAtom);

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
          values={filters.project_phase}
          options={P_PHASE_OPTIONS}
          onSelect={(v) => setFilters({ ...filters, project_phase: v })}
        />

        <MultiSelect
          id="category"
          placeholder="Project category"
          values={filters.project_category}
          options={P_CATEGORY_OPTIONS}
          onSelect={(v) => setFilters({ ...filters, project_category: v })}
        />
      </div>
    </div>
  );
};

export default Filters;
