import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import Reducer from "./store";
import { Provider } from "react-redux";
import logger from "redux-logger";

const store = createStore(Reducer, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);