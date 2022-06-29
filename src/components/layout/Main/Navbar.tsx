import { MoonIcon, SunIcon } from "components/icons";
import { useAppDispatch, useAppSelector } from "store";

import { toggleDarkMode } from "store/settings";
import { useI18Next } from "i18n";

type Props = {};

const Navbar = (props: Props) => {
  const { t } = useI18Next();
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((s) => s.settings);
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div
      className={`${
        darkMode ? "bg-blue-dark text-white" : "bg-white text-dark-text-color"
      } shadow-sm`}>
      <div className="navbar-container">
        <p>{t("general.whereInTheWorld")}</p>
        <div
          className="flex items-center cursor-pointer"
          onClick={handleToggleDarkMode}>
          {!darkMode ? (
            <MoonIcon size={16} className="mx-2" />
          ) : (
            <SunIcon size={16} className="mx-2" />
          )}
          {!darkMode ? (
            <p>{t("general.darkMode")}</p>
          ) : (
            <p>{t("general.lightMode")}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
