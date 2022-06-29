import CountryModel from "models/Country";
import { millify } from "millify";
import { useI18Next } from "i18n";

type Props = {
  country: CountryModel;
  onClick: (country: CountryModel) => void;
};

const Country = (props: Props) => {
  const { t } = useI18Next();

  const handleClick = () => {
    props.onClick(props.country);
  };

  return (
    <div className=" w-full p-2 border-2 cursor-pointer" onClick={handleClick}>
      <img src={props.country.flags.svg} alt="" className="w-full h-40" />
      <p className="my-4 font-bold">{props.country.name.common}</p>
      {[
        {
          title: t("general.population"),
          value: millify(props.country.population),
        },
        {
          title: t("general.region"),
          value: props.country.region,
        },
        {
          title: t("general.capital"),
          value: props.country.capital,
        },
      ].map((item) => (
        <p className="text-dark-gray mt-1 text-sm" key={item.title}>
          <span className="text-dark-gray font-bold">{item.title}</span>:
          {item.value}
        </p>
      ))}
    </div>
  );
};

export default Country;
