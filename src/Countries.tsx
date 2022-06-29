import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import routes from "routes";

type Props = {};

const Countries = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Countries;
