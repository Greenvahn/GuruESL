import { Link } from "react-router-dom";
import Cardicon from "../assets/cardicon";
// import SeachForm from "./seachForm";

const Header = () => {

  return (
    <>
      <header aria-label="Site Header" className="border-b border-slate-400">
        <div className="flex h-16 max-w-screen-xl px-4">

          <div className="flex items-center gap-4">
            <Link to="/">
              <Cardicon w={44} h={44}/>
              <span className="sr-only">Logo</span>
              <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
            </Link>
          </div>

          <nav
            aria-label="Site Nav"
            className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
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
