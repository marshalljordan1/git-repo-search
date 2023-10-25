import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.tsx";
import { DateFormatProvider } from "./context/DateFormatContext.tsx";
// import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DateFormatProvider>
        <App />
      </DateFormatProvider>
    </Provider>
  </React.StrictMode>
);
