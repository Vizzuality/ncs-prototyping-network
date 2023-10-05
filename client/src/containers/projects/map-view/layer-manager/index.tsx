import { useMemo } from 'react';

import { Source, Layer } from 'react-map-gl';

import { GeoJSONSourceRaw, GeoJSONSourceOptions, CircleLayer } from 'mapbox-gl';
import { useRecoilValue } from 'recoil';

import { PROJECTS } from 'data/projects';
import { filtersAtom } from 'store';

const LayerManager = () => {
  const filters = useRecoilValue(filtersAtom);
  const { pathways, project_phase, action_types, project_category } = filters;
  const activedFilters = Object.values(filters).some((f) => f.length > 0);

  const GEOJSON = {
    type: 'FeatureCollection',
    features: PROJECTS.map((project) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [project.centroid_lat, project.centroid_long],
      },
      properties: {
        pathways: project.pathways,
        action_types: project.action_types,
        project_phase: project.project_phase,
        project_category: project.project_category,
      },
    })),
  } as GeoJSON.FeatureCollection;

  const SOURCE: GeoJSONSourceRaw & GeoJSONSourceOptions = {
    type: 'geojson',
    data: GEOJSON,
  };

  const LAYER: CircleLayer = useMemo(() => {
    return {
      id: 'projects-layer',
      type: 'circle',
      ...(activedFilters && {
        filter: [
          'all',
          ...(!!pathways.length
            ? [
                [
                  'any',
                  ...pathways.map((id) => {
                    return ['in', id, ['get', 'pathways']];
                  }),
                ],
              ]
            : []),
          ...(!!project_phase.length
            ? [
                [
                  'any',
                  ...project_phase.map((id) => {
                    return ['in', id, ['get', 'project_phase']];
                  }),
                ],
              ]
            : []),
          ...(!!action_types.length
            ? [
                [
                  'any',
                  ...action_types.map((id) => {
                    return ['in', id, ['get', 'action_types']];
                  }),
                ],
              ]
            : []),
          ...(!!project_category.length
            ? [
                [
                  'any',
                  ...project_category.map((id) => {
                    return ['in', id, ['get', 'project_category']];
                  }),
                ],
              ]
            : []),
        ],
      }),
      paint: {
        'circle-color': '#1F51FF',
        'circle-opacity': 0.5,
        'circle-radius': 10,
      },
      layout: {
        visibility: 'visible',
      },
    };
  }, [pathways, project_phase, project_category, action_types, activedFilters]);

  return (
    <Source {...SOURCE}>
      <Layer {...LAYER} />
    </Source>
  );
};

export default LayerManager;
