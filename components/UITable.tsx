import React from "react";

type Props<T extends Record<string, any>> = {
  headers: string[];
  items: T[];
  keyProperty: keyof T;
  renderRow(item: T): React.ReactElement[];
};

export const UITable = <T extends Record<string, any>>({
  headers,
  items,
  keyProperty,
  renderRow,
}: Props<T>) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="group sticky top-0 p-0 pb-1">
              <div className="bg-slate-500 py-2 text-sm font-normal text-slate-100 group-first:rounded-l-md group-last:rounded-r-md">
                {header}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item[keyProperty]}>
            {renderRow(item).map((element, index) => (
              <td key={index} className="group p-0 pt-1">
                <div className="bg-white px-6 py-4 text-sm group-first:rounded-l-md group-last:rounded-r-md">
                  {element}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
