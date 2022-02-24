import React, { useMemo } from "react";
import clsx from "clsx";

type Props<T extends Record<string, any>> = {
  headers: string[];
  items: T[];
  hiddenItems?: T[];
  keyProperty: keyof T;
  renderRow(item: T): React.ReactElement[];
};

export const UITable = <T extends Record<string, any>>({
  headers,
  items,
  hiddenItems = [],
  keyProperty,
  renderRow,
}: Props<T>) => {
  const hiddenItemKeys = useMemo(
    () => hiddenItems.map(({ [keyProperty]: key }) => key),
    [hiddenItems, keyProperty]
  );

  return (
    <table className="w-full">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="group p-0 pb-1">
              <div className="whitespace-nowrap bg-slate-500 py-2 text-sm font-normal text-slate-100 group-first:rounded-l-md group-last:rounded-r-md">
                {header}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item[keyProperty]}>
            {renderRow(item).map((element, index) => {
              const hidden = hiddenItemKeys.includes(item[keyProperty]);

              return (
                <td
                  key={index}
                  className={clsx("group p-0 transition-sizing", {
                    "pt-1": !hidden,
                  })}
                  aria-hidden={hidden}
                >
                  <div
                    className={clsx(
                      "overflow-hidden whitespace-nowrap bg-white px-6 py-4 text-sm duration-1000 group-first:rounded-l-md group-last:rounded-r-md",
                      {
                        hidden: hidden,
                      }
                    )}
                  >
                    {element}
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
