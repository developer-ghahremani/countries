import Countries from "Countries";
import { Provider } from "react-redux";
import React from "react";
import store from "store";

type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <Countries />
    </Provider>
  );
};

export default App;
