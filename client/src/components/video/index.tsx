/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Config } from 'react-player';

import { BaseReactPlayerProps } from 'react-player/base';
import ReactPlayer from 'react-player/lazy';
import { cn } from 'utils/cn';

interface VideoProps extends BaseReactPlayerProps {
  className?: string;
  config?: Config;
}

export const Video = ({
  className,
  config,
  loop = false,
  playing = false,
  url,
  height,
  width,
}: VideoProps): JSX.Element => {
  return (
    <ReactPlayer
      className={cn({
        [className]: !!className,
      })}
      width={width}
      height={height}
      url={url}
      loop={loop}
      playing={playing}
      config={config}
      controls={false}
    />
  );
};

export default Video;
