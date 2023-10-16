import { useEffect } from 'react';

import { useMap } from 'react-map-gl';

export const MapImage = ({ id, src, options = {} }) => {
  const { ['projects-map']: map } = useMap();

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
