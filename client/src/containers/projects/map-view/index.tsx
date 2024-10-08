'use client';
import { useEffect, useMemo, useRef, useState } from 'react';

import { useMap, Popup } from 'react-map-gl';
import Markdown from 'react-markdown';

import { useRouter } from 'next/navigation';

import { AnimatePresence, motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { MapboxProps } from 'react-map-gl/dist/esm/mapbox/mapbox';
import { useRecoilValue } from 'recoil';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { useGetMessages } from '@/types/generated/message';

import { Link } from '@/navigation';
import Map from 'components/map';
import { WORLD_BOUNDS } from 'components/map/constants';
import Controls from 'components/map/controls';
import ZoomControl from 'components/map/controls/zoom';
import MapImage from 'components/map/image';
import { CustomMapProps } from 'components/map/types';
import Select from 'components/ui/select';
import Card from 'containers/projects/card';
import { SORT_OPTIONS } from 'containers/projects/map-view/constants';
import LayerManager from 'containers/projects/map-view/layer-manager';
import Tabs from 'containers/projects/map-view/tabs';
import Total from 'containers/projects/map-view/total';
import { basemapAtom, filteredBboxAtom } from 'store';
import { PopUp } from 'types/project';
import BASEMAPS from 'utils/basemaps';
import { cn } from 'utils/cn';

const initialViewState: MapboxProps['initialViewState'] = {
  bounds: WORLD_BOUNDS,
  fitBoundsOptions: {
    padding: 20,
  },
};

const DEFAULT_PROPS = {
  initialViewState: {
    longitude: 0,
    latitude: 20,
    zoom: 0,
    pitch: 0,
    bearing: 0,
  },
  minZoom: 0,
  maxZoom: 20,
};

const MapView = ({ data }: { data }): JSX.Element => {
  const { push } = useRouter();

  const locale = useLocale();

  const mapRef = useRef(null);
  const [sortedBy, setSortedBy] = useState<string>('carbon_mitigation');

  const [projectsPopUp, setProjectsPopUp] = useState<PopUp>({
    popup: [],
    popupInfo: null,
    popUpPosition: {
      x: null,
      y: null,
    },
  });

  const filteredBbox = useRecoilValue(filteredBboxAtom);

  const basemap = useRecoilValue(basemapAtom);

  const { ['projects-map']: map } = useMap();

  const selectedBasemap = useMemo(() => BASEMAPS.find((b) => b.id === basemap).url, [basemap]);

  const { minZoom, maxZoom } = DEFAULT_PROPS;

  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({
    populate: '*',
    locale,
  });

  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

  // ? This effect will update bounds when filtering projects
  useEffect(() => {
    if (map) {
      map.fitBounds(filteredBbox, { padding: 20, maxZoom: 6 });
    }
  }, [filteredBbox, map, basemap]);

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

  const removePopup = () => {
    setProjectsPopUp({
      popup: [],
      popupInfo: null,
      popUpPosition: {
        x: null,
        y: null,
      },
    });
  };

  const onMouseEnterHandler = (e: Parameters<CustomMapProps['onMouseEnter']>[0]) => {
    const projectsFeature = e?.features?.find(({ layer }) => layer.id === 'projects-layer');

    if (projectsFeature) {
      setProjectsPopUp({
        ...projectsPopUp,
        popup: [e?.lngLat.lat, e?.lngLat.lng],
        popupInfo: projectsFeature.properties as PopUp['popupInfo'],
        popUpPosition: {
          x: e.point.x,
          y: e.point.y,
        },
      });

      if (!projectsFeature) {
        removePopup();
      }
    }
  };

  const onMouseLeaveHandler = () => {
    removePopup();
  };

  const projectSlug = useMemo(() => {
    return data?.find(
      (project) => project.attributes.project_name === projectsPopUp.popupInfo?.name
    )?.attributes.slug;
  }, [data, projectsPopUp.popupInfo?.name]);

  const onClickHandler = (e: Parameters<CustomMapProps['onClick']>[0]) => {
    const projectsFeature = e?.features?.find(({ layer }) => layer.id === 'projects-layer');

    if (projectsFeature && projectSlug) {
      push(`projects/${projectSlug}`);
    }
  };

  const getSortedData = (arr, sortedBy: string) => {
    const parsedArr = arr.map((project) => {
      return { ...project.attributes, id: project.id };
    });

    if (!sortedBy) return parsedArr;

    const sortedArr = [...parsedArr].sort((a, b) => (a[sortedBy] < b[sortedBy] ? 1 : -1));

    return sortedArr;
  };

  const sortedData = data && getSortedData(data, sortedBy);

  return (
    messages && (
      <AnimatePresence>
        <motion.div
          className="z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.25, duration: 0.3 }}
        >
          {!sortedData?.length && (
            <div className="flex h-64 w-full items-center justify-center">
              <p className="font-serif text-lg font-semibold text-indigo">{messages.no_projects}</p>
            </div>
          )}

          {!!sortedData?.length && (
            <div className="flex space-x-2 xl:space-x-6">
              <div className="no-scrollbar max-h-[80vh] w-4/12 overflow-hidden overflow-x-hidden overflow-y-scroll xl:w-6/12">
                <Total />

                {messages.disclaimer && (
                  <div className="flex w-full justify-end py-3 lg:pl-4">
                    <span className="mr-1 h-full text-xs font-normal text-text/50">*</span>

                    <Markdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      className="prose prose-default text-xs font-normal text-text/50"
                    >
                      {messages.disclaimer}
                    </Markdown>
                  </div>
                )}
                <div className="flex h-10 items-center justify-end space-x-3">
                  {sortedData?.length > 1 && (
                    <>
                      <p className="font-sans text-xs uppercase text-text">{messages.sort_by}</p>
                      <div className="mb-1">
                        <Select
                          theme="secondary"
                          type={messages.select_placeholder}
                          onValueChange={(v) => setSortedBy(v)}
                          options={SORT_OPTIONS}
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-2">
                  {sortedData?.map((project) => (
                    <div key={project.id}>
                      <Card id={project.id} slug={project.slug} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[80vh] w-8/12 xl:w-6/12" ref={mapRef}>
                <div className="absolute top-3 right-14 z-10">
                  <Tabs />
                </div>
                <Map
                  id="projects-map"
                  mapStyle={selectedBasemap}
                  minZoom={minZoom}
                  maxZoom={maxZoom}
                  initialViewState={initialViewState}
                  interactiveLayerIds={['projects-layer']}
                  mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                  // onMapViewStateChange={handleViewState}
                  bounds={bounds}
                  onClick={onClickHandler}
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                  preserveDrawingBuffer
                >
                  {() => (
                    <>
                      <LayerManager />
                      <MapImage id="marker" mapId="projects-map" src="/images/marker.svg" />

                      <Controls
                        className={cn({
                          'absolute top-3 right-3 items-center rounded-none print:hidden': true,
                        })}
                      >
                        <div className="flex flex-col space-y-2">
                          <ZoomControl mapId="projects-map" />
                        </div>
                      </Controls>
                      {!!projectsPopUp?.popup?.length && (
                        <Popup longitude={projectsPopUp.popup[1]} latitude={projectsPopUp.popup[0]}>
                          <Link href={`/projects/${projectSlug}`} locale={locale}>
                            <div className="px-2 py-1">
                              <p className="font-sans text-2xs text-gray-800">
                                {projectsPopUp.popupInfo.name}
                              </p>
                            </div>
                          </Link>
                        </Popup>
                      )}
                    </>
                  )}
                </Map>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    )
  );
};

export default MapView;
