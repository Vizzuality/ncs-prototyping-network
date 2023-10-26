'use client';
import { useEffect, useMemo, useRef } from 'react';

import { Source, Layer, LayerProps } from 'react-map-gl';
import { useMap } from 'react-map-gl';

import bbox from '@turf/bbox';
import { GeoJSONSourceRaw, GeoJSONSourceOptions, LngLatBoundsLike } from 'mapbox-gl';
import { MapboxProps } from 'react-map-gl/dist/esm/mapbox/mapbox';

import Map from 'components/map';
import { WORLD_BOUNDS } from 'components/map/constants';
import Controls from 'components/map/controls';
import ZoomControl from 'components/map/controls/zoom';
import { CustomMapProps } from 'components/map/types';
import BASEMAPS from 'utils/basemaps';
import { cn } from 'utils/cn';

const initialViewState: MapboxProps['initialViewState'] = {
  bounds: WORLD_BOUNDS,
  fitBoundsOptions: {
    padding: 50,
  },
};

const DEFAULT_PROPS = {
  initialViewState: {
    longitude: 0,
    latitude: 20,
    zoom: 2,
    pitch: 0,
    bearing: 0,
  },
  minZoom: 1,
  maxZoom: 20,
};

const ExtentMap = ({ extent }): JSX.Element => {
  const mapRef = useRef(null);

  const { ['detail-map']: map } = useMap();

  const { minZoom, maxZoom } = DEFAULT_PROPS;

  const SOURCE: GeoJSONSourceRaw & GeoJSONSourceOptions = {
    type: 'geojson',
    data: extent,
  };

  const LAYERS: LayerProps[] = useMemo(() => {
    return [
      {
        id: 'extent-boundaries-layer',
        type: 'line',
        paint: {
          'line-color': '#e29717',
          'line-opacity': 1,
          'line-width': 2,
        },
      },
      {
        id: 'extent-fill-layer',
        type: 'fill',
        paint: {
          'fill-color': '#e29717',
          'fill-opacity': 0.2,
        },
      },
    ];
  }, []);

  useEffect(() => {
    if (map && extent) {
      const bboxTurf = bbox(extent) as LngLatBoundsLike;
      map.fitBounds(bboxTurf, { padding: 100 });
    }
  }, [map, extent]);

  const bounds: CustomMapProps['bounds'] = {
    bbox: [-237.65625, -78.836065, 238.007813, 78.767792],
    options: {
      padding: {
        top: 50,
        right: 20,
        bottom: 50,
        left: 640,
      },
    },
  };

  return (
    <div className="relative h-[400px] w-[576px] shadow-2xl" ref={mapRef}>
      <Map
        id="detail-map"
        mapStyle={BASEMAPS[0].url}
        minZoom={minZoom}
        maxZoom={maxZoom}
        initialViewState={initialViewState}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        bounds={bounds}
        preserveDrawingBuffer
      >
        {() => (
          <>
            <Source {...SOURCE}>
              {LAYERS.map((layer) => (
                <Layer key={layer.id} {...layer} />
              ))}
            </Source>

            <Controls
              className={cn({
                'absolute top-3 right-3 items-center rounded-none print:hidden': true,
              })}
            >
              <div className="flex flex-col space-y-2">
                <ZoomControl mapId="detail-map" />
              </div>
            </Controls>
          </>
        )}
      </Map>
    </div>
  );
};

export default ExtentMap;
