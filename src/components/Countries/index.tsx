import Country from "models/Country";
import { CountryItem } from "components/items";
import { pageNames } from "constant";
import { stringifyUrl } from "query-string";
import { useGetCountriesQuery } from "store/service";
import { useNavigate } from "react-router-dom";

const Countries = () => {
  const { isFetching, data, isError } = useGetCountriesQuery();
  const navigate = useNavigate();

  const handleCountryDetail = (params: Country) => {
    navigate(
      stringifyUrl({
        url: pageNames.country,
        query: { name: params.name.common },
      })
    );
  };

  if (isFetching) return <p>loading</p>;
  if (isError) return <p>Error occured </p>;
  return (
    <div className="md:grid-cols-3 grid grid-cols-1 gap-4 mt-4">
      {data?.map((country) => (
        <CountryItem onClick={handleCountryDetail} country={country} />
      ))}
    </div>
  );
};

export default Countries;
