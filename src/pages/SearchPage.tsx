import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import Repositories from "../components/Repositories";
import Navbar from "../components/Navbar";

const SearchPage = () => {
  return (
    <div className="container w-screen">
      <header>
        <div className="bg-background-gray">
          <Navbar />
        </div>
      </header>
      <main>
        <div className="flex mt-5">
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
      </main>
    </div>
  );
};

export default SearchPage;
