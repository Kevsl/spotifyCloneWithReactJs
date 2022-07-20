import LeftMenu from "../components/leftMenu";
import Cards from "../components/cards";
import { useSelector } from "react-redux";
import { getArtistAlbums } from "../services/artistsService";
import { React, useState, useEffect } from "react";

const Albums = () => {
  const [searchResults, setSearchResults] = useState([]);
  const artistSearched = useSelector((state) => state.search.value);

  useEffect(() => {
    artistSearched.length > 1 &&
      getArtistAlbums(artistSearched).then((res) => {
        setSearchResults(res.items);
        console.log(res);
      });
  }, [artistSearched]);

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
            {searchResults.length > 1 && (
              <h2 className="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline mx-4">
                Albums
              </h2>
            )}
          </div>

          <div className="w-full flex flex-wrap    ">
            {searchResults &&
              searchResults.map((data) => {
                let imgUrl = data.images[0] ? data.images[0].url : "";
                return imgUrl.length > 1 ? (
                  <Cards img={imgUrl} name={data.name} />
                ) : null;
              })}
          </div>
        </div>
      </div>
      <div className="bg-light w-screen" style={{ height: "12vh" }}></div>
    </div>
  );
};
export default Albums;
