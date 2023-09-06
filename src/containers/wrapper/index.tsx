import { ReactNode } from 'react';

import { cn } from 'utils/cn';

const Wrapper = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={cn({
        'mx-auto flex w-full flex-grow flex-col px-10 md:container': true,
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

export default Wrapper;
