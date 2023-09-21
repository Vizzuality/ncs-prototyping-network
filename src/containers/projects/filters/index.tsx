import { useRecoilState } from 'recoil';

import { filtersAtom } from '@/store';
import MultiSelect from 'components/ui/multiselect';

import { PATHWAY_OPTIONS, ACTION_OPTIONS, P_PHASE_OPTIONS, P_CATEGORY_OPTIONS } from './constants';

const Filters = (): JSX.Element => {
  const [filters, setFilters] = useRecoilState(filtersAtom);

  return (
    <div className="flex w-9/12 flex-col space-y-1">
      <p className="text-xs uppercase text-text">Filter by:</p>
      <div className="flex items-center space-x-1">
        <MultiSelect
          id="pathways"
          placeholder="Pathway"
          options={PATHWAY_OPTIONS}
          values={filters.pathway}
          onSelect={(v) => setFilters({ ...filters, pathway: v })}
        />
        <MultiSelect
          id="action"
          placeholder="Action type"
          options={ACTION_OPTIONS}
          values={filters.action}
          onSelect={(v) => setFilters({ ...filters, action: v })}
        />
        <MultiSelect
          id="phase"
          placeholder="Project phase"
          values={filters.phase}
          options={P_PHASE_OPTIONS}
          onSelect={(v) => setFilters({ ...filters, phase: v })}
        />

        <MultiSelect
          id="category"
          placeholder="Project category"
          values={filters.category}
          options={P_CATEGORY_OPTIONS}
          onSelect={(v) => setFilters({ ...filters, category: v })}
        />
      </div>
    </div>
  );
};

export default Filters;
