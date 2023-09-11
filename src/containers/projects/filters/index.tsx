import { useRecoilValue, useSetRecoilState } from 'recoil';

import { filtersAtom } from '@/store';
import Select from 'components/ui/select';

import { PATHWAY_OPTIONS, ACTION_OPTIONS, P_PHASE_OPTIONS, P_CATEGORY_OPTIONS } from './constants';

const Filters = (): JSX.Element => {
  const filters = useRecoilValue(filtersAtom);
  const setFilters = useSetRecoilState(filtersAtom);

  return (
    <div className="flex flex-col space-y-1">
      <p className="text-xs uppercase text-text">Filter by:</p>
      <div className="flex items-center space-x-1">
        <Select
          type="Pathway"
          onValueChange={(v) => setFilters({ ...filters, pathway: v })}
          options={PATHWAY_OPTIONS}
        />
        <Select
          type="Action type"
          onValueChange={(v) => setFilters({ ...filters, action: v })}
          options={ACTION_OPTIONS}
        />

        <Select
          type="Project phase"
          onValueChange={(v) => setFilters({ ...filters, phase: v })}
          options={P_PHASE_OPTIONS}
        />
        <Select
          type="Project category"
          onValueChange={(v) => setFilters({ ...filters, category: v })}
          options={P_CATEGORY_OPTIONS}
        />
      </div>
    </div>
  );
};

export default Filters;
