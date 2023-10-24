import StarButton from "./StarButton";

const Repositories = () => {
  return (
    <>
      <div>
        <ul className="flex flex-col">
          <li className=" py-6 border-b">
            <div className="flex">
              <div className="flex flex-col gap-2 w-10/12">
                <a>REPOSITORY NAME</a>
                <p>
                  Description Description Description Description Description
                  Description Description
                </p>

                <div className="flex gap-4">
                  <p>Typescript</p>
                  <p>Updated 6 days ago</p>
                </div>
              </div>
              <div>
                <button className="btn btn-sm btn-outline flex">
                  <StarButton /> Star
                </button>
              </div>
            </div>
          </li>
          <li className=" py-6 border-b">
            <div className="flex flex-col gap-2">
              <a>REPOSITORY NAME</a>
              <p>
                Description Description Description Description Description
                Description Description
              </p>
              <div className="flex gap-4">
                <p>Typescript</p>
                <p>Updated 6 days ago</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Repositories;
