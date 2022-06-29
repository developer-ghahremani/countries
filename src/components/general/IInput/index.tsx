import React, { InputHTMLAttributes } from "react";

import { useAppSelector } from "store";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const IInput = ({ className, ...props }: Props) => {
  const { darkMode } = useAppSelector((s) => s.settings);
  return (
    <input
      className={`${
        darkMode
          ? "text-white placeholder:text-white bg-blue-dark"
          : "bg-white text-dark-text-color placeholder:text-dark-text-color"
      } p-2 rounded-lg shadow-md ${className}`}
      {...props}
    />
  );
};

export default IInput;
