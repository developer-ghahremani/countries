import Country from "pages/Country";
import Home from "pages/Home";
import { pageNames } from "constant";

const routes = [
  {
    path: pageNames.home,
    element: <Home />,
  },
  {
    path: pageNames.country,
    element: <Country />,
  },
];

export default routes;
