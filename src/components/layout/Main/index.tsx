import Navbar from "./Navbar";
import React from "react";
import { useAppSelector } from "store";

type Props = { children: React.ReactNode };

const MailLayout = (props: Props) => {
  const { darkMode } = useAppSelector((s) => s.settings);
  return (
    <div
      className={`${
        darkMode
          ? " text-white bg-very-blue-dark"
          : "bg-light-gray text-dark-text-color"
      } font-nunito`}>
      <Navbar />
      <div className="h-auto max-w-4xl min-h-screen pt-4 mx-auto">
        {props.children}
      </div>
    </div>
  );
};

export default MailLayout;
