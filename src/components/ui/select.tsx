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

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <Select.Item
      ref={ref}
      className={cn(
        'relative w-full cursor-pointer items-center justify-between outline-none focus:bg-accent focus:text-accent-foreground',
        className
      )}
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});

const SelectComponent = ({
  type,
  options,
  onValueChange,
}: {
  type: string;
  options: Option[];
  onValueChange: (value: string) => void;
}): JSX.Element => {
  return (
    <div>
      <Select.Root onValueChange={onValueChange}>
        <Select.Trigger
          className="inline-flex h-10 items-center justify-center rounded-lg border-[1px] px-4 text-text"
          aria-label={type}
        >
          <Select.Value placeholder={type} />
          <HiChevronDown className="fill-text" size={20} />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="rounded-xs mt-10 overflow-hidden bg-white text-sm text-text">
            <Select.ScrollUpButton>^</Select.ScrollUpButton>
            <Select.Viewport className="p-1">
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
