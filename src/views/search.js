import { getArtistData } from "../services/artistsService";
import LeftMenu from "../components/leftMenu";
import { React, useState } from "react";
import Cards from "../components/cards";
import { useDispatch } from "react-redux";
import { setSearchedArtist } from "../redux/search";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="bg-dark h-screen">
      <div className="flex overflow-y-scroll" style={{ height: "88vh" }}>
        <LeftMenu />
        <div className=" ml-56 w-full h-full">
          <div className="flex items-center space-between text-white">
            <div className="flex items-center space-between w-12 my-8 px-2">
              <i className="fa-solid fa-chevron-left mx-4"></i>

              <i className="fa-solid fa-chevron-right mx-4"></i>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <h2 className="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline mx-4">
              Search for an artist
            </h2>
            <input
              type="text"
              className="w-56 rounded-md indent-2"
              onChange={(e) => {
                setInputSearch(e.target.value);
              }}
            />
            <i
              className="fa-solid fa-magnifying-glass h-6 w-6 mr-3 T  py-1 mx-2 border bg-lightest text-center rounded-md"
              onClick={() => {
                getArtistData(inputSearch).then((res) => {
                  setSearchResults(res.artists.items);
                });
              }}
            ></i>
          </div>

          <div className="w-full flex flex-wrap overflow-x-scroll   ">
            {searchResults &&
              searchResults.map((data) => {
                let imgUrl = data.images[0] ? data.images[0].url : "";
                return imgUrl.length > 1 ? (
                  <NavLink to="/albums">
                    <div
                      onClick={() => {
                        dispatch(setSearchedArtist(data.id));
                      }}
                    >
                      <Cards img={imgUrl} name={data.name} />
                    </div>
                  </NavLink>
                ) : null;
              })}
          </div>
        </div>
      </div>
      <div className="bg-light w-screen" style={{ height: "12vh" }}></div>
    </div>
  );
};
export default Search;
