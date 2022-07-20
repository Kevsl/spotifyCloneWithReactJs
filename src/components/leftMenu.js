import logo from "../assets/logo.png";

import { NavLink } from "react-router-dom";
import add from "../assets/add.png";
import like from "../assets/like.png";

import cover from "../assets/1-1.jpeg";
const LeftMenu = () => {
  return (
    <div className="w-56 bg-black h-full flex-none fixed">
      <div className="p-6">
        <img src={logo} alt="logo" className="h-10" />
      </div>
      <div className="mx-2 mb-5 text-white">
        <button className="block flex items-center">
          <i className="fa-solid fa-house h-6 w-6 mr-3"></i>
          <NavLink to="/">
            <h2 className="text-white">Home</h2>
          </NavLink>
        </button>
        <button className="block flex items-center">
          <i className="fa-solid fa-magnifying-glass h-6 w-6 mr-3"></i>
          <NavLink to="/search">
            <h2 className="text-white">Search</h2>
          </NavLink>
        </button>
        <button className="block flex items-center ">
          <i className="fa-solid fa-chart-simple h-6 w-6 mr-3"></i>{" "}
          <h2 className="text-white">Library</h2>
        </button>
      </div>
      <div className="mx-2">
        <h1 className="mb-3 text-xs text-lightest tracking-widest uppercase">
          Playlists
        </h1>
        <button className="flex items-center justify-start opacity-75 hover:opacity-100 mb-2">
          <img src={add} alt="Create a playlist" className="h-6 w-6 mr-3" />
          <p className="text-sm text-white font-semibold">Create Playlist</p>
        </button>
        <button className="flex items-center justify-start opacity-75 hover:opacity-100 mb-2">
          <img src={like} alt="See liked songs" className="h-6 w-6 mr-3" />
          <p className="text-sm text-white font-semibold">Liked songs</p>
        </button>
        <div className="h-1 w-full bg-light my-3"></div>
        <div className="mx-5">
          <div className="w-full h-14 overflow-y-scroll">
            <p className="text-lightest hover:text-white text-sm py-1">
              Album1
            </p>
            <p className="text-lightest hover:text-white text-sm py-1">
              Album2
            </p>
            <p className="text-lightest hover:text-white text-sm py-1">
              Album3
            </p>
          </div>
          <button
            className="
              flex
              items-center
              justify-start
              text-lightest
              hover:text-white
              py-2
            "
          >
            <i className="fa-solid fa-circle-down mr-3"></i>
            <p className="text-xs font-semibold">Install App</p>
          </button>
        </div>
        <div className="relative pt-4">
          <div
            className="
                  w-full
                  h-full
                  flex
                  justify-end
                  items-start
                  opacity-75
                  hover:opacity-100
                  p-2
                  absolute
                "
          >
            <div className="bg-black rounded-full h-6 w-6 cursor-pointer">
              <i className="fa-solid fa-chevron-down text-white"></i>{" "}
            </div>
          </div>

          <img src={cover} alt="cover" />
        </div>
      </div>
    </div>
  );
};
export default LeftMenu;
