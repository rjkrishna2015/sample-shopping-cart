import React from "react";
import ReactDOM from "react-dom/client";
// BOOTSTRAP STYLESHEET
import "bootstrap/dist/css/bootstrap.min.css";

// FONTAWESOME STYLESHEET - For Icons
import "font-awesome/css/font-awesome.min.css";

// MY CUSTOM STYLESHEET
import "./assets/css/index.css";
import App from "./App";

// REDUX SETUP
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux-store/services/reducers/index";
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
