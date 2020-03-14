import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Root from "./containers/Root";
import configureStore from './store/configureStore';
require("dotenv").config();

function getLocale() {
  var windowURL = window.location.href;
  var url = new URL(windowURL);
  var locale = url.searchParams.get("locale");
  if (locale === "undefined" || locale === null) {
    locale = "en";
  }
  return locale;
}

const store = configureStore();

fetch("locales/"+getLocale()+".json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    ReactDOM.render(<Root store={store} i18nConstants={data}  />, document.getElementById("root"));
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
