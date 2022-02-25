import React from "react";

export type Props = {
  title: string;
  description?: string;
};

export const UIHeading: React.VFC<Props> = ({ title, description }) => {
  return (
    <div className="space-y-1 px-4 md:px-0">
      <h1 className="text-xl">{title}</h1>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
};
