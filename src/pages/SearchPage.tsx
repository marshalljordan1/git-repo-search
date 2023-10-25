import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Repositories from "../components/Repositories";
import Navbar from "../components/Navbar";

const SearchPage = () => {
  return (
    <div className="container w-screen">
      <header>
        <div className="bg-background-gray w-screen">
          <Navbar />
        </div>
      </header>

      <main>
        <div className="flex w-full">
          <Sidebar />
          <div className="flex flex-col mt-5 ms-10 w-full h-10">
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
