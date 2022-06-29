import { IInput, ISelect } from "components/general";

import Countries from "components/Countries";
import { MainLayout } from "components/layout";
import { useI18Next } from "i18n";

type Props = {};

const Home = (props: Props) => {
  const { t } = useI18Next();
  return (
    <MainLayout>
      {/* <div className=" flex justify-between">
        <IInput
          className="md:w-1/2 w-full"
          placeholder={t("general.searchCountry")}
          type="text"
        />
        <ISelect
          options={[
            { label: "salam", value: "sss" },
            { label: "salam 1", value: "sss1" },
            { label: "salam 2", value: "sss2" },
          ]}
        />
      </div> */}
      <Countries />
    </MainLayout>
  );
};

export default Home;
