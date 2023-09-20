import { useRecoilValue, useSetRecoilState } from 'recoil';

import { filtersAtom } from '@/store';
import MultiSelect from 'components/ui/multiselect';

import { PATHWAY_OPTIONS, ACTION_OPTIONS, P_PHASE_OPTIONS, P_CATEGORY_OPTIONS } from './constants';

const Filters = (): JSX.Element => {
  const filters = useRecoilValue(filtersAtom);
  const setFilters = useSetRecoilState(filtersAtom);

  return (
    <div className="flex w-9/12 flex-col space-y-1">
      <p className="text-xs uppercase text-text">Filter by:</p>
      <div className="flex items-center space-x-1">
        <MultiSelect
          id="pathways"
          placeholder="Pathway"
          options={PATHWAY_OPTIONS}
          onSelect={(v) => setFilters({ ...filters, pathway: v })}
        />
        <MultiSelect id="action" placeholder="Action type" options={ACTION_OPTIONS} />
        {/* <Select
          type="Action type"
          onValueChange={(v) => setFilters({ ...filters, action: v })}
          options={ACTION_OPTIONS}
        /> */}
        <MultiSelect id="phase" placeholder="Project phase" options={P_PHASE_OPTIONS} />
        {/* <Select
          type="Project phase"
          onValueChange={(v) => setFilters({ ...filters, phase: v })}
          options={P_PHASE_OPTIONS}
        /> */}
        <MultiSelect id="category" placeholder="Project category" options={P_CATEGORY_OPTIONS} />
        {/* <Select
          type="Project category"
          onValueChange={(v) => setFilters({ ...filters, category: v })}
          options={P_CATEGORY_OPTIONS}
        /> */}
      </div>
    </div>
  );
};

export default Filters;
