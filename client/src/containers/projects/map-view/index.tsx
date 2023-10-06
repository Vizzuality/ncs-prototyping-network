'use client';
import { useCallback, useMemo, useRef, useState } from 'react';

import { useMap } from 'react-map-gl';

import { AnimatePresence, motion } from 'framer-motion';
import { MapboxProps } from 'react-map-gl/dist/esm/mapbox/mapbox';
import { useRecoilValue } from 'recoil';

import Map from 'components/map';
import { WORLD_BOUNDS } from 'components/map/constants';
import Controls from 'components/map/controls';
import ZoomControl from 'components/map/controls/zoom';
import { CustomMapProps } from 'components/map/types';
import Select from 'components/ui/select';
import Card from 'containers/projects/card';
import { SORT_OPTIONS } from 'containers/projects/map-view/constants';
import LayerManager from 'containers/projects/map-view/layer-manager';
import Tabs from 'containers/projects/map-view/tabs';
import { basemapAtom } from 'store';
import { Project } from 'types/project';
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

const MapView = ({ data }: { data: Project[] }): JSX.Element => {
  const mapRef = useRef(null);
  const [sortedBy, setSortedBy] = useState<string>('country');

  const basemap = useRecoilValue(basemapAtom);

  const { ['projects-map']: map } = useMap();

  const selectedBasemap = useMemo(() => BASEMAPS.find((b) => b.id === basemap).url, [basemap]);

  const { minZoom, maxZoom } = DEFAULT_PROPS;

  const handleViewState = useCallback(() => {
    if (map) {
      console.info('map', map);
      // console.log('map', map.getStyle().layers);
    }
  }, [map]);

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

  const onClickHandler = (e: Parameters<CustomMapProps['onClick']>[0]) => {
    console.info('e', e);
  };

  const getSortedData = (arr: Project[], sortedBy: string) => {
    if (!sortedBy) return arr;

    const sortedArr = [...arr].sort((a, b) => (a[sortedBy] < b[sortedBy] ? -1 : 1));

    return sortedArr;
  };

  const sortedData = getSortedData(data, sortedBy);

  return (
    <AnimatePresence>
      <motion.div
        className="z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.25, duration: 0.3 }}
      >
        {!sortedData.length && (
          <div className="flex h-64 w-full items-center justify-center">
            <p className="font-serif text-lg font-semibold text-indigo">No projects found</p>
          </div>
        )}
        {!!sortedData.length && (
          <div className="flex space-x-6">
            <div className="w-6/12">
              <div className="flex items-center justify-end space-x-6">
                <p className="font-sans text-xs text-text">SORT BY:</p>
                <div className="mb-1">
                  <Select
                    theme="secondary"
                    type="Country"
                    onValueChange={(v) => setSortedBy(v)}
                    options={SORT_OPTIONS}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {sortedData.map((project) => (
                  <div key={project.id}>
                    <Card data={project} />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-11 h-screen w-6/12" ref={mapRef}>
              <div className="absolute top-3 right-14 z-10">
                <Tabs />
              </div>
              <Map
                id="projects-map"
                mapStyle={selectedBasemap}
                minZoom={minZoom}
                maxZoom={maxZoom}
                initialViewState={initialViewState}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                onMapViewStateChange={handleViewState}
                bounds={bounds}
                onClick={onClickHandler}
                preserveDrawingBuffer
              >
                {() => (
                  <>
                    <LayerManager />

                    <Controls
                      className={cn({
                        'absolute top-3 right-3 items-center rounded-none print:hidden': true,
                      })}
                    >
                      <div className="flex flex-col space-y-2">
                        <ZoomControl mapId="projects-map" />
                      </div>
                    </Controls>
                  </>
                )}
              </Map>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MapView;
