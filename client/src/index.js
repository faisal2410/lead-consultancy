import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { HelmetProvider } from "react-helmet-async";

// store
const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  // <React.StrictMode>
  <HelmetProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </HelmetProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();
