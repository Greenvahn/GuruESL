import { Link } from "react-router-dom";
import Cardicon from "../assets/cardicon";

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-center">
          <div className="flex justify-center text-teal-600">
            <Link to="/">
              <Cardicon w={24} h={24}/>
              <span className="sr-only">Logo</span>
            </Link>
          </div>

          <p className="ml-4 text-center text-sm text-gray-500">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
