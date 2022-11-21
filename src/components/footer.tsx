import { Link } from "react-router-dom";
import Cardicon from "../assets/cardicon";

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
          <Link to="/">
              <Cardicon />
              <span className="sr-only">Logo</span>
              <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
            </Link>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
