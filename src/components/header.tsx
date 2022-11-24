import { Link } from "react-router-dom";
import Cardicon from "../assets/cardicon";
// import SeachForm from "./seachForm";

const Header = () => {

  return (
    <>
      <header aria-label="Site Header" className="border-b border-slate-800">
        <div className="flex justify-between h-16 w-full px-4 bg-grayheader">

          <div className="flex items-center gap-4">
            <Link to="/">
              <Cardicon w={44} h={44}/>
              <span className="sr-only">Logo</span>
            </Link>
          </div>

          <nav
            aria-label="Site Nav"
            className="flex items-center justify-center gap-8 text-sm font-medium mr-2"
          >
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/" className="text-gray-300 hover:text-white">
              Other
            </Link>
            <Link to="/" className="text-gray-300 hover:text-white">
              About
            </Link>
          </nav>

          {/* <SeachForm /> */}
        </div>
      </header>
    </>
  );
};

export default Header;
