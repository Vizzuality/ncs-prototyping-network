'use client';
import { useCallback, useMemo, useRef, useState } from 'react';

import { useMap } from 'react-map-gl';

import { AnimatePresence, motion } from 'framer-motion';
import { MapboxProps } from 'react-map-gl/dist/esm/mapbox/mapbox';

import Card from 'containers/projects/card';

import Map from 'components/map';
import Controls from 'components/map/controls';
import ZoomControl from 'components/map/controls/zoom';
import { CustomMapProps } from 'components/map/types';
import Select from 'components/ui/select';
import { Project } from 'types/project';
import BASEMAPS from 'utils/basemaps';
import { cn } from 'utils/cn';

import { SORT_OPTIONS } from './constants';

const initialViewState: MapboxProps['initialViewState'] = {
  bounds: [-237.65625, -78.836065, 238.007813, 78.767792],
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

  const { ['projects-map']: map } = useMap();

  //!TODO: add to recoil
  const basemap = 'light';

  const selectedBasemap = useMemo(() => BASEMAPS.find((b) => b.id === basemap).url, [basemap]);

  const { minZoom, maxZoom } = DEFAULT_PROPS;

  const handleViewState = useCallback(() => {
    if (map) {
      console.log('map', map);
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
    console.log('e', e);
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

            <div className="h-screen w-6/12 border" ref={mapRef}>
              <Map
                id="projects-map"
                mapStyle={selectedBasemap}
                minZoom={minZoom}
                maxZoom={maxZoom}
                initialViewState={initialViewState}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                onMapViewStateChange={handleViewState}
                bounds={bounds}
                // interactiveLayerIds={interactiveLayerIds}
                onClick={onClickHandler}
                // onMouseMove={handleMouseMove}
                // cursor={cursor}
                preserveDrawingBuffer
              >
                {() => (
                  <>
                    {/* <LayerManager /> */}

                    <Controls
                      className={cn({
                        'absolute top-6 right-6 items-center print:hidden': true,
                      })}
                    >
                      <div className="flex flex-col space-y-2 pt-1">
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
