import React from "react";

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
  const onCheckboxChanged = (
    changedValue: T,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const withMetaKey =
      event.nativeEvent instanceof PointerEvent
        ? event.nativeEvent.metaKey
        : false;
    const { checked } = event.target;

    // メタキーが押されている場合はその要素自体とそれ以外をトグルする
    if (withMetaKey) {
      const nextValue =
        checked || value.length >= 2
          ? [changedValue]
          : options
              .map(({ value }) => value)
              .filter((value) => value !== changedValue);

      onChange(nextValue);

      return;
    }

    const nextValue = checked
      ? value.concat(changedValue)
      : value.filter((v) => v !== changedValue);

    if (nextValue.length === 0) {
      onChange(options.map(({ value }) => value));

      return;
    }

    onChange(nextValue);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {options.map(({ value: optionValue, text }) => (
          <label
            key={optionValue}
            className="mr-4 mb-2 flex select-none items-center space-x-1"
          >
            <input
              type="checkbox"
              className="text-slate-600 focus:ring focus:ring-slate-400"
              name={name}
              value={optionValue}
              checked={value.includes(optionValue)}
              onChange={(e) => onCheckboxChanged(optionValue, e)}
            />
            <span className="text-sm">{text ?? optionValue}</span>
          </label>
        ))}
      </div>
      <p className="flex justify-center text-xs text-slate-600">
        メタキーで単独選択
      </p>
    </div>
  );
};
