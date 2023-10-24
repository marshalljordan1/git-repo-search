import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import Repositories from "../components/Repositories";

const SearchPage = () => {
  return (
    <>
      <div className="container pt-40">
        <div className="absolute z-0">
          <Tabs />
        </div>
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col mt-20 ms-10 w-full h-10">
            <div className="flex border-b pb-8">
              <SearchBar />
              <FilterButtons />
            </div>
            <div>
              <Repositories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
