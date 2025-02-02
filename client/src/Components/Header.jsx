import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <header className="bg-slate-200 shadow-md ">
        <div className="flex justify-between max-2-6xl mx-auto p-3 items-center">
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-sm flex flex-wrap ">
              <span className="text-slate-500">Real</span>
              <span className="text-slate-700">Estate</span>
            </h1>
          </Link>
          <form className="bg-slate-100 flex items-center p-3 rounded-lg">
            <input
              className="bg-transparent focus:outline-none w-24 sm:w-64"
              type="text"
              placeholder="Search..."
            />
            <FaSearch className="text-slate-600" />
          </form>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="hidden cursor-pointer sm:inline text-slate-700 hover:underline">
                Home
              </li>
            </Link>
            <Link to="/profile">
              <li className="hidden cursor-pointer sm:inline text-slate-700 hover:underline">
                About
              </li>
            </Link>
            <Link to="/signin">
              <li className="cursor-pointer text-slate-700 hover:underline">
                Sign in
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
};
