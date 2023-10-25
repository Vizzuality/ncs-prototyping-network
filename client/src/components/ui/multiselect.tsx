import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { HiCheck } from 'react-icons/hi';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

import Loading from 'components/loading';
import { cn } from 'utils/cn';

export interface MultiSelectProps {
  id: string | number;
  className?: string;
  options?: { label: string; value: string; disabled?: boolean }[];
  placeholder?: string;
  disabled?: boolean;
  values?: string[];
  loading?: boolean;
  batchSelectionActive?: boolean;
  batchSelectionLabel?: string;
  clearSelectionActive?: boolean;
  clearSelectionLabel?: string;
  onSelect?: (selection: string[]) => void;
}

export const MultiSelect = (props: MultiSelectProps): JSX.Element => {
  const {
    batchSelectionActive = false,
    batchSelectionLabel = 'Select all',
    clearSelectionActive = false,
    clearSelectionLabel = 'Clear all',
    disabled = false,
    options,
    placeholder = 'Select...',
    loading,
    values,
    onSelect,
  } = props;
  const ref = useRef(null);
  const initialValues = values || [];
  const [selected, setSelected] = useState<string[]>(initialValues);

  const SELECTED = useMemo(() => {
    if (loading) return 'Loading...';

    if (!selected.length) return placeholder || 'Select items';

    if (selected.length === 1) {
      const option = options.find((o) => o.value === selected[0]);
      if (option) return option.label;
      return null;
    }

    if (selected.length === options.length) return `All items selected`;

    if (selected.length > 1) return `Selected items (${selected.length})`;

    return null;
  }, [loading, options, placeholder, selected]);

  useEffect(() => {
    if (values) {
      setSelected(values);
    }
  }, [values]);

  const handleSelect = useCallback(
    (v: string[]) => {
      setSelected(v);
      if (onSelect) {
        onSelect(v);
      }
    },
    [onSelect]
  );

  const handleSelectAll = useCallback(() => {
    const allOptions = options.map((o) => o.value);
    setSelected(allOptions);
    if (onSelect) {
      onSelect(allOptions);
    }
  }, [onSelect, options]);

  const handleClearAll = useCallback(() => {
    setSelected([]);
    if (onSelect) {
      onSelect([]);
    }
  }, [onSelect]);

  return (
    <div className="w-full max-w-[185px] text-sm text-text">
      <Listbox
        as="div"
        className="space-y-1"
        disabled={disabled}
        value={selected}
        multiple
        onChange={handleSelect}
      >
        {({ open }: { open: boolean }) => (
          <>
            <div className="relative space-y-3" ref={ref}>
              <span className="inline-block w-full">
                <Listbox.Button
                  className={cn({
                    'relative w-full cursor-pointer rounded-lg border border-accents py-2.5 pl-4 text-left text-base leading-5 transition duration-150 ease-in-out':
                      true,
                    'border-grey-0/40 text-grey-0/40 border': disabled,
                    'bg-transparent': !!open,
                  })}
                >
                  <span className="block truncate pr-6">{SELECTED}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <Loading
                      visible={loading}
                      className="relative flex h-full w-full items-center"
                      iconClassName="w-3 h-3"
                    />

                    {!loading && open && <TiArrowSortedDown size={20} className="fill-indigo" />}
                    {!loading && !open && <TiArrowSortedUp size={20} className="fill-indigo" />}
                  </span>
                </Listbox.Button>
              </span>

              <Transition
                unmount={false}
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="shadow-select absolute z-50 !mt-1 w-full overflow-y-auto rounded-lg border border-accents"
              >
                <Listbox.Options
                  static
                  className="overflow-y-auto bg-white text-base leading-6 focus:outline-none"
                >
                  {(batchSelectionActive || clearSelectionActive) && (
                    <div className="flex space-x-5 px-5 pt-1 text-sm">
                      {batchSelectionActive && (
                        <button
                          className="text-grey-20 py-2 text-left underline"
                          type="button"
                          onClick={handleSelectAll}
                        >
                          {batchSelectionLabel}
                        </button>
                      )}

                      {clearSelectionActive && (
                        <button
                          className="py-2 text-left underline"
                          type="button"
                          onClick={handleClearAll}
                        >
                          {selected.length < 1 && clearSelectionLabel}
                          {selected.length >= 1 &&
                            selected.length !== options.length &&
                            `${clearSelectionLabel} (${selected.length} Selected)`}
                          {selected.length === options.length &&
                            `${clearSelectionLabel} (All selected)`}
                        </button>
                      )}
                    </div>
                  )}

                  {options.map((opt) => {
                    return (
                      <Listbox.Option key={opt.value} value={opt.value} disabled={opt.disabled}>
                        {({ active, disabled }) => (
                          <div
                            className={cn({
                              'relative flex cursor-pointer select-none items-center space-x-1.5 py-2 px-3 text-base text-text hover:bg-background':
                                true,
                              'text-indigo': !!active,
                              'pointer-events-none opacity-40': !!disabled,
                            })}
                          >
                            <div
                              className={cn({
                                'invisible w-4': true,
                                visible: selected.includes(opt.value),
                              })}
                            >
                              <HiCheck className="fill-indigo" size={16} />
                            </div>

                            <span
                              className={cn({
                                'block text-base text-text line-clamp-2': true,
                              })}
                            >
                              {opt.label}
                            </span>
                          </div>
                        )}
                      </Listbox.Option>
                    );
                  })}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default MultiSelect;
