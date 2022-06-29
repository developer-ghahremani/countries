import React, { ButtonHTMLAttributes } from "react";

import { useAppSelector } from "store";

interface Props extends ButtonHTMLAttributes<any> {}

const IButton = (props: Props) => {
  const { darkMode } = useAppSelector((s) => s.settings);
  return (
    <button className={`shadow-sm py-1 px-6 rounded-md border-2`} {...props} />
  );
};

export default IButton;
