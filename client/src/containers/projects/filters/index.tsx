import { useRouter } from 'next/navigation';

import { useRecoilState } from 'recoil';

import { useGetActionTypes } from '@/types/generated/action-type';
import { useGetMessages } from '@/types/generated/message';
import { useGetPathways } from '@/types/generated/pathway';
import { useGetProjectCategories } from '@/types/generated/project-category';
import { useGetProjectPhases } from '@/types/generated/project-phase';

import { useSyncQueryParams } from '@/hooks/query';
import { useSyncLocale } from '@/hooks/query/sync-query';

import MultiSelect from 'components/ui/multiselect';
import { filtersAtom } from 'store';

const Filters = (): JSX.Element => {
  const { push } = useRouter();
  const [locale] = useSyncLocale();
  const queryParams = useSyncQueryParams();

  const [filters, setFilters] = useRecoilState(filtersAtom);

  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({
    populate: '*',
    locale,
  });

  const messages = messagesIsFetched && dataMessages.data.data[0].attributes;

  const { data: pathwaysData, isFetched: pathwaysIsFetched } = useGetPathways({ locale });
  const pathways = pathwaysIsFetched ? pathwaysData?.data.data.map((p) => p.attributes.name) : [];

  const { data: phasesData, isFetched: phasesIsFetched } = useGetProjectPhases({ locale });
  const phases = phasesIsFetched ? phasesData?.data.data.map((p) => p.attributes.name) : [];

  const { data: categoriesData, isFetched: categoriesIsFetched } = useGetProjectCategories({
    locale,
  });

  const categories = categoriesIsFetched
    ? categoriesData?.data.data.map((p) => p.attributes.name)
    : [];

  const { data: actionsData, isFetched: actionsIsFetched } = useGetActionTypes({ locale });
  const actions = actionsIsFetched ? actionsData?.data.data.map((p) => p.attributes.name) : [];

  const PATHWAYS_OPTIONS = pathways?.map((p) => {
    return {
      label: p,
      value: p,
    };
  });

  const P_PHASE_OPTIONS = phases?.map((p) => {
    return {
      label: p,
      value: p,
    };
  });

  const P_CATEGORY_OPTIONS = categories?.map((c) => {
    return {
      label: c,
      value: c,
    };
  });

  const ACTION_TYPES_ORDER = { Protect: 0, Manage: 1, Restore: 2 };
  const ACTION_TYPES_OPTIONS = actions
    .map((at) => {
      return {
        label: at,
        value: at,
      };
    })
    .sort((a, b) => ACTION_TYPES_ORDER[a.value] - ACTION_TYPES_ORDER[b.value]);

  return (
    <div className="flex w-9/12 flex-col space-y-1">
      <p className="text-xs uppercase text-text">{messages.filter_by}</p>
      <div className="flex items-center space-x-1">
        <MultiSelect
          id="pathways"
          placeholder={messages.pathway}
          options={PATHWAYS_OPTIONS}
          values={filters.pathways}
          onSelect={(v) => setFilters({ ...filters, pathways: v })}
        />
        <MultiSelect
          id="action"
          placeholder={messages.action_type}
          options={ACTION_TYPES_OPTIONS}
          values={filters.action_types}
          onSelect={(v) => setFilters({ ...filters, action_types: v })}
        />
        <MultiSelect
          id="phase"
          placeholder={messages.project_phase}
          values={filters.project_phases}
          options={P_PHASE_OPTIONS}
          onSelect={(v) => setFilters({ ...filters, project_phases: v })}
        />

        <MultiSelect
          id="category"
          placeholder={messages.project_category}
          values={filters.project_categories}
          options={P_CATEGORY_OPTIONS}
          onSelect={(v) => setFilters({ ...filters, project_categories: v })}
        />
        <button
          className="rounded-lg border border-accents px-4 py-2 font-sans text-base text-text"
          type="reset"
          onClick={() => {
            setFilters({
              pathways: [],
              action_types: [],
              project_phases: [],
              project_categories: [],
            });
            push(`/projects${queryParams}`);
          }}
        >
          {messages.reset}
        </button>
      </div>
    </div>
  );
};

export default Filters;
