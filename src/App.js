import React, { Fragment } from "react";

import Main from "./pages/Main/index";

import GlobalStyle from "../src/styles/global";

const App = () => (
  <Fragment>
    <GlobalStyle></GlobalStyle>
    <Main></Main>
  </Fragment>
);

export default App;
