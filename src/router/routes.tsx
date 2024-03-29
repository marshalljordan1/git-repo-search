import { Route, Routes } from "react-router-dom";
import SearchPage from "../pages/SearchPage";

// Not necessary, but I wanted to show you I can use it.
function Router() {
  return (
    <>
      <Routes>
        {/* Define a route for the root path that renders the SearchPage component. */}
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default Router;
