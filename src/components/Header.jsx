import React from 'react';
import logo from "../assets/thblogo.png";

const Header = () => {
  return <div>
      <header className="container flex items-center content-center justify-between w-full p-5 px-4 mx-auto">
        <div>
          <img src={logo} alt="" className="w-12" />
        </div>
        <div>
          <ul className="flex">
            <li className="text-white hover:text-cyan-300 active:text-cyan-200">
              Home
            </li>
            <li className="text-white hover:text-cyan-300">Live</li>
            <li className="text-white hover:text-cyan-300">Shows</li>
            <li className="text-white  hover:text-cyan-300">Latest</li>
          </ul>
        </div>

        <div>
          <input type="text" placeholder="Explore" className="p-1 border-2 pill border-cyan-600" />
        </div>

        <button className="p-2 text-white rounded-full bg-cyan-600 hover:bg-cyan-300 ">
          Sign In
        </button>
      </header>
    </div>;
}

export default Header
