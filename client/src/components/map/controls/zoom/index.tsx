import { useCallback, MouseEvent } from 'react';

import { useMap } from 'react-map-gl';

import { HiOutlinePlusSm, HiMinusSm } from 'react-icons/hi';

import { cn } from 'utils/cn';

const COMMON_CLASSES =
  'group bg-white p-1 hover:bg-gray-100 active:outline active:outline-2 active:-outline-offset-[5px] active:outline-brand-400/40 disabled:bg-gray-50 disabled:outline-none';

export const ZoomControl = ({ className, mapId }: { className?: string; mapId: string }) => {
  const { [mapId]: map } = useMap();
  const zoom = map?.getZoom();
  const minZoom = map?.getMinZoom();
  const maxZoom = map?.getMaxZoom();

  const increaseZoom = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (!map) return null;

      map.zoomIn();
    },
    [map]
  );

  const decreaseZoom = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (!map) return null;

      map.zoomOut();
    },
    [map]
  );

  return (
    <div
      className={cn({
        'inline-flex flex-col shadow-md shadow-black/10': true,
        [className]: !!className,
      })}
    >
      <button
        className={cn({
          [COMMON_CLASSES]: true,
        })}
        aria-label="Zoom in"
        type="button"
        disabled={zoom >= maxZoom}
        onClick={increaseZoom}
      >
        <HiOutlinePlusSm className="group-disabled:fill-grey-75 h-5 w-5 fill-gray-500" size={16} />
      </button>
      <button
        className={cn({
          [COMMON_CLASSES]: true,
        })}
        aria-label="Zoom out"
        type="button"
        disabled={zoom <= minZoom}
        onClick={decreaseZoom}
      >
        <HiMinusSm className="group-disabled:fill-grey-75 h-5 w-5 fill-gray-500" size={16} />
      </button>
    </div>
  );
};

export default ZoomControl;
