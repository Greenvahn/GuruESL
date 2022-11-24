import { Link } from "react-router-dom";
import Cardicon from "../assets/cardicon";

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className="mx-auto max-w-screen-2xl p-4 px-8 mt-24">
        <div className="flex flex-row items-center justify-center">
          <div className="flex justify-center text-teal-600 mb-4">
            <Link to="/">
              <Cardicon w={34} h={34} />
              <span className="sr-only">Logo</span>
            </Link>
          </div>
          <div className="">
            <p className="ml-4 text-sm text-gray-500 font-bold">
              Made by <a href="https://github.com/Greenvahn" target="_blank" rel="noreferrer" className="underline">Greenvhan</a>
            </p>

            <p className="ml-4 text-sm text-gray-500 mb-4">
              All data available on <a href="https://elderscrollslegends.io/" target="_blank" rel="noreferrer" className="underline">The Elder Scrolls: Legends - API</a> by <a href="https://andrewbackes.com/" target="_blank" rel="noreferrer" className="underline">Andrew Backes</a>
            </p>
          </div>


          <div className="mx-8 pl-8 border-l-2 border-slate-700">
            <p className="text-xs text-gray-500">
              This website is not produced, endorsed, supported, or affiliated with ZeniMax Media Inc.
            </p>
            <p className="text-xs text-gray-500">
              ZeniMax Media Inc. Trademarks are the property of their respective owners. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
