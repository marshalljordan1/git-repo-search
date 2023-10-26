import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Repositories from "../components/Repositories";
import Navbar from "../components/Navbar";

const SearchPage = () => {
  return (
    <div className="flex flex-col">
      <header>
        <div className="bg-background-gray w-full">
          <Navbar />
        </div>
      </header>

      <main>
        <div className="flex w-full pe-10 sm:pe-16 flex-col sm:flex-row">
          <Sidebar />
          <div className="flex flex-col ms-5 sm:ms-10 w-full h-10">
            <div>
              <SearchBar />
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
