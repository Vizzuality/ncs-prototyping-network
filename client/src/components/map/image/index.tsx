import { useEffect } from 'react';

import { useMap } from 'react-map-gl';

export const MapImage = ({
  id,
  mapId,
  src,
  options = {},
}: {
  id: string;
  mapId: string;
  src: string;
  options?: {
    pixelRatio?: number | undefined;
    sdf?: boolean | undefined;
    stretchX?: [number, number][] | undefined;
    stretchY?: [number, number][] | undefined;
    content?: [number, number, number, number] | undefined;
  };
}) => {
  const { [mapId]: map } = useMap();

  useEffect(() => {
    if (!map.hasImage(id)) {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        map.addImage(id, image, options);
      };
    }
  }, [map, id, src, options]);
  return null;
};

export default MapImage;
