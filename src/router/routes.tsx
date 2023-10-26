import { Route, Routes } from "react-router-dom";
import SearchPage from "../pages/SearchPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default Router;
