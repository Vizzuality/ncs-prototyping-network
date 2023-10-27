import { useMemo } from 'react';

import { Total } from 'types/project';

export function useTotalData({ dataFiltered }: { dataFiltered }) {
  const data = useMemo(() => {
    if (!dataFiltered) {
      return [];
    }

    const total_people_supported = dataFiltered?.reduce(
      (acc, p) => acc + p.attributes.people_supported,
      0
    );

    const total_hectares_impacted = dataFiltered?.reduce(
      (acc, p) => acc + p.attributes.hectares_impacted,
      0
    );

    const total_carbon_mitigation = dataFiltered?.reduce(
      (acc, p) => acc + p.attributes.carbon_mitigation,
      0
    );

    return {
      total_people_supported: Intl.NumberFormat('en-IN').format(total_people_supported),
      total_hectares_impacted: Intl.NumberFormat('en-IN').format(total_hectares_impacted),
      total_carbon_mitigation: Intl.NumberFormat('en-IN').format(total_carbon_mitigation),
    };
  }, [dataFiltered]);

  return {
    ...data,
  } as Total;
}