import { useLocation, useNavigate } from "react-router-dom";

import { IButton } from "components/general";
import { MainLayout } from "components/layout";
import { parse } from "query-string";
import { useGetCountryQuery } from "store/service";
import { useI18Next } from "i18n";

const Country = () => {
  const { t } = useI18Next();
  const navigate = useNavigate();
  const { search } = useLocation();
  const { name = "" } = parse(search);

  const { isFetching, data, isError } = useGetCountryQuery({
    name: typeof name === "string" ? name : "",
  });

  const handleBack = () => {
    navigate(-1);
  };

  if (isFetching || !data) return null;
  if (isError) return <p>Error occured</p>;
  return (
    <MainLayout>
      <div>
        <IButton onClick={handleBack}>{t("general.back")}</IButton>
      </div>
      <div className="md:grid-cols-2 grid items-center grid-cols-1 gap-4 mt-16">
        <img src={data[0].flags.png} alt="" />
        <div className="flex flex-col">
          <p className="text-lg font-bold">{data[0].name.common}</p>
          <p className="text-lg">{data[0].name.official}</p>
          <p>{data[0].region}</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Country;
