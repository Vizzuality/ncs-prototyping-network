/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import * as React from 'react';

import * as Select from '@radix-ui/react-select';
import { HiChevronDown } from 'react-icons/hi';

import { cn } from 'utils/cn';

type Option = {
  value: string;
  label: string;
};

const THEME = {
  primary: {
    arrow: 'fill-text',
    trigger: 'rounded-lg border-[1px] px-4 text-text',
    value: 'text-text',
  },
  secondary: {
    arrow: 'fill-butternut',
    trigger: 'border-none w-[180px] text-indigo justify-end space-x-2',
    value: 'text-indigo',
  },
};

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <Select.Item
      ref={ref}
      className={cn(
        'relative flex h-8 w-full cursor-pointer items-center pl-4 outline-none focus:bg-background focus:text-indigo',
        className
      )}
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});

const SelectComponent = ({
  theme = 'primary',
  type,
  options,
  onValueChange,
}: {
  theme?: 'primary' | 'secondary';
  type: string;
  options: Option[];
  onValueChange: (value: string) => void;
}): JSX.Element => {
  return (
    <div>
      <Select.Root onValueChange={onValueChange}>
        <Select.Trigger
          className={cn({
            'inline-flex h-10 items-center justify-center': true,
            [THEME[theme].trigger]: !!theme,
          })}
          aria-label={type}
        >
          <Select.Value
            className={cn({
              [THEME[theme].value]: !!theme,
            })}
            placeholder={type}
          />
          <HiChevronDown
            className={cn({
              [THEME[theme].arrow]: !!theme,
            })}
            size={25}
          />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="z-20 mt-10 w-full overflow-hidden rounded-lg border bg-white text-base text-text">
            <Select.ScrollUpButton>^</Select.ScrollUpButton>
            <Select.Viewport>
              <Select.Group>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton>
              <HiChevronDown className="fill-text" size={20} />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default SelectComponent;
