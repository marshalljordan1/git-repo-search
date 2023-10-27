/**
 * Import React and ReactDOM for rendering the app.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Import the Provider to provide the Redux store to the app.
import { Provider } from "react-redux";
import store from "./store/store.tsx";
// Import the DateFormatProvider for date formatting.
import { DateFormatProvider } from "./context/DateFormatContext.tsx";
// Import BrowserRouter for setting up routing.
import { BrowserRouter } from "react-router-dom";

// Use ReactDOM.createRoot to render your app into an HTML element with the id "root."
ReactDOM.createRoot(document.getElementById("root")!).render(
  // Wrap the entire application in React.StrictMode for development checks.
  <React.StrictMode>
    {/* Use the Provider to provide the Redux store to the app */}
    <Provider store={store}>
      {/* Use BrowserRouter to set up routing for your app */}
      <BrowserRouter>
        {/* Use the DateFormatProvider to provide date formatting capabilities */}
        <DateFormatProvider>
          {/* Render your main App component */}
          <App />
        </DateFormatProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
