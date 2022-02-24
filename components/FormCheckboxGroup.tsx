import { useState } from "react";

type CheckboxValue = string;

type Props<T extends CheckboxValue> = {
  name: string;
  options: Array<{ value: T; text?: string | number }>;
  value: T[];
  onChange(values: T[]): void;
};

export const FormCheckboxGroup = <T extends CheckboxValue>({
  name,
  options,
  value,
  onChange,
}: Props<T>) => {
  const onCheckboxChanged = (changedValue: T, checked: boolean) => {
    const nextValue = checked
      ? value.concat(changedValue)
      : value.filter((v) => v !== changedValue);

    console.log(nextValue, changedValue, checked);

    onChange(nextValue);
  };

  return (
    <>
      {options.map(({ value: optionValue, text }) => (
        <label key={optionValue}>
          <input
            type="checkbox"
            name={name}
            value={optionValue}
            checked={value.includes(optionValue)}
            onChange={(e) => onCheckboxChanged(optionValue, e.target.checked)}
          />
          {text ?? optionValue}
        </label>
      ))}
    </>
  );
};
