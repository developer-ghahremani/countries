import React, { SelectHTMLAttributes } from "react";

import { useAppSelector } from "store";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  value?: string;
}

const ISelect = ({ className, options, value, ...props }: Props) => {
  const { darkMode } = useAppSelector((s) => s.settings);
  return (
    <select
      className={`select-component  ${
        darkMode ? "bg-blue-dark text-white" : "bg-white "
      } ${className} shadow-md`}
      aria-label="Default select example"
      {...props}>
      {options.map((option) => (
        <option value={option.value} selected={value === option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default ISelect;
